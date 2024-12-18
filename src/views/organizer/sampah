<script setup>
import Navbar from "../../components/Navbar/createEvent.vue";

function toggleFields() {
  const paidFields = document.getElementById("paidFields");
  const isFree = document.getElementById("free").checked;
  if (isFree) {
    paidFields.style.display = "none";
  } else {
    paidFields.style.display = "block";
  }
}
document.addEventListener("DOMContentLoaded", toggleFields);
</script>

<template>
  <Navbar />

  <div class="container-fluid">
    <div class="row">
      <!-- Sidebar -->
      <div class="col-md-4 bg-light vh-100 p-5">
        <div class="shadow-lg rounded p-4">
          <h5>Last update</h5>
          <p>Monday, June 06 | 06:42 AM</p>
          <!-- <h5>Status</h5>
        <p>Draft</p> -->
          <h4>Event information</h4>
          <ul class="nav flex-column">
            <li class="nav-item">
              <p class="nav-link text-dark">Upload cover</p>
            </li>
            <li class="nav-item">
              <p class="nav-link text-dark">General information</p>
            </li>
            <li class="nav-item">
              <p class="nav-link text-dark">Location and time</p>
            </li>
            <li class="nav-item">
              <p class="nav-link text-dark">Ticket</p>
            </li>
          </ul>
          <h4>Puslish event</h4>
          <ul class="nav flex-column">
            <li class="nav-item">
              <p class="nav-link text-dark">Review and Publish</p>
            </li>
          </ul>
        </div>
      </div>

      <!-- Main Content -->
      <div class="col-md-7 p-4">
        <h3>Create an Event</h3>
        <div class="card mb-4 shadow-lg border-none">
          <div class="card-header">
            <h5>Upload Cover</h5>
            <p class="text-muted">Upload the event cover to capture your audience's attention</p>
          </div>
          <div class="card-body">
            <img src="https://via.placeholder.com/1000x400" alt="Event Cover" class="img-fluid mb-3" />
            <div>
              <button class="btn btn-danger btn-sm">Remove</button>
              <button class="btn btn-secondary btn-sm">Change</button>
            </div>
          </div>
        </div>

        <div class="card mb-4 shadow-lg border-none">
          <div class="card-header">
            <h5>General Information</h5>
          </div>
          <div class="card-body">
            <div class="mb-3">
              <label for="eventName" class="form-label">Name <span class="text-danger">*</span></label>
              <input type="text" id="eventName" class="form-control" placeholder="Make it catchy and memorable" />
            </div>
            <div class="mb-3">
              <label for="eventDescription" class="form-label">Description</label>
              <textarea id="eventDescription" class="form-control" rows="3" placeholder="Provide essential event details"></textarea>
            </div>
            <div class="mb-3">
              <label for="eventCategory" class="form-label">Category</label>
              <select id="eventCategory" class="form-select">
                <option selected>Choose the category for your event</option>
                <option value="1">Music</option>
                <option value="2">Art</option>
                <option value="3">Sports</option>
              </select>
            </div>
          </div>
        </div>

        <div class="card mb-4 shadow-lg border-none">
          <div class="card-header mb-4">
            <h5 class="fw-bold">Location and Time</h5>
          </div>
          <div class="card-body">
            <form>
              <div class="mb-3">
                <label for="address" class="form-label">Address</label>
                <input type="text" class="form-control" id="address" placeholder="Enter address" />
              </div>
              <div class="row mb-3">
                <div class="col-md-6">
                  <label for="city" class="form-label">City</label>
                  <input type="text" class="form-control" id="city" placeholder="Enter city" />
                </div>
                <div class="col-md-6">
                  <label for="state" class="form-label">State / Province</label>
                  <select class="form-select" id="state">
                    <option selected>Select state</option>
                    <option value="1">State 1</option>
                    <option value="2">State 2</option>
                    <option value="3">State 3</option>
                  </select>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">Map</label>
                <div class="border rounded" style="height: 200px; background-color: #f8f9fa">
                  <!-- Placeholder for map -->
                  <p class="text-center pt-5">Map goes here</p>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-12">
                  <label for="eventDate" class="form-label">Event Date</label>
                  <input type="date" class="form-control" id="eventDate" value="2024-12-08" />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6">
                  <label for="startTime" class="form-label">Start Time</label>
                  <input type="time" class="form-control" id="startTime" value="06:00" />
                </div>
                <div class="col-md-6">
                  <label for="endTime" class="form-label">End Time</label>
                  <input type="time" class="form-control" id="endTime" value="11:00" />
                </div>
              </div>
              <!-- <button type="button" class="btn btn-pilih">Add agenda</button> -->
            </form>
          </div>
        </div>

        <div class="card mb-4 shadow-lg border-none">
          <div class="card-header mb-4">
            <h5 class="fw-bold">Ticket</h5>
          </div>
          <div class="card-body">
            <form>
              <div class="row mb-3">
                <div class="col-md-6">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="ticketType" id="paid" checked onchange="toggleFields()" />
                    <label class="form-check-label" for="paid">Paid</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="ticketType" id="free" onchange="toggleFields()" />
                    <label class="form-check-label" for="free">Free</label>
                  </div>
                </div>
              </div>
              <div id="paidFields">
                <div class="row mb-3">
                  <div class="col-md-6">
                    <label for="quantity" class="form-label">Quantity</label>
                    <input type="number" class="form-control" id="quantity" placeholder="Enter quantity" value="200" />
                  </div>
                  <div class="col-md-6">
                    <label for="price" class="form-label">Price $</label>
                    <input type="number" class="form-control" id="price" placeholder="Enter price" value="90" />
                  </div>
                </div>
              </div>
              <h4 class="mb-3">Sale date</h4>
              <div class="row mb-3">
                <div class="col-md-6">
                  <label for="startDate" class="form-label">Start Date</label>
                  <input type="date" class="form-control" id="startDate" value="2023-01-15" />
                </div>
                <div class="col-md-6">
                  <label for="startTime" class="form-label">Start Time</label>
                  <input type="time" class="form-control" id="startTime" value="06:00" />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6">
                  <label for="endDate" class="form-label">End Date</label>
                  <input type="date" class="form-control" id="endDate" value="2023-02-10" />
                </div>
                <div class="col-md-6">
                  <label for="endTime" class="form-label">End Time</label>
                  <input type="time" class="form-control" id="endTime" value="20:00" />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="d-flex justify-content-between">
          <button type="button" class="btn btn-danger">Cancel</button>
          <div>
            <button type="button" class="btn btn-light me-2">Save draft</button>
            <button type="button" class="btn btn-pilih">Next →</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
