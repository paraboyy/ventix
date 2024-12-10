<script setup>
import Navbar from "../../components/Navbar/organizer.vue";
import Sidebar from "../../components/Sidebar/sidebar.vue";
</script>

<template>
  <Navbar />
  <div class="container-fluid">
    <div class="row">
      <Sidebar />
      <!-- Main Content -->
      <div class="col-md-10 mt-3">
        <h1 class="fw-bold">Dasboard</h1>
        <!-- Dashboard Stats -->
        <div class="row text-center mt-4">
          <div class="col-md-3">
            <div class="card shadow bg-warning border-none">
              <div class="card-body">
                <h5>$5,000</h5>
                <p class="text-muted">Revenue</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card shadow bg-warning border-none">
              <div class="card-body">
                <h5>420/900</h5>
                <p class="text-muted">Tickets Sold</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card shadow bg-warning border-none">
              <div class="card-body">
                <h5>1,000</h5>
                <p class="text-muted">Event Views</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card shadow bg-warning border-none">
              <div class="card-body">
                <h5>200</h5>
                <p class="text-muted">Event Shares</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Sales by Event -->
        <div class="mt-4 p-3">
          <h5 class="fw-bold">Sales by Event</h5>
          <table class="table mt-3 shadow">
            <thead class="table-light">
              <tr>
                <th>Event</th>
                <th>Date of the Event</th>
                <th>Ticket Sold</th>
                <th>Revenue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rock Revolt: A Fusion of Power and Passion</td>
                <td>Monday, June 10 <span class="badge bg-danger">In 5 days</span></td>
                <td>100/300</td>
                <td>$234</td>
              </tr>
              <tr>
                <td>Rock Fest Extravaganza</td>
                <td>Tuesday, June 21 <span class="badge bg-warning">Next 2 weeks</span></td>
                <td>200/300</td>
                <td>$1,390</td>
              </tr>
              <tr>
                <td>A Legendary Gathering of Rock Icons</td>
                <td>Friday, July 20 <span class="badge bg-success">Next month</span></td>
                <td>120/300</td>
                <td>$2,345</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Recent Purchases -->
        <div class="mt-4 p-3">
          <h5 class="fw-bold">Recent Purchases</h5>
          <table class="table mt-3 shadow">
            <thead class="table-light">
              <tr>
                <th>Code</th>
                <th>Buyer</th>
                <th>Date</th>
                <th>Time</th>
                <th>Ticket Sold</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#238920483</td>
                <td>Ashley Wilson</td>
                <td>1/18/2022</td>
                <td>11:25 PM</td>
                <td>1</td>
                <td>$58</td>
              </tr>
              <tr>
                <td>#238920359</td>
                <td>Anna Fernandez</td>
                <td>1/18/2022</td>
                <td>09:15 PM</td>
                <td>2</td>
                <td>$68</td>
              </tr>
              <!-- More rows can be added -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
