<template>
  <div class="bg-login">
    <div class="container vh-100 d-flex justify-content-center align-items-center">
      <div class="card bg-secondary text-white shadow-lg p-4 W-35" style="border-radius: 15px">
        <div class="d-flex justify-content-between">
          <h4 class="fw-bold">Create Events</h4>
          <button class="btn-close btn-close-white" aria-label="Close"></button>
        </div>
        <form @submit.prevent="handleRegister">
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input v-model="username" type="text" class="form-control" id="username" placeholder="Username" required />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input v-model="email" type="text" class="form-control" id="email" placeholder="example.email@gmail.com" required />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <div class="input-group">
              <input v-model="password" type="password" class="form-control" id="password" placeholder="Enter at least 8+ characters" required />
              <button class="btn btn-outline-light" type="button" @click="togglePasswordVisibility">
                <i :class="passwordVisible ? 'bi bi-eye' : 'bi bi-eye-slash'"></i>
              </button>
            </div>
          </div>
          <div class="form-check mb-3">
            <input type="checkbox" class="form-check-input" id="terms" required />
            <label class="form-check-label" for="terms">I agree with <a href="#" class="text-warning text-decoration-none">Terms & Conditions</a></label>
          </div>
          <div class="d-grid">
            <button type="submit" class="btn btn-warning fw-bold">Sign Up</button>
          </div>
        </form>
        <div class="text-center">
          <span class="text-muted">Already have an account? <a href="/login" class="text-warning text-decoration-none">Login</a></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import Swal from "sweetalert2";

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      role: "organizer",
      passwordVisible: false,
    };
  },
  methods: {
    // Fungsi untuk toggle visibilitas password
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    },

    // Fungsi untuk menangani registrasi
    async handleRegister() {
      try {
        // Buat objek FormData
        const formData = new FormData();
        formData.append("username", this.username);
        formData.append("email", this.email);
        formData.append("password", this.password);
        formData.append("role", this.role);

        // Kirim permintaan POST dengan FormData
        const response = await axios.post("register", formData, {
          headers: {
            "Content-Type": "multipart/form-data", // Pastikan header sesuai dengan form-data
          },
        });

        // Jika registrasi berhasil, tampilkan SweetAlert sukses
        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: "You can now log in with your credentials.",
        }).then(() => {
          // Arahkan pengguna ke halaman login setelah tombol OK
          this.$router.push("/login");
        });
      } catch (error) {
        // Menangani error jika registrasi gagal
        if (error.response) {
          Swal.fire({
            icon: "error",
            title: "Registration Failed",
            text: error.response.data.message || "There was an error with your registration.",
          });
        } else if (error.request) {
          Swal.fire({
            icon: "error",
            title: "No Response",
            text: "There was no response from the server. Please try again later.",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "An error occurred while submitting the registration form.",
          });
        }
      }
    },
  },
};
</script>
