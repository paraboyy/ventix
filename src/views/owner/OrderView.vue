<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import Navbar from "../../components/Navbar/owner.vue";
import Sidebar from "../../components/Sidebar/sidebarOwner.vue";

// State untuk menyimpan data dari API
const orders = ref([]);

// Fungsi untuk mengambil data dari API utama
const fetchOrders = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token tidak ditemukan di localStorage");
      return;
    }

    const response = await axios.get("/participant/get-checkout-event", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data && Array.isArray(response.data)) {
      const enrichedOrders = response.data.map((order) => ({
        id: order._id.$oid,
        userId: order.user_id.$oid,
        eventId: order.event.$oid,
        paymentStatus: order.payment_status ? "paid" : (order.payment_status === false ? "false" : "pending"),
        createdAt: new Date(order.createdAt.$date).toLocaleDateString(),
      }));

      orders.value = enrichedOrders;
    } else {
      console.error("Data orders tidak valid:", response.data);
    }
  } catch (error) {
    console.error("Error fetching orders:", error);
  }
};

// Lifecycle
onMounted(() => {
  fetchOrders();
});
</script>

<template>
  <Navbar />
  <div class="container-fluid">
    <div class="row">
      <Sidebar />

      <div class="col-md-10 mt-1">
        <div class="container table-container">
          <h3 class="fw-bold mt-4">List Order Ticket</h3>
          <table class="table shadow rounded mt-4">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>User ID</th>
                <th>Event ID</th>
                <th>Payment Status</th>
                <th>Order Date</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="order in orders" :key="order.userId">
                <td>{{ order.id }}</td>
                <td>{{ order.userId }}</td>
                <td>{{ order.eventId }}</td>
                <td>
                  <span
                    :class="{
                      'badge bg-success': order.paymentStatus === 'paid',
                      'badge bg-primary text-dark': order.paymentStatus === 'pending',
                      'badge bg-danger text-light': order.paymentStatus === 'false',
                    }"
                  >
                    {{ order.paymentStatus }}
                  </span>
                </td>
                <td>{{ order.createdAt }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
