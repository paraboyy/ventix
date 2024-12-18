<script setup>
import { ref } from "vue";
import Navbar from "../../components/Navbar/createEvent.vue";
import axios from "axios";

const isFree = ref(true);
const eventForm = ref({
  title: "",
  date: "",
  about: "",
  tagline: "tagline",
  keyPoint: [""],
  venueName: "",
  statusEvent: "Published",
  tickets: [{ type: "P0", price: 0, stock: 0, statusTicketCategories: true }],
  image: "",
  imageLink: "",
  category: "66e65cf06571b9abb1a46d00",
  organizer: localStorage.getItem("id"), // Ambil organizer ID dari localStorage
  talent: "66ead648c2634fdbd1ef077b",
});

const toggleFields = () => {
  isFree.value = !isFree.value;
};

const uploadImage = async (file) => {
  try {
    const formData = new FormData();
    formData.append("image", file);

    const response = await axios.post("/images", formData);
    const { _id, url } = response.data.data;

    eventForm.value.image = _id;
    eventForm.value.imageLink = url;
    console.log("Image uploaded successfully:", _id, url);
  } catch (error) {
    console.error("Failed to upload image:", error);
    Swal.fire({
      icon: "error",
      title: "Upload Failed",
      text: "Failed to upload the image. Please try again.",
    });
  }
};

const createEvent = async () => {
  try {
    const response = await axios.post("/events", eventForm.value);
    console.log("Event created successfully:", response.data);
    Swal.fire({
      icon: "success",
      title: "Event Created",
      text: "Your event has been successfully created!",
    }).then(() => {
      window.location.href = "/dashboard-organizer";
    });
  } catch (error) {
    console.error("Failed to create event:", error);
    console.error("Failed to create event:", error.response?.data || error.message);
    Swal.fire({
      icon: "error",
      title: "Creation Failed",
      text: error.response?.data?.message || "Failed to create the event. Please try again.",
    });
  }
};
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

        <!-- Upload Cover -->
        <div class="card mb-4 shadow-lg border-none">
          <div class="card-header">
            <h5>Upload Cover</h5>
          </div>
          <div class="card-body">
            <input type="file" class="form-control mb-3" @change="(e) => uploadImage(e.target.files[0])" />
            <img :src="eventForm.imageLink" alt="Event Cover" class="img-fluid" v-if="eventForm.imageLink" />
          </div>
        </div>

        <!-- General Information -->
        <div class="card mb-4 shadow-lg border-none">
          <div class="card-header">
            <h5>General Information</h5>
          </div>
          <div class="card-body">
            <div class="mb-3">
              <label for="eventName" class="form-label">Event Name</label>
              <input type="text" id="eventName" class="form-control" v-model="eventForm.title" placeholder="Make it catchy and memorable" />
            </div>
            <div class="mb-3">
              <label for="eventDescription" class="form-label">Description</label>
              <textarea id="eventDescription" class="form-control" v-model="eventForm.about" rows="3" placeholder="Provide essential event details"></textarea>
            </div>
            <div class="mb-3">
              <label for="eventDate" class="form-label">Date</label>
              <input type="date" id="eventDate" class="form-control" v-model="eventForm.date" />
            </div>
            <div class="mb-3">
              <label for="venueName" class="form-label">Venue Name</label>
              <input type="text" id="venueName" class="form-control" v-model="eventForm.venueName" placeholder="Enter venue name" />
            </div>
            <!-- <div class="mb-3">
              <label for="eventCategory" class="form-label">Category</label>
              <input type="text" id="eventCategory" class="form-control" v-model="eventForm.category" placeholder="Enter category ID" />
            </div> -->
          </div>
        </div>

        <!-- Ticket Information -->
        <div class="card mb-4 shadow-lg border-none">
          <div class="card-header mb-4">
            <h5 class="fw-bold">Ticket</h5>
          </div>
          <div class="card-body">
            <form>
              <div class="row mb-3">
                <div class="col-md-6">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="ticketType" id="paid" :checked="!isFree" @change="toggleFields" />
                    <label class="form-check-label" for="paid">Paid</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="ticketType" id="free" :checked="isFree" @change="toggleFields" />
                    <label class="form-check-label" for="free">Free</label>
                  </div>
                </div>
              </div>
              <div v-if="!isFree">
                <div class="row mb-3">
                  <div class="col-md-6">
                    <label for="quantity" class="form-label">Quantity</label>
                    <input type="number" class="form-control" id="quantity" placeholder="Enter quantity" v-model="eventForm.tickets[0].stock" />
                  </div>
                  <div class="col-md-6">
                    <label for="price" class="form-label">Price $</label>
                    <input type="number" class="form-control" id="price" placeholder="Enter price" v-model="eventForm.tickets[0].price" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="d-flex justify-content-between">
          <button type="button" class="btn btn-danger">Cancel</button>
          <button type="button" class="btn btn-pilih" @click="createEvent">Create Event</button>
        </div>
      </div>
    </div>
  </div>
</template>
