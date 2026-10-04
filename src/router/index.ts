import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return {
      el: "#app",
      top: 0,
    };
  },
  routes: [
    {
      path: "/",
      name: "index",
      component: () => import("../views/Home.vue"),
      meta: { layout: "layout" },
    },
    {
      path: "/index",
      name: "Dashboard",
      component: () => import("../views/Home.vue"),
      meta: { layout: "layout" },
    },
    // Pages----
    {
      path: "/about-us",
      name: "About Us",
      component: () => import("../views/pages/About-us.vue"),
      meta: { layout: "layout" },
    },
    {
      path: "/about-us-2",
      name: "About Us 2",
      component: () => import("../views/pages/About-us-2.vue"),
      meta: { layout: "layout" },
    },
    {
      path: "/appointment",
      name: "Appointment",
      component: () => import("../views/pages/Appointment.vue"),
      meta: { layout: "layout" },
    },
    {
      path: "/pricing-table",
      name: "Pricing Table",
      component: () => import("../views/pages/PricingTable.vue"),
      meta: { layout: "layout" },
    },
    {
      path: "/testimonial",
      name: "Testimonial",
      component: () => import("../views/pages/Testimonial.vue"),
      meta: { layout: "layout" },
    },
    {
      path: "/faqs",
      name: "Faqs",
      component: () => import("../views/pages/Faqs.vue"),
      meta: { layout: "layout" },
    },
    {
      path: "/error-404",
      name: "Error 404",
      component: () => import("../views/pages/Error-404.vue"),
      meta: { layout: "layout" },
    },
    // Tesm----
    {
      path: "/team",
      name: "Team",
      component: () => import("../views/team/Team.vue"),
      meta: { layout: "layout" },
    },
    {
      path: "/team-detail",
      name: "Team Detail",
      component: () => import("../views/team/TeamDetail.vue"),
      meta: { layout: "layout" },
    },
    // Services----
    {
      path: "/services",
      name: "Services",
      component: () => import("../views/services/Services.vue"),
      meta: { layout: "layout" },
    },
    {
      path: "/services-2",
      name: "Services 2",
      component: () => import("../views/services/Services2.vue"),
      meta: { layout: "layout" },
    },
    {
      path: "/service-detail",
      name: "Service Detail",
      component: () => import("../views/services/ServiceDetail.vue"),
      meta: { layout: "layout" },
    },
    {
      path: "/service-detail-2",
      name: "Service Detail 2",
      component: () => import("../views/services/ServiceDetail2.vue"),
      meta: { layout: "layout" },
    },
    // Blog----
    {
      path: "/blog-grid",
      name: "Blog Grid",
      component: () => import("../views/blogs/BlogGrid.vue"),
      meta: { layout: "layout" },
    },
    {
      path: "/blog-list-sidebar",
      name: "Blog List Sidebar",
      component: () => import("../views/blogs/BlogListSidebar.vue"),
      meta: { layout: "layout" },
    },
    {
      path: "/blog-details",
      name: "Blog Details",
      component: () => import("../views/blogs/BlogDetails.vue"),
      meta: { layout: "layout" },
    },
    {
      path: "/contact-us",
      name: "Contact Us",
      component: () => import("../views/ContactUs.vue"),
      meta: { layout: "layout" },
    },
    // Default "404" route for unmatched paths
    {
      path: "/:catchAll(.*)", 
      name: "NotFound",
      component: () => import("../views/pages/Error-404.vue"),
      meta: { layout: "layout" },  
    },
  ],
})

export default router
