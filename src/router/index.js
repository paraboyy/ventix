import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LogInView.vue";
import SignupView from "../views/SignUpView.vue";
import CreateEventView from "../views/CreateEventView.vue";

//PARTICIPAN
import HomeParticipan from "../views/participan/HomeView.vue";
import EventsView from "../views/participan/EventsView.vue";

//ORGANIZER
import HomeOrganizer from "../views/organizer/HomeView.vue";
import MyEventsView from "../views/organizer/MyEventsView.vue";
import CreateEvent from "../views/organizer/CreateEventView.vue";
import SignUpOrganizer from "../views/organizer/SignUpView.vue";

//OWNER
import HomeOwner from "../views/owner/HomeView.vue";
import EventOwnerView from "../views/owner/EventView.vue";
import OrderOwnerView from "../views/owner/OrderView.vue";
import OrganizerView from "../views/owner/OrganizerView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignupView,
    },
    {
      path: "/create-event",
      name: "createEvent",
      component: CreateEventView,
    },

    //PARTICIPAN
    {
      path: "/home",
      name: "homeParticipan",
      component: HomeParticipan,
    },
    {
      path: "/event",
      name: "events",
      component: EventsView,
    },

    //ORGANIZER
    {
      path: "/dashboard-organizer",
      name: "dashboardOrganizer",
      component: HomeOrganizer,
    },
    {
      path: "/organizer/my-events",
      name: "myEventsOrganizer",
      component: MyEventsView,
    },
    {
      path: "/create/event",
      name: "createEvent",
      component: CreateEvent,
    },
    {
      path: "/organizer-signup",
      name: "singupOrganizer",
      component: SignUpOrganizer,
    },

    //OWNER
    {
      path: "/dashboard-owner",
      name: "dashboardOwner",
      component: HomeOwner,
    },
    {
      path: "/event-owner",
      name: "eventsOwner",
      component: EventOwnerView,
    },
    {
      path: "/order-owner",
      name: "orderOwner",
      component: OrderOwnerView,
    },
    {
      path: "/organizer",
      name: "organizer",
      component: OrganizerView,
    },
  ],
});

export default router;
