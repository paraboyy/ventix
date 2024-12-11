<script setup>
import Navbar from "../../components/Navbar/owner.vue";
import Sidebar from "../../components/Sidebar/sidebarOwner.vue";
import { ref, onMounted } from "vue";
import axios from "axios";

// State Management
const events = ref([]); // Data events dari API
const currentPage = ref(1); // Halaman saat ini
const itemsPerPage = 8; // Jumlah event per halaman
const totalPages = ref(1); // Total halaman berdasarkan respons API

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
      params: {
        page: currentPage.value,
        limit: itemsPerPage,
      },
    });

    if (Array.isArray(response.data)) {
      events.value = response.data.map(event => ({
        ...event,
        imageLink: event.imageLink || "https://via.placeholder.com/300x150", // Default placeholder jika tidak ada gambar
      }));

      totalPages.value = Math.ceil(response.data.length / itemsPerPage); // Menghitung total halaman
    } else {
      console.error("Data event yang diterima tidak valid:", response.data);
    }
  } catch (error) {
    console.error("Error fetching events:", error);
  }
};

// Fungsi untuk mengganti halaman dan memuat ulang data
const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    fetchEvents(); // Panggil ulang fetch events
  }
};

// Lifecycle
onMounted(() => {
  fetchEvents(); // Panggil saat komponen dipasang
});
</script>

<template>
  <Navbar />
  <div class="container-fluid">
    <div class="row">
      <Sidebar />

      <div class="col-md-10 mt-1">
        <div class="container my-4">
          <h2 class="mb-2 fw-bold">Dashboard</h2>

          <div class="row g-3">
            <!-- Event Cards -->
            <div v-for="event in events" :key="event._id?.$oid" class="col-md-3">
              <div class="card shadow border-none">
                <div class="p-2">
                  <img :src="event.imageLink" class="card-img-top rounded" alt="Event Image" />
                </div>
                <div class="card-body">
                  <h5 class="card-title">{{ event.title || "Untitled Event" }}</h5>
                  <p class="card-text">
                    {{ event.date?.$date ? new Date(event.date.$date).toLocaleString() : "No Date Available" }}
                    <br />
                    {{ event.venueName || "No Venue Available" }}
                  </p>
                  <button class="btn btn-warning text-light border-dark w-100">View Detail</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <nav class="mt-4">
            <ul class="pagination justify-content-center">
              <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <button class="page-link" @click="changePage(currentPage - 1)">&laquo;</button>
              </li>
              <li v-for="page in totalPages" :key="'page-' + page" class="page-item" :class="{ active: currentPage === page }">
                <button class="page-link" @click="changePage(page)">{{ page }}</button>
              </li>
              <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                <button class="page-link" @click="changePage(currentPage + 1)">&raquo;</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>