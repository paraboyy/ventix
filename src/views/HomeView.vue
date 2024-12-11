<script setup>
import Card from "../components/card.vue";
import Category from "../components/exploreCategory.vue";
import UpComing from "../components/upComingCard.vue";
import Highlights from "../components/Highlights.vue";
import MoreEvent from "../components/moreEventCard.vue";
import FooterView from "../components/footer.vue";
</script>

<template>
  <nav class="navbar bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="/img/logo-light.png" alt="Logo" height="24" class="d-inline-block align-text-top" />
      </a>

      <div class="d-flex">
        <button class="btn btn-light mx-1">
          <router-link class="decoration-none text-dark fw-bold" to="/organizer-signup">+ Create Event</router-link>

        </button>
        <button class="btn btn-pilih mx-1">
          <router-link class="decoration-none fw-bold text-light" to="/login">LogIn</router-link>
        </button>
        <!-- <button class="btn btn-pilih mx-1">
          <router-link class="decoration-none text-light" to="/signup">Sign Up</router-link>
        </button> -->
      </div>
    </div>
  </nav>

  <div class="position-relative">
    <img src="/img/bg-home.jpg" class="img-fluid" alt="Gambar Latar" />
    <div class="position-absolute top-50 start-50 translate-middle text-center text-white">
      <h1 class="fw-bold fs-1">Pick up your</h1>
      <h1 class="fw-bold text-warning">Wonderful plans</h1>
    </div>

    <div class="position-absolute top-150 start-50 translate-middle w-75">
      <div class="search-container d-flex align-items-center shadow-lg">
        <div class="d-flex align-items-center flex-grow-1">
          <!-- <i class="bi bi-search me-2"></i> -->
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
          <input type="text" class="form-control border-0" placeholder="Find the event you're interested in" />
        </div>
        <div class="divider"></div>
        <div class="d-flex align-items-center flex-grow-1">
          <!-- <i class="bi bi-geo-alt me-2"></i> -->
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
            <path
              d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"
            />
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
          </svg>
          <input type="text" class="form-control border-0" placeholder="Search by location" />
        </div>
        <button class="btn search-button ms-3">Search</button>
      </div>
    </div>
  </div>

  <div class="container my-4 mt-5">
    <Card />
  </div>

  <div class="container my-4 mt-5">
    <Category />
  </div>

  <div class="bg-dark my-4 mt-5">
    <UpComing />
  </div>

  <div class="my-4 mt-5">
    <Highlights />
  </div>

  <div class="container my-4 mt-5">
    <MoreEvent />
  </div>

  <div class="mt-5">
    <FooterView />
  </div>
</template>
