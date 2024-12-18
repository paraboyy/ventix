<script setup>
import { ref, onMounted, computed } from "vue";
import Navbar from "../../components/Navbar/participan.vue";
import UpComing from "../../components/moreEventCard.vue";
import FooterView from "../../components/footer.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const events = ref([]);
const searchQuery = ref("");
const locationQuery = ref("");
const selectedFilters = ref({
  category: "All",
  pricing: "",
  type: [],
  language: [],
});
const currentPage = ref(1);
const eventsPerPage = 4;
const totalPages = computed(() => Math.ceil(filteredEvents.value.length / eventsPerPage));

const fetchEvents = async () => {
  try {
    const response = await fetch("/events"); // Ganti dengan URL API Anda
    const data = await response.json();
    if (!data.error) {
      events.value = data.data;
    }
  } catch (error) {
    console.error("Failed to fetch events:", error);
  }
};

const filteredEvents = computed(() => {
  return events.value.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesLocation = event.venueName.toLowerCase().includes(locationQuery.value.toLowerCase());

    const matchesCategory = selectedFilters.value.category === "All" || event.category === selectedFilters.value.category;
    const matchesPricing =
      selectedFilters.value.pricing === "" ||
      (selectedFilters.value.pricing === "Free" && event.tickets.some(ticket => ticket.price === 0)) ||
      (selectedFilters.value.pricing === "Paid" && event.tickets.some(ticket => ticket.price > 0));
    const matchesType = selectedFilters.value.type.length === 0 || selectedFilters.value.type.includes(event.statusEvent);

    return matchesSearch && matchesLocation && matchesCategory && matchesPricing && matchesType;
  });
});

const paginatedEvents = computed(() => {
  const start = (currentPage.value - 1) * eventsPerPage;
  return filteredEvents.value.slice(start, start + eventsPerPage);
});

const goToOrderPage = (eventId) => {
  router.push(`/order/${eventId}`);
};

const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

onMounted(fetchEvents);
</script>

<template>
  <Navbar />
  <div class="container mt-4">
    <h1 class="text-center fw-bold">Search Event</h1>

    <div class="container mt-5">
      <div class="search-container d-flex align-items-center shadow-lg">
        <div class="d-flex align-items-center flex-grow-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
          <input v-model="searchQuery" type="text" class="form-control border-0" placeholder="Find the event you're interested in" />
        </div>
        <div class="divider"></div>
        <div class="d-flex align-items-center flex-grow-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
            <path
              d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"
            />
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
          </svg>
          <input v-model="locationQuery" type="text" class="form-control border-0" placeholder="Search by location" />
        </div>
        <button class="btn search-button ms-3">Search</button>
      </div>
    </div>

    <div class="container mt-4">
      <h5>Filters</h5>
      <div class="row">
        <div class="col-md-4">
          <label for="categoryFilter">Category</label>
          <select v-model="selectedFilters.category" id="categoryFilter" class="form-select">
            <option value="All">All</option>
            <option value="Music">Music</option>
            <option value="Art">Art</option>
            <option value="Tech">Tech</option>
          </select>
        </div>
        <div class="col-md-4">
          <label for="pricingFilter">Pricing</label>
          <select v-model="selectedFilters.pricing" id="pricingFilter" class="form-select">
            <option value="">All</option>
            <option value="Free">Free</option>
            <option value="Paid">Paid</option>
          </select>
        </div>
      </div>
    </div>

    <div class="container py-5">
      <div class="row">
        <!-- Events Section -->
        <div class="col-md-12">
          <div class="row">
            <div v-for="event in paginatedEvents" :key="event._id" class="card mb-3 shadow bg-warning border-none">
              <div class="row g-0">
                <div class="col-md-4">
                  <img :src="event.imageLink" class="img-fluid rounded-start w-100 h-100" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title fw-bold">{{ event.title }}</h5>
                    <p class="card-text text-muted">
                      <strong class="text-light">From {{ event.tickets[0].price }}</strong><br />
                      {{ new Date(event.date).toLocaleString() }}<br />
                      {{ event.venueName }}
                    </p>
                    <button class="btn btn-primary" @click="goToOrderPage(event._id)">Order</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav aria-label="Page navigation example" class="mt-4">
            <ul class="pagination justify-content-center">
              <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <button class="page-link" @click="changePage(currentPage - 1)">Previous</button>
              </li>
              <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }">
                <button class="page-link" @click="changePage(page)">{{ page }}</button>
              </li>
              <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                <button class="page-link" @click="changePage(currentPage + 1)">Next</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>

  <div class="container my-4 mt-5">
    <UpComing />
  </div>
  <div class="mt-5">
    <FooterView />
  </div>
</template>
