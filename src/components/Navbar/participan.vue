<template>
  <nav class="navbar bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="/img/logo-light.png" alt="Logo" height="24" class="d-inline-block align-text-top" />
      </a>

      <div class="">
        <a
          href="/home"
          :class="{
            'fw-bold': true,
            'p-2': true,
            'decoration-none': true,
            'text-warning': currentPath === '/home',
            'hover-warning': currentPath !== '/home',
          }"
        >
          Explore
        </a>
        <a
          href="/event"
          :class="{
            'fw-bold': true,
            'p-2': true,
            'decoration-none': true,
            'text-warning': currentPath === '/event',
            'hover-warning': currentPath !== '/event',
          }"
        >
          Events</a
        >
        <a href="/dashboard" class="fw-bold p-2 hover-warning decoration-none">My Tickets</a>
      </div>

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
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      currentPath: window.location.pathname,
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
