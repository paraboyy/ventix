<script setup>
import { ref, onMounted } from "vue";
import Navbar from "../../components/Navbar/participan.vue";
import FooterView from "../../components/footer.vue";
import axios from "axios";

// State untuk menyimpan events
const events = ref([]);

// Mengambil id_user dan token dari localStorage
const userId = localStorage.getItem("id");
const Username = localStorage.getItem("username");
const token = localStorage.getItem("token");

// Fungsi untuk mengambil id_event dari API order berdasarkan id_user
const fetchOrderEventIds = async () => {
  try {
    // Panggil API order untuk mendapatkan data order
    const orderResponse = await axios.get("/participant/get-checkout-event", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const orders = orderResponse.data;
    console.log("Order API Response:", orders);

    // Filter order berdasarkan id_user dan mengambil id_event dari "$oid"
    const userOrders = orders.filter((order) => order.user_id.$oid === userId);
    const eventIds = userOrders.map((order) => order.event.$oid);

    console.log("Filtered Event IDs:", eventIds);
    return eventIds;
  } catch (error) {
    console.error("Error fetching orders:", error);
    return [];
  }
};

// Fungsi untuk mengambil event berdasarkan id_event yang didapat dari order
const fetchEvents = async () => {
  try {
    // Ambil id_event dari API order
    const eventIds = await fetchOrderEventIds();

    if (eventIds.length > 0) {
      // Panggil API events untuk mendapatkan semua event
      const response = await axios.get("/events");
      const allEvents = response.data.data;
      console.log("All Events Data:", allEvents);

      // Filter event yang memiliki id_event yang sama
      events.value = allEvents.filter((event) => eventIds.includes(event._id));
      console.log("Filtered Events:", events.value);
    } else {
      console.warn("No events found for this user.");
    }
  } catch (error) {
    console.error("Error fetching events:", error);
  }
};

onMounted(() => {
  fetchEvents();
});
</script>

<template>
  <Navbar />
  <div class="container mt-4 mb-5">
    <div class="row">
      <!-- Profile Section -->
      <div class="col-md-3">
        <div class="profile-card shadow">
          <img src="https://via.placeholder.com/100" alt="Profile Picture" />
          <h5 class="mt-3">{{ Username }}</h5>
          <p>{{ Username }}@gmail.com</p>
          <!-- <p>24 Purchases</p> -->
          <button class="btn btn-warning">Edit Profile</button>
        </div>
      </div>

      <!-- Tickets Section -->
      <div class="col-md-9">
        <ul class="nav nav-tabs mb-4">
          <li class="nav-item">
            <a class="nav-link active" href="#upcoming" data-bs-toggle="tab">Upcoming</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#used" data-bs-toggle="tab">Used</a>
          </li>
        </ul>

        <div class="tab-content">
          <div class="tab-pane fade show active" id="upcoming">
            <div class="row">
              <div v-for="event in events" :key="event._id" class="col-md-6">
                <div class="ticket-card shadow">
                  <img :src="event.imageLink" alt="Event Image" />
                  <div class="ticket-info">
                    <h6>{{ event.title }}</h6>
                    <p>{{ new Date(event.date).toLocaleString() }}</p>
                    <small>{{ event.venueName }}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="used">
            <p>No used tickets available.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterView />
</template>
