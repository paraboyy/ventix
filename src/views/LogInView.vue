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
            <label for="email" class="form-label">Username</label>
            <input type="username" class="form-control" id="email" placeholder="example.email@gmail.com" v-model="email" required />
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
        <!-- <div class="text-center my-3">
          <span class="text-muted">Or sign up with</span>
          <div class="d-flex justify-content-center mt-2">
            <button class="btn btn-light rounded-circle me-2"><i class="bi bi-google"></i></button>
            <button class="btn btn-light rounded-circle"><i class="bi bi-facebook"></i></button>
          </div>
        </div> -->
        <div class="text-center">
          <span class="text-muted">Belum memiliki account? <a href="#" class="text-warning text-decoration-none">Signup</a></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handleLogin(event) {
      event.preventDefault(); // Mencegah submit form default
      try {
        const response = await axios.post("api-token/token", {
          username: this.email,
          password: this.password,
        });
        // Menyimpan token atau data login
        const { access_token, token_type } = response.data;
        localStorage.setItem("token", access_token);
        localStorage.setItem("token type", token_type);
        // console.log("Login berhasil:", token_type);
        alert("Login berhasil!");
        // Arahkan pengguna ke halaman berikutnya
        this.$router.push("/dashboard");
      } catch (error) {
        // Menangani error lebih detail
        if (error.response) {
          // Jika server memberikan respons error (status code selain 2xx)
          console.error("Error login:", error.response.data);
          alert("Login gagal! " + (error.response.data.message || "Periksa kembali email dan password Anda."));
        } else if (error.request) {
          // Jika permintaan dikirim tetapi tidak ada respons
          console.error("No response from server:", error.request);
          alert("Tidak ada respons dari server. Coba lagi nanti.");
        } else {
          // Error yang terjadi saat mengatur permintaan
          console.error("Error setup request:", error.message);
          alert("Terjadi kesalahan saat mengirim permintaan. Coba lagi.");
        }
      }
    },
  },
};
</script>
