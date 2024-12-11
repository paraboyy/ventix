<script setup>
import Navbar from "../../components/Navbar/owner.vue";
import Sidebar from "../../components/Sidebar/sidebarOwner.vue";
import { ref, onMounted } from "vue";
import axios from "axios";

// State Management
const events = ref([]);

// Fungsi untuk memanggil API
const fetchEvents = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token tidak ditemukan di localStorage");
      return;
    }

    const response = await axios.get("/get-event", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (Array.isArray(response.data)) {
      events.value = response.data.map((event) => ({
        id: event._id?.$oid || "",
        organizer: event.organizer || "Unknown Organizer",
        title: event.title || "Untitled Event",
        ticketPrice: event.tickets?.[0]?.price || 0,
        date: event.date?.$date ? new Date(event.date.$date).toLocaleDateString() : "No Date Available",
        statusEvent: event.statusEvent || "Pending",
      }));
    } else {
      console.error("Data event yang diterima tidak valid:", response.data);
    }
  } catch (error) {
    console.error("Error fetching events:", error);
  }
};

// Lifecycle
onMounted(() => {
  fetchEvents();
});
</script>

<template>
  <Navbar />
  <div class="container-fluid">
    <div class="row">
      <Sidebar />

      <div class="col-md-10 mt-1">
        <div class="container table-container">
          <h3 class="fw-bold mt-4">Approved Events</h3>
          <table class="table shadow rounded mt-4">
            <thead>
              <tr>
                <th>Organizers</th>
                <th>Event Name</th>
                <th>Ticket Price</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="event in events" :key="event.id">
                <td><img src="https://via.placeholder.com/40" alt="Avatar" /> {{ event.organizer }}</td>
                <td>{{ event.title }}</td>
                <td>${{ event.ticketPrice.toFixed(2) }}</td>
                <td>{{ event.date }}</td>
                <td>
                  <button v-if="event.statusEvent === 'Pending'" class="btn btn-warning actions-btn">Approve</button>
                  <button v-else-if="event.statusEvent === 'Published'" class="btn btn-danger "> Delete </button>
                  <span v-else class="text-danger">Rejected</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
