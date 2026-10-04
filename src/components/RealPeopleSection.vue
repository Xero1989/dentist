<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { IMAGES } from "@/constent/Them";

// Sample images array (replace with actual paths)
const images = [
  { thumbSrc: IMAGES.compareM1 },
  { thumbSrc: IMAGES.compareM2 },
  { thumbSrc: IMAGES.compareM3 },
  { thumbSrc: IMAGES.compareM4 },
  { thumbSrc: IMAGES.compareM5 },
  { thumbSrc: IMAGES.compareM1 },
  { thumbSrc: IMAGES.compareM2 },
  { thumbSrc: IMAGES.compareM3 },
];
</script>

<template>
  <section class="content-inner bg-light overflow-hidden">
    <div class="container">
      <!-- Section Header -->
      <div class="section-head style-1 row align-items-center mb-0">
        <div
          class="col-sm-7 m-b30 wow fadeInUp"
          data-wow-delay="0.2s"
          data-wow-duration="0.8s"
        >
          <h2 class="title">Real People. Real Results.</h2>
        </div>
        <div
          class="col-sm-5 m-b30 d-none d-sm-block wow fadeInUp"
          data-wow-delay="0.4s"
          data-wow-duration="0.8s"
        >
          <!-- Slider Controls -->
          <div
            class="compare-swiper-btn justify-content-center justify-content-sm-end"
          >
            <div class="compare-swiper-prev">
              <img src="../assets/images/arrow-left.svg" alt="" />
            </div>
            <div class="compare-swiper-next">
              <img src="../assets/images/arrow-right.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Swiper Slider -->
    <Swiper
      ref="swiperContainer"
      class="swiper compare-swiper compare-swiper-wrapper m-b15"
      :modules="[Autoplay, Navigation, Pagination]"
      :slides-per-view="4"
      :space-between="20"
      :centered-slides="true"
      :autoplay="{ delay: 3000 }"
      :navigation="{
        nextEl: '.compare-swiper-next',
        prevEl: '.compare-swiper-prev',
      }"
      :pagination="{
        el: '.compare-pagination-swiper',
        type: 'progressbar',
      }"
      :breakpoints="{
        1481: {
          slidesPerView: 4,
        },
        1280: {
          slidesPerView: 4,
        },
        991: {
          slidesPerView: 3,
        },
        320: {
          slidesPerView: 2,
        },
      }"
    >
      <SwiperSlide
        class="swiper-slide"
        v-for="(image, index) in images"
        :key="index"
        :data-wow-delay="`${0.1 + index * 0.1}s`"
        data-wow-duration="0.8s"
      >
        <div class="dz-media radius-xl shadow-sm">
          <img :src="image.thumbSrc" :alt="'Image ' + (index + 1)" />
        </div>
      </SwiperSlide>
    </Swiper>

    <!-- Pagination -->
    <div
      class="container wow fadeInUp"
      data-wow-delay="0.2s"
      data-wow-duration="0.8s"
    >
      <div
        class="slider__pagination compare-slider__pagination justify-content-center justify-content-md-start"
      >
        <div class="slider__current compare-slider__current">01</div>
        <div class="swiper-progress compare-pagination-swiper"></div>
        <div class="slider__total compare-slider__total">
          0{{ images.length }}
        </div>
      </div>
    </div>
  </section>
</template>
