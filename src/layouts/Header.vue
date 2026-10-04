<script setup lang="ts">
import MenuItems from "@/layouts/Menu";
import { computed, onMounted, onUnmounted, ref, watch, watchEffect } from "vue";
import router from "@/router";

onMounted(() => {
  const menus = document.querySelectorAll(".navbar-nav > li");
  menus.forEach(function (el, ind) {
    el.addEventListener("click", function () {
      el.classList.toggle("open");
      menus.forEach(function (ell, index) {
        if (ind !== index) {
          ell.classList.remove("open");
        }
      });
    });
  });
});

// header fixed scroll -------------
onMounted(() => {
  window.addEventListener("scroll", scrollHandler);
});
onUnmounted(() => {
  window.removeEventListener("scroll", scrollHandler);
});
const isFixed = ref(false);
function scrollHandler() {
  if (window.scrollY > 60) {
    isFixed.value = true;
  } else {
    isFixed.value = false;
  }
}


// Reactive state to track the menu's open/close state
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  console.log('get-',isMenuOpen)
};
const closeMenu = () => {
  isMenuOpen.value = false;
};
// Add 'fixed' class to the body when the menu is open
onMounted(() => {
  watchEffect(() => {
    if (isMenuOpen.value) {
      document.body.classList.add('fixed');
    } else {
      document.body.classList.remove('fixed');
    }
  });
});


// Reactive state for active menu
const addActive = ref("/home");
const findActiveTitle = () => {
  for (const menuItem of MenuItems) {
    if (router.currentRoute.value.fullPath === menuItem.to) {
      return menuItem.title;
    }
    if (menuItem.subMenuItems) {
      for (const subItem of menuItem.subMenuItems) {
        if (router.currentRoute.value.fullPath === subItem.to) {
          return menuItem.title;
        }
      }
    }
  }
  return "/home";
};

// Watch for route changes and update the active menu
watch(
  () => router.currentRoute.value.fullPath,
  () => {
    addActive.value = String(findActiveTitle());
  }
);

const visibleRoutes = ['/blog-details'];
const visibleRoutes2 = ['/blog-details'];
const headerLightDark = computed(() => visibleRoutes.includes(router.currentRoute.value.fullPath));
const headerTransparent = computed(() => visibleRoutes2.includes(router.currentRoute.value.fullPath));
</script>
<template>
  <header class="site-header header box-header style-1" :class="{'light': headerLightDark, 'header-transparent': !headerTransparent}">
    <div class="top-bar">
      <div class="container">
        <div
          class="dz-topbar-inner d-flex justify-content-between align-items-center"
        >
          <div class="dz-topbar-left">
            <ul>
              <li>
                <a href="tel:+11234567890">
                  <i class="feather icon-phone-call text-primary"></i> +1 123
                  456 7890
                </a>
              </li>
              {{
                " "
              }}
              <li>
                <a href="mailto:info@example.com">
                  <i class="feather icon-mail text-primary"></i>
                  info@example.com
                </a>
              </li>
            </ul>
          </div>
          <div class="dz-topbar-right">
            <ul class="text-secondary">
              <li>
                <a href="https://www.linkedin.com" target="_blank">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </li>
              {{
                " "
              }}
              <li>
                <a href="https://www.instagram.com" target="_blank">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
              {{
                " "
              }}
              <li>
                <a href="https://www.facebook.com" target="_blank">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              {{
                " "
              }}
              <li>
                <a href="https://twitter.com" target="_blank">
                  <i class="fa-brands fa-x-twitter"></i>
                </a>
              </li>
              {{
                " "
              }}
              <li>
                <a href="https://www.youtube.com" target="_blank">
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- Main Header -->
    <div :class="`sticky-header main-bar-wraper ${isFixed ? 'is-fixed' : ''}`">
      <div class="main-bar clearfix">
        <div class="container clearfix inner-bar text-white">
          <!-- Website Logo -->
          <div class="logo-header logo-dark">
            <RouterLink to="/index">
              <img src="../assets/images/logo-white.svg" alt="logo" />
            </RouterLink>
          </div>
          <!-- Nav Toggle Button -->
          <button
            type="button"
            data-target="#W3Menu"
            @click="toggleMenu"
            :class="`w3menu-toggler navicon ${isMenuOpen?'open':''}`"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <!-- Main Nav -->
          <div class="menu-close fade-overlay" @click="toggleMenu"></div>
          <div :class="`header-nav w3menu w3menu-end mo-left ${isMenuOpen?'show':''}`" id="W3Menu">
            <div class="logo-header logo-dark">
              <RouterLink to="/index">
                <img src="../assets/images/logo.svg" alt="" />
              </RouterLink>
            </div>
            <ul class="nav navbar-nav">
              <template
                v-for="(
                  { title, className, subMenuItems, to }, ind
                ) in MenuItems"
                :key="ind"
              >
                <li
                  v-if="!to"
                  :class="`${addActive == title ? 'active':''} ${
                    className == 'mega-menu' &&
                    'has-mega-menu auto-width menu-left'
                  } ${'sub-menu-down'}`"
                >
                  <!-- , addActive == title?'active':'' -->
                  <a href="javascript:void(0);">
                    <span>{{ title }}</span
                    >{{ " " }}
                    <i class="fas fa-chevron-down tabindex"></i>
                  </a>
                  <div :class="className">
                    <ul class="demo-menu">
                    <template
                      v-for="(
                        { menu, className, to, img, anchor }, index
                      ) in subMenuItems"
                      :key="ind"
                    >
                      <li v-if="anchor">
                        <a :href="to" target="_blank">
                          <img v-if="img" :src="img" :alt="menu" />
                          <span class="menu-title">{{ menu }}</span>
                        </a>
                      </li>
                      <li v-else>
                        <RouterLink :to="`${to}`">
                          <img v-if="img" :src="img" :alt="menu" />
                          <span class="menu-title">{{ menu }}</span>
                        </RouterLink>
                      </li>
                    </template>
                  </ul>
                  </div>
                </li>
                <li v-else>
                  <RouterLink :to="`${to}`">
                    <span>{{ title }}</span>
                  </RouterLink>
                </li>
              </template>
            </ul>
            <div class="dz-social-icon">
              <ul>
                <li>
                  <a href="https://www.facebook.com" target="_blank">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank">
                    <i class="fa-brands fa-x-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com" target="_blank">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com" target="_blank">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <!-- EXTRA NAV -->
          <div class="extra-nav">
            <div class="extra-cell">
              <ul class="header-right">
                <li class="nav-item">
                  <RouterLink
                    to="/appointment"
                    class="btn btn-primary btn-hover1"
                  >
                    Appointment
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Main Header End -->
  </header>
  <!-- Header End -->
</template>
