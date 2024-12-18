<template>
  <div class="bg-login">
    <div class="container vh-100 d-flex justify-content-center align-items-center">
      <div class="card bg-secondary text-white shadow-lg p-4 W-35" style="border-radius: 15px">
        <div class="d-flex justify-content-between">
          <h4 class="fw-bold">Login.</h4>
          <button class="btn-close btn-close-white" aria-label="Close"></button>
        </div>
        <!-- <p class="text-muted">Create an account</p> -->
        <form @submit.prevent="handleLogin">
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input type="text" class="form-control" id="username" placeholder="Username" v-model="username" required />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <div class="input-group">
              <input type="password" class="form-control" id="password" placeholder="Enter at least 8+ characters" v-model="password" required />
              <button class="btn btn-outline-light" type="button">
                <i class="bi bi-eye-slash"></i>
              </button>
            </div>
          </div>
          <!-- <div class="form-check mb-3">
            <input type="checkbox" class="form-check-input" id="terms" required />
            <label class="form-check-label" for="terms">I agree with <a href="#" class="text-warning text-decoration-none">Terms & Conditions</a></label>
          </div> -->
          <div class="d-grid">
            <button type="submit" class="btn btn-warning fw-bold">Login</button>
          </div>
        </form>
        <div class="text-center my-3">
          <span class="text-muted">Or Login with</span>
          <div class="d-flex justify-content-center mt-2">
            <button class="btn btn-light rounded-circle me-2"><i class="bi bi-google"></i></button>
            <button class="btn btn-light rounded-circle"><i class="bi bi-facebook"></i></button>
          </div>
        </div>
        <div class="text-center">
          <span class="text-muted">Belum memiliki account? <a href="/signup" class="text-warning text-decoration-none">Signup</a></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async handleLogin(event) {
      event.preventDefault();
      try {
        // Buat objek FormData
        const formData = new FormData();
        formData.append("username", this.username);
        formData.append("password", this.password);

        // Kirim permintaan POST dengan FormData
        const response = await axios.post("token", formData, {
          headers: {
            "Content-Type": "multipart/form-data", // Pastikan header sesuai dengan form-data
          },
        });

        // Menyimpan token atau data login
        const { access_token } = response.data;
        localStorage.setItem("token", access_token);

        // Decode token JWT untuk mendapatkan data role
        const decodedToken = jwtDecode(access_token);
        const userRole = decodedToken.role;

        localStorage.setItem("id", decodedToken.id);
        localStorage.setItem("username", decodedToken.sub);

        // Menampilkan SweetAlert berdasarkan hasil login
        Swal.fire({
          icon: "success",
          title: "Login Berhasil",
          text: "Anda berhasil login!",
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            // Arahkan pengguna berdasarkan role setelah menekan tombol OK
            if (userRole === "participant") {
              this.$router.push("/home");
            } else if (userRole === "owner") {
              this.$router.push("/dashboard-owner");
            } else if (userRole === "organizer") {
              this.$router.push("/dashboard-organizer");
            } else {
              // Jika role tidak dikenali, arahkan ke halaman default
              this.$router.push("/");
            }
          }
        });
      } catch (error) {
        // Tangani error dengan SweetAlert
        if (error.response) {
          console.error("Error login:", error.response.data);
          Swal.fire({
            icon: "error",
            title: "Login Gagal",
            text: error.response.data.message || "Periksa kembali email dan password Anda.",
          });
        } else if (error.request) {
          console.error("No response from server:", error.request);
          Swal.fire({
            icon: "error",
            title: "Tidak Ada Respons",
            text: "Tidak ada respons dari server. Coba lagi nanti.",
          });
        } else {
          console.error("Error setup request:", error.message);
          Swal.fire({
            icon: "error",
            title: "Terjadi Kesalahan",
            text: "Terjadi kesalahan saat mengirim permintaan. Coba lagi.",
          });
        }
      }
    },
  },
};
</script>
