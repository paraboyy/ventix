<template>
  <div class="col-md-2 bg-light text-dark vh-100 p-3 shadow-lg d-flex flex-column justify-content-between">
    <ul class="nav flex-column mt-4">
      <li class="nav-item mb-2 btn-hover">
        <a
          href="/dashboard-owner"
          :class="{
            'nav-link': true,
            'text-white': currentPath === '/dashboard-owner',
            'bg-warning': currentPath === '/dashboard-owner',
            'text-dark': currentPath !== '/dashboard-owner',
          }"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-columns-gap" viewBox="0 0 16 16">
            <path
              d="M6 1v3H1V1zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm14 12v3h-5v-3zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM6 8v7H1V8zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm14-6v7h-5V1zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"
            />
          </svg>
          Dashboard
        </a>
      </li>
      <li class="nav-item btn-hover">
        <a
          href="/event-owner"
          :class="{
            'nav-link': true,
            'text-light': currentPath === '/event-owner',
            'bg-warning': currentPath === '/event-owner',
            'text-dark': currentPath !== '/event-owner',
          }"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-ticket-detailed" viewBox="0 0 16 16">
            <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M5 7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z" />
            <path
              d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6zM1.5 4a.5.5 0 0 0-.5.5v1.05a2.5 2.5 0 0 1 0 4.9v1.05a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1.05a2.5 2.5 0 0 1 0-4.9V4.5a.5.5 0 0 0-.5-.5z"
            />
          </svg>
          Events
        </a>
      </li>
      <li class="nav-item btn-hover">
        <a
          href="/order-owner"
          :class="{
            'nav-link': true,
            'text-light': currentPath === '/order-owner',
            'bg-warning': currentPath === '/order-owner',
            'text-dark': currentPath !== '/order-owner',
          }"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-ticket-detailed" viewBox="0 0 16 16">
            <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M5 7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z" />
            <path
              d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6zM1.5 4a.5.5 0 0 0-.5.5v1.05a2.5 2.5 0 0 1 0 4.9v1.05a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1.05a2.5 2.5 0 0 1 0-4.9V4.5a.5.5 0 0 0-.5-.5z"
            />
          </svg>
          Order
        </a>
      </li>
      <li class="nav-item btn-hover">
        <a
          href="/organizer"
          :class="{
            'nav-link': true,
            'text-light': currentPath === '/organizer',
            'bg-warning': currentPath === '/organizer',
            'text-dark': currentPath !== '/organizer',
          }"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-ticket-detailed" viewBox="0 0 16 16">
            <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M5 7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z" />
            <path
              d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6zM1.5 4a.5.5 0 0 0-.5.5v1.05a2.5 2.5 0 0 1 0 4.9v1.05a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1.05a2.5 2.5 0 0 1 0-4.9V4.5a.5.5 0 0 0-.5-.5z"
            />
          </svg>
          Organizer
        </a>
      </li>
    </ul>

    <button class="btn btn-danger mt-4" @click="handleLogout">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right me-2" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M6 3a1 1 0 0 1 1-1h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a1 1 0 0 1-1-1V3zm1-1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H7z"/>
        <path fill-rule="evenodd" d="M11.354 8.354a.5.5 0 0 0 0-.708L9.172 5.464a.5.5 0 1 0-.708.708L10.293 8l-1.829 1.828a.5.5 0 1 0 .708.708l2.182-2.182z"/>
        <path fill-rule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
      </svg>
      Logout
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPath: window.location.pathname,
    };
  },
  methods: {
    handleLogout() {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("id");

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
