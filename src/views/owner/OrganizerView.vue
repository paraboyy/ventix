<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import Navbar from "../../components/Navbar/owner.vue";
import Sidebar from "../../components/Sidebar/sidebarOwner.vue";

// State untuk menyimpan data dari API
const organizers = ref([]);

// Fungsi untuk mengambil data dari API
const fetchOrganizers = async () => {
  try {
    const response = await axios.get("/talents");
    organizers.value = response.data.data;
  } catch (error) {
    console.error("Error fetching organizers:", error);
  }
};

// Fungsi untuk memperbarui status melalui API
const updateStatus = async (id, newStatus) => {
  try {
    await axios.put(`/talents/${id}`, { status: newStatus });
    const organizer = organizers.value.find((o) => o._id === id);
    if (organizer) {
      organizer.status = newStatus;
    }
  } catch (error) {
    console.error("Error updating status:", error);
  }
};

// Panggil fetchOrganizers saat komponen dimuat
onMounted(() => {
  fetchOrganizers();
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
                <th>Username</th>
                <th>Organizers</th>
                <th>Location</th>
                <th>Organizers Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="organizer in organizers" :key="organizer._id">
                <td>
                  <img src="https://via.placeholder.com/40" alt="Avatar" />
                  {{ organizer.name }}
                </td>
                <td>{{ organizer.organizer || organizer.organization }}</td>
                <td>New York</td> <!-- Ganti dengan lokasi jika tersedia di API -->
                <td>
                  <span 
                    class="badge" 
                    :class="{
                      'bg-primary': organizer.status === 'pending',
                      'bg-success': organizer.status === 'approved',
                      'bg-danger': organizer.status === 'rejected',
                    }"
                  >
                    {{ organizer.status || 'unknown' }}
                  </span>
                </td>
                <td>
                  <button 
                    class="btn btn-success actions-btn" 
                    v-if="organizer.status === 'pending'" 
                    @click="updateStatus(organizer._id, 'approved')"
                  >
                    Approve
                  </button>
                  <button 
                    class="btn btn-danger actions-btn" 
                    v-if="organizer.status === 'approved'" 
                    @click="updateStatus(organizer._id, 'rejected')"
                  >
                    Delete
                  </button>
                  <button 
                    class="btn btn-secondary actions-btn" 
                    v-if="organizer.status === 'rejected'" 
                    disabled
                  >
                    Rejected
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
