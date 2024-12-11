<template>
  <nav class="navbar bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="/img/logo-light.png" alt="Logo" height="24" class="d-inline-block align-text-top" />
      </a>

      <div>
        <a class="text-light decoration-none" href="/dashboard-organizer">Home</a>
      </div>

      <div class="d-flex">
        <!-- <button class="btn btn-warning mx-4 text-light">
          <router-link class="decoration-none text-light" to="/create/event">+ Create Event</router-link>
        </button> -->
        <div class="d-flex align-items-center">
          <img src="https://via.placeholder.com/40" class="rounded-circle mx-2" alt="Profile Picture" />
          <a href="#" class="text-light decoration-none" @click="toggleDropdown">{{ userName || "Username" }}</a>

          <!-- Dropdown menu untuk logout -->
          <ul v-if="dropdownVisible" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <a class="dropdown-item" href="#" @click="handleLogout">Logout</a>
            </li>
          </ul>
        </div>
        <!-- <a href="" class="text-light decoration-none">User Icon</a> -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      userName: localStorage.getItem("username"),
      dropdownVisible: false,
    };
  },
  methods: {
    // Toggle dropdown visibility
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },

    // Fungsi untuk handle logout
    handleLogout() {
      // Menghapus token dan username dari localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("username");

      // Arahkan pengguna ke halaman login
      this.$router.push("/");

      // Menampilkan SweetAlert untuk konfirmasi logout
      Swal.fire({
        icon: "success",
        title: "Logout Successful",
        text: "You have been logged out.",
      });
    },
  },
};
</script>
