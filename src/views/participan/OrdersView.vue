<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import Navbar from "../../components/Navbar/participan.vue";
import FooterView from "../../components/footer.vue";
import axios from "axios";
// import Swal from "sweetalert2";

const route = useRoute();
const router = useRouter();
const eventData = ref(null);
const error = ref(null);
const selectedTickets = ref({}); // Objek untuk menyimpan jumlah tiket yang dipilih

// Fetch event data
const fetchEvent = async () => {
  const eventId = route.params.eventId;

  try {
    const response = await axios.get(`/events/${eventId}`);
    if (!response.data.error) {
      eventData.value = response.data.data[0];
      initializeTicketSelection();
    } else {
      throw new Error(response.data.message);
    }
  } catch (err) {
    error.value = err.message || "Failed to fetch event data.";
  }
};

// Initialize ticket selection with 0 quantity
const initializeTicketSelection = () => {
  eventData.value.tickets.forEach((ticket) => {
    selectedTickets.value[ticket._id] = 0;
  });
};

// Compute total price dynamically based on selected tickets
const computeTotalPrice = () => {
  return eventData.value.tickets.reduce((total, ticket) => {
    const quantity = selectedTickets.value[ticket._id] || 0;
    return total + ticket.price * quantity;
  }, 0);
};

// Compute total tickets
const computeTotalTickets = () => {
  return Object.values(selectedTickets.value).reduce((sum, qty) => sum + qty, 0);
};

// Handle payment
const handlePayNow = async () => {
  const userId = localStorage.getItem("id");
  const userName = localStorage.getItem("username");
  const userEmail = document.getElementById("email").value;
  const totalAmount = computeTotalPrice();

  const selectedTicketData = eventData.value.tickets
    .filter((ticket) => selectedTickets.value[ticket._id] > 0)
    .map((ticket) => ({
      type: ticket.type,
      price: ticket.price,
      quantity: selectedTickets.value[ticket._id],
    }));

  if (!userId || !userName) {
    Swal.fire({
      icon: "error",
      title: "User not logged in",
      text: "Please log in to proceed with the payment.",
    });
    return;
  }

  if (!userEmail) {
    Swal.fire({
      icon: "error",
      title: "Email is required",
      text: "Please enter your email address to proceed.",
    });
    return;
  }

  if (selectedTicketData.length === 0) {
    Swal.fire({
      icon: "error",
      title: "No Tickets Selected",
      text: "Please select at least one ticket to proceed.",
    });
    return;
  }

  try {
    const requestData = {
      name: `Pembayaran Tiket ${eventData.value.title}`,
      user_id: userId,
      organizer_id: eventData.value.organizer,
      order_id: "674e41a87bf0a16c4de7077d", // Update order_id dynamically if needed
      amount: totalAmount,
      userEmail,
      userName,
      tickets: selectedTicketData, // Include selected ticket details
    };

    console.log("Data yang dikirim:", requestData);

    const paymentResponse = await axios.post("/create", requestData);

    if (!paymentResponse.data.error) {
      const { redirect_url } = paymentResponse.data.data.transaction;

      Swal.fire({
        icon: "success",
        title: "Payment Initiated",
        text: "You will be redirected to the payment page.",
        timer: 3000,
        showConfirmButton: false,
      }).then(() => {
        window.open(redirect_url, "_blank");
      });
    } else {
      throw new Error(paymentResponse.data.message);
    }
  } catch (err) {
    Swal.fire({
      icon: "error",
      title: "Payment Failed",
      text: err.message || "An error occurred while initiating the payment.",
    });
  }
};

// Fetch event data on mounted
onMounted(fetchEvent);
</script>

<template>
  <Navbar />
  <div class="container mt-4">
    <div v-if="error" class="alert alert-danger">{{ error }}</div>
    <div v-else-if="!eventData" class="text-center">
      <p>Loading event details...</p>
    </div>
    <div v-else>
      <div class="row">
        <!-- Main Content -->
        <div class="col-lg-8 shadow-lg mb-5 mt-5 p-3 rounded">
          <!-- Event Details -->
          <div>
            <h2 class="fw-bold">{{ eventData.title }}</h2>
            <p><strong>Date and Time:</strong> {{ new Date(eventData.date).toLocaleString() }}</p>
            <p><strong>Place:</strong> {{ eventData.venueName }}</p>
            <p>{{ eventData.about }}</p>
          </div>

          <!-- Contact Information -->
          <div class="card p-4 mb-4">
            <h5 class="fw-bold">Contact Information</h5>
            <div class="row mt-3">
              <div class="col-md-6">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Enter your email" />
              </div>
              <div class="col-md-6">
                <label for="phone" class="form-label">Phone Number</label>
                <input type="text" class="form-control" id="phone" placeholder="Enter your phone number" />
              </div>
            </div>
          </div>

          <!-- Ticket Selection -->
          <div class="card p-4">
            <h5 class="fw-bold">Select Tickets</h5>
            <div v-for="ticket in eventData.tickets" :key="ticket._id" class="mb-3">
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <span>{{ ticket.type }}</span>
                  <span class="ms-2 text-muted">{{ ticket.price.toLocaleString() }} IDR</span>
                </div>
                <div>
                  <input
                    type="number"
                    min="0"
                    :value="selectedTickets[ticket._id]"
                    @input="selectedTickets[ticket._id] = parseInt($event.target.value) || 0"
                    class="form-control"
                    style="width: 80px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Summary Section -->
        <div class="col-lg-4">
          <div class="card p-4 shadow">
            <h5 class="fw-bold">Summary</h5>
            <div class="d-flex justify-content-between">
              <span>Total Tickets</span>
              <span>{{ computeTotalTickets() }}</span>
            </div>
            <div class="d-flex justify-content-between fw-bold">
              <span>Total Price</span>
              <span>{{ computeTotalPrice().toLocaleString() }} IDR</span>
            </div>
            <button class="btn btn-warning w-100 mt-4" @click="handlePayNow">Pay Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterView />
</template>
