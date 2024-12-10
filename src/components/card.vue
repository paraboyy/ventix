<template>
  <div class="">
    <div class="d-flex justify-content-between align-items-center">
      <h2 class="fw-bold">New events</h2>
      <button class="btn">View more</button>
    </div>

    <div class="row mt-3">
        <div class="col-md-4">
            <div class="card event-card shadow">
            <img src="/img/bg-home.jpg" class="card-img-top event-image" alt="Urban Marathon" />
            <div class="event-body">
                <p class="mb-1">Urban Marathon</p>
                <small>From $20</small>
            </div>
            <div class="event-footer">
                <p class="mb-1"><i class="bi bi-calendar-event icon"></i> Monday, June 06 | 06:00 AM</p>
                <p><i class="bi bi-geo-alt icon"></i> New York, NY</p>
            </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card event-card shadow">
            <img src="/img/bg-home.jpg" class="card-img-top event-image" alt="Urban Marathon" />
            <div class="event-body">
                <p class="mb-1">Urban Marathon</p>
                <small>From $20</small>
            </div>
            <div class="event-footer">
                <p class="mb-1"><i class="bi bi-calendar-event icon"></i> Monday, June 06 | 06:00 AM</p>
                <p><i class="bi bi-geo-alt icon"></i> New York, NY</p>
            </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card event-card shadow">
            <img src="/img/bg-home.jpg" class="card-img-top event-image" alt="Urban Marathon" />
            <div class="event-body">
                <p class="mb-1">Urban Marathon</p>
                <small>From $20</small>
            </div>
            <div class="event-footer">
                <p class="mb-1"><i class="bi bi-calendar-event icon"></i> Monday, June 06 | 06:00 AM</p>
                <p><i class="bi bi-geo-alt icon"></i> New York, NY</p>
            </div>
            </div>
        </div>
    </div>

    <!-- <div class="row mt-3" id="events-container">
    </div> -->
  </div>
</template>

<script>
const API_URL = "https://ventix-event-production.up.railway.app/api/v1/events";
const IMAGE_API_URL = 'https://intero.nibdo.dev//api/v1/cms/images/';

// Fungsi untuk memformat tanggal
function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" };
  return new Date(dateString).toLocaleDateString("en-US", options);
}

// Fungsi untuk memuat data dari API
async function loadEvents() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    // Ambil data event dan batasi hanya 3 item
    const events = data.data.slice(0, 3);
    const container = document.getElementById("events-container");

    // Render card untuk setiap event
    for (let event of events) {
        // Ambil gambar untuk event ini
        const imageResponse = await fetch(`${IMAGE_API_URL}/${event.image}`);
        const imageData = await imageResponse.json();

        const card = document.createElement('div');
        card.className = 'col-md-4';
        card.innerHTML = `
        <div class="card event-card">
            <img src="${imageData.data.link}" class="card-img-top event-image" alt="${event.title}">
            <div class="event-title">${event.title}</div>
            <div class="event-body">
            <p class="mb-1">${event.title}</p>
            <small>From $${event.tickets[0].price}</small>
            </div>
            <div class="event-footer">
            <p class="mb-1">
                <i class="bi bi-calendar-event icon"></i> ${formatDate(event.date)}
            </p>
            <p>
                <i class="bi bi-geo-alt icon"></i> ${event.venueName}
            </p>
            </div>
        </div>
        `;
        container.appendChild(card);
    }
  } catch (error) {
    console.error("Error fetching events:", error);
  }
}

// Muat event saat halaman dimuat
loadEvents();
</script>
