<script setup lang="ts">
import { ref } from "vue";
import { IMAGES } from "@/constent/Them";
import { useStore } from "@/stores/counter";
import { storeToRefs } from "pinia";
import bgImgAbout from "@/assets/images/about/img3.webp";
import background1 from "@/assets/images/background/bg7.webp";
import TwentyTwenty from "@/elements/TwentyTwenty.vue";
import BlogList from "./BlogList.vue";

const activeIndex = ref<number | null>(1);
const handleMouseEnter = (index: number) => {
  activeIndex.value = index;
};

const TwentyTwentyList = ref([
  {
    before: IMAGES.before1,
    after: IMAGES.after1,
  },
]);

// Video Box ----
const { opneModel, opneModelYoutubeID } = storeToRefs(useStore());
const openVideo = (key: any) => {
  opneModel.value = true;
  opneModelYoutubeID.value = key;
};
</script>
<template>
  <section
    class="content-inner bg-light twentytwenty-bottom-spacing overlay-primary-light"
    style="background-size: cover; background-position: center"
    :style="{ backgroundImage: 'url(' + IMAGES.background3 + ')' }"
  >
    <div class="container">
      <div class="section-head style-3 row align-items-end mb-0 mb-lg-4">
        <div class="col-xl-7 col-lg-7 m-b30">
          <h2
            class="title wow fadeInUp"
            data-wow-delay="0.2s"
            data-wow-duration="0.8s"
          >
            The Best Quality Service You Can Get
          </h2>
          <p
            class="m-b0 wow fadeInUp"
            data-wow-delay="0.4s"
            data-wow-duration="0.8s"
          >
            Simple, transparent pricing that grows with you. Try and plan free
            for 30 days.
          </p>
        </div>
        <div
          class="col-xl-5 col-lg-5 d-lg-block d-none m-b30 wow fadeInUp"
          data-wow-delay="0.6s"
          data-wow-duration="0.8s"
        >
          <div
            class="info-widget style-15 overlay-secondary-middle d-flex align-items-center"
            :style="{ backgroundImage: 'url(' + bgImgAbout + ')' }"
          >
            <div class="video-bx2">
              <a
                href="#"
                @click.prevent
                class="video-btn popup-youtube"
                @click="openVideo('o8OgzQdA70c')"
              >
                <i class="fa fa-play"></i> </a
              >{{ " " }}
              <span class="text-white">Play Video</span>
            </div>
          </div>
        </div>
      </div>
      <BlogList />
      <div
        class="dz-separator style-4 wow fadeInUp"
        data-wow-delay="1.0s"
        data-wow-duration="0.8s"
      >
        <h6 class="title">We help you live your life in full motion.</h6>
        <RouterLink
          to="/services-2"
          class="btn btn-secondary separator-badge btn-rounded shadow-md fw-medium"
          >View All Services</RouterLink
        >
      </div>
    </div>
    <div
      class="twentytwenty-center wow bounceIn"
      data-wow-delay="1.0s"
      data-wow-duration="0.8s"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-8 col-lg-10">
            <div class="twentytwenty-box">
              <TwentyTwenty :data="TwentyTwentyList" class="shadow" />
              <RouterLink
                to="/about-us-2"
                class="btn btn-white rounded btn-sm position-absolute end-0 bottom-0 me-md-4 mb-md-4 me-2 mb-2"
                >View All</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
