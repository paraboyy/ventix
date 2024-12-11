<template>
  <div class="">
    <div class="justify-content-between align-items-center text-center">
      <h2 class="fw-bold text-warning">Top 3 <span class="text-light">Trending Events</span></h2>
    </div>

    <div class="row mt-3" id="events-top"></div>
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

    // Filter hanya event dengan status 'published' dan batasi hanya 3 item
    const publishedEvents = data.data.filter((event) => event.statusEvent === "Published");

    // Urutkan event berdasarkan updatedAt (terbaru)
    const sortedEvents = publishedEvents.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

    const events = sortedEvents.slice(0, 3);

    const container = document.getElementById("events-top");

    // Jika tidak ada event yang tersedia
    if (events.length === 0) {
      container.innerHTML = "<p>No published events available.</p>";
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
        card.className = "col-md-4";
        card.innerHTML = `
          <div class="card event-card shadow">
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
