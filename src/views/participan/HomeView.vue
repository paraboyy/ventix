<script setup>
import Card from "../../components/Card/topEventsCard.vue";
import NewEvents from "../../components/Card/newEvents.vue";
import UpComingCard from "../../components/upComingCard.vue";
import Highlight from "../../components/Highlights.vue";
import FooterView from "../../components/footer.vue";
import Navbar from "../../components/Navbar/participan.vue";
</script>

<template>
  <Navbar />
  <div class="bg-login p-4">
    <!-- <div class="container p-4"> -->
    <div class="text-center">
      <h1 class="fw-bold text-light">Discover Unforgettable Experience at</h1>
      <h1 class="fw-bold text-warning">Spectacular Events</h1>
    </div>

    <div class="mt-4">
      <div class="justify-self-center search-container w-75 d-flex align-items-center shadow-lg">
        <div class="d-flex align-items-center flex-grow-1">
          <!-- <i class="bi bi-search me-2"></i> -->
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
          <input type="text" class="form-control border-0" placeholder="Search Ticket Events" />
        </div>
        <button class="btn search-button ms-3">Search</button>
      </div>
    </div>
    <!-- </div> -->

    <div class="container my-4 mt-5">
      <Card />
    </div>
  </div>

  <div class="container my-4 mt-5">
    <NewEvents />
  </div>

  <div class="bg-dark my-4 mt-5">
    <UpComingCard />
  </div>

  <div class="container-4 mt-5">
    <Highlight />
  </div>

  <div class="mt-5">
    <FooterView />
  </div>
</template>
