<template>
  <div class="container p-4">
    <div class="mt-2 d-flex justify-content-between align-items-center">
      <h2 class="text-light fw-bold">Upcoming <span class="text-warning">in 24h</span></h2>
      <button class="btn text-light">View more</button>
    </div>

    <div class="row mt-3" id="events-24-hours"></div>
  </div>
</template>

<script>
// Fungsi untuk memformat tanggal
function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" };
  return new Date(dateString).toLocaleDateString("en-US", options);
}

// Fungsi untuk memuat data dari API
async function loadEvents() {
  try {
    // Fetch data events
    const response = await fetch(`events`);
    if (!response.ok) throw new Error("Failed to fetch events data");
    const data = await response.json();

    // Waktu saat ini
    const now = new Date();

    // Filter hanya event yang dilaksanakan dalam 24 jam
    const events = data.data
      .filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate > now && eventDate - now <= 24 * 60 * 60 * 1000; // Dalam 24 jam
      })
      .slice(0, 2);
    const container = document.getElementById("events-24-hours");

    // Jika tidak ada event yang tersedia
    if (events.length === 0) {
      container.innerHTML = `
        <div class="container bg-light text-center">
            <p>No published events in 24 hours.</p>
        </div>
        `;
      return;
    }

    // Render card untuk setiap event
    for (let event of events) {
      try {
        // Ambil gambar untuk event ini
        const imageResponse = await fetch(`images/${event.image}`);
        if (!imageResponse.ok) throw new Error(`Failed to fetch image for event ID: ${event.id}`);
        const imageData = await imageResponse.json();

        // Buat elemen kartu
        const card = document.createElement("div");
        card.className = "col-md-6";
        card.innerHTML = `
          <div class="card event-card">
              <img src="${imageData.data.link}" class="card-img-top event-image" alt="${event.title}">
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
      } catch (imageError) {
        console.error(`Error fetching image for event ID: ${event.id}`, imageError);
      }
    }
  } catch (error) {
    console.error("Error fetching events:", error);
  }
}

loadEvents();
</script>
