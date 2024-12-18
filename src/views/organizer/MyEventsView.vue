<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import Navbar from "../../components/Navbar/organizer.vue";
import Sidebar from "../../components/Sidebar/sidebar.vue";

const events = ref([]);
const organizerId = localStorage.getItem("id");

const fetchEvents = async () => {
  try {
    const response = await axios.get("/events"); 
    const allEvents = response.data.data;

    // Filter event berdasarkan organizer ID
    events.value = allEvents.filter(event => event.organizer === organizerId);
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
  <div class="container-fluid">
    <div class="row">
      <Sidebar />

      <div class="col-md-10 mt-1">
        <div class="container my-4">
          <h2 class="mb-2">My Events</h2>

          <div class="row g-3">
            <!-- Event Card -->
            <div v-for="event in events" :key="event._id" class="col-md-3">
              <div class="card shadow border-none">
                <div class="p-2">
                  <img :src="event.imageLink" class="card-img-top rounded" :alt="event.title" />
                </div>
                <div class="card-body">
                  <h5 class="card-title">{{ event.title }}</h5>
                  <p class="card-text">
                    {{ new Date(event.date).toLocaleString() }}<br />
                    {{ event.venueName }}
                  </p>
                  <button class="btn btn-warning text-light border-dark w-100">View Options</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <nav v-if="events.length > 0" class="mt-4">
            <ul class="pagination justify-content-center">
              <li class="page-item active"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">4</a></li>
              <li class="page-item"><a class="page-link" href="#">...</a></li>
              <li class="page-item"><a class="page-link" href="#">10</a></li>
            </ul>
          </nav>

          <div v-else class="text-center mt-4">
            <p>No events found for this organizer.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
