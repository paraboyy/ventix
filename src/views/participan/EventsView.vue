<script setup>
import Navbar from "../../components/Navbar/participan.vue";
import UpComing from "../../components/moreEventCard.vue";
import FooterView from "../../components/footer.vue";
</script>

<template>
  <Navbar />

  <div class="container mt-4">
    <h1 class="text-center fw-bold">Search Event</h1>

    <div class="container mt-5">
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

    <div class="container py-5">
      <div class="row">
        <!-- Filter Section -->
        <div class="col-md-3">
          <div class="card p-3 shadow">
            <h5>Filter</h5>
            <form>
              <!-- Category Filter -->
              <div class="mb-3">
                <h6>Category</h6>
                <div>
                  <input type="checkbox" id="all" checked />
                  <label for="all">All</label>
                </div>
                <div>
                  <input type="checkbox" id="music" />
                  <label for="music">Music</label>
                </div>
                <div>
                  <input type="checkbox" id="sport" />
                  <label for="sport">Sport</label>
                </div>
              </div>
              <!-- Pricing Filter -->
              <div class="mb-3">
                <h6>Pricing</h6>
                <div>
                  <input type="radio" id="free" name="pricing" />
                  <label for="free">Free</label>
                </div>
                <div>
                  <input type="radio" id="paid" name="pricing" />
                  <label for="paid">Paid</label>
                </div>
              </div>
              <!-- Type Filter -->
              <div class="mb-3">
                <h6>Type</h6>
                <div>
                  <input type="checkbox" id="online" />
                  <label for="online">Online</label>
                </div>
                <div>
                  <input type="checkbox" id="offline-indoor" />
                  <label for="offline-indoor">Offline - Indoor</label>
                </div>
                <div>
                  <input type="checkbox" id="offline-outdoor" />
                  <label for="offline-outdoor">Offline - Outdoor</label>
                </div>
              </div>
              <!-- Language Filter -->
              <div class="mb-3">
                <h6>Language</h6>
                <div>
                  <input type="checkbox" id="english" />
                  <label for="english">English</label>
                </div>
                <div>
                  <input type="checkbox" id="german" />
                  <label for="german">German</label>
                </div>
              </div>
              <button type="submit" class="btn btn-warning w-100">Apply</button>
            </form>
          </div>
        </div>

        <!-- Events Section -->
        <div class="col-md-9">
          <div class="row">
            <!-- Event Card -->
            <div class="card mb-3 shadow bg-warning border-none">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="/img/bg-home.jpg" class="img-fluid rounded-start w-100 h-100" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title fw-bold">Rock Revolt: Power and Passion Unite</h5>
                    <p class="card-text text-muted">
                      <strong class="text-light">From $90</strong><br />
                      Saturday, February 20 | 08:00 PM<br />
                      New York, NY
                    </p>
                    <span class="badge bg-danger">10% OFF</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3 shadow bg-warning border-none">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="/img/bg-home.jpg" class="img-fluid rounded-start w-100 h-100" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title fw-bold">Rock Revolt: Power and Passion Unite</h5>
                    <p class="card-text text-muted">
                      <strong class="text-light">From $90</strong><br />
                      Saturday, February 20 | 08:00 PM<br />
                      New York, NY
                    </p>
                    <span class="badge bg-danger">10% OFF</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3 shadow bg-warning border-none">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="/img/bg-home.jpg" class="img-fluid rounded-start w-100 h-100" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title fw-bold">Rock Revolt: Power and Passion Unite</h5>
                    <p class="card-text text-muted">
                      <strong class="text-light">From $90</strong><br />
                      Saturday, February 20 | 08:00 PM<br />
                      New York, NY
                    </p>
                    <span class="badge bg-danger">10% OFF</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
