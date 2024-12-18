<template>
  <nav class="navbar bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="/img/logo-light.png" alt="Logo" height="24" class="d-inline-block align-text-top" />
      </a>

      <div class="d-flex">
        <button class="btn btn-pilih mx-4">
          <router-link class="decoration-none text-light" to="/create/event">+ Create Event</router-link>
        </button>
        <div class="d-flex align-items-center position-relative">
          <img src="https://via.placeholder.com/40" class="rounded-circle mx-2" alt="Profile Picture" />
          <a 
            href="#"
            class="text-light decoration-none"
            @click.prevent="toggleDropdown"
          >
            {{ userName || "Username" }}
          </a>

          <!-- Dropdown menu untuk logout -->
          <ul 
            :class="['dropdown-menu', { show: dropdownVisible }]"
            style="position: absolute; top: 100%; right: 0; z-index: 1000;"
          >
            <li>
              <a class="dropdown-item" href="#" @click="handleLogout">Logout</a>
            </li>
          </ul>
        </div>
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
  mounted() {
    // Menutup dropdown jika pengguna mengklik di luar elemen dropdown
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    // Membersihkan event listener saat komponen dihancurkan
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },
    handleClickOutside(event) {
      const dropdown = this.$el.querySelector(".dropdown-menu");
      if (dropdown && !dropdown.contains(event.target)) {
        this.dropdownVisible = false;
      }
    },
    handleLogout() {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      this.$router.push("/");
      Swal.fire({
        icon: "success",
        title: "Logout Successful",
        text: "You have been logged out.",
      });
    },
  },
};
</script>

