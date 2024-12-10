<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between mb-4">
      <h3 class="fw-bold">New events</h3>
      <button class="btn">View more</button>
    </div>

    <div class="btn-group mb-4" role="group" aria-label="Event Categories">
      <button type="button" class="btn btn-warning">All</button>
      <button type="button" class="btn btn-hover">Music</button>
      <button type="button" class="btn btn-hover">Sport</button>
      <button type="button" class="btn btn-hover">Exhibition</button>
      <button type="button" class="btn btn-hover">Business</button>
      <button type="button" class="btn btn-hover">Photography</button>
    </div>

    <div class="row">
      <div class="col-md-4 mb-4">
        <div class="card shadow-lg">
          <img src="/img/bg-home.jpg" class="card-img-top" alt="Urban Jungle Marathon" />
          <div class="card-body bg-warning text-white">
            <h5 class="card-title">Marathon</h5>
            <!-- <p class="card-text">Urban Jungle Marathon</p> -->
            <p class="text-light">Monday, June 06 | 06:00 AM</p>
            <p class="card-text"><small>New York, NY</small></p>
            <p class="card-text">From $10</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card shadow-lg">
          <img src="/img/bg-home.jpg" class="card-img-top" alt="Rock Festival" />
          <div class="card-body bg-warning text-white">
            <h5 class="card-title">Rock Festival</h5>
            <!-- <p class="card-text">"Rockin' the Stage"</p> -->
            <p class="text-light">Monday, March 14 | 04:00 PM</p>
            <p class="card-text"><small>New York, NY</small></p>
            <p class="card-text">From $100</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card shadow-lg">
          <img src="/img/bg-home.jpg" class="card-img-top" alt="Melody Mania" />
          <div class="card-body bg-warning text-white">
            <h5 class="card-title">Melody Mania</h5>
            <p class="card-text">Free ticket</p>
            <p class="text-light">Wednesday, June 24 | 07:00 PM</p>
            <p class="card-text"><small>New York, NY</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
