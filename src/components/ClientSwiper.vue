<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { defineProps } from "vue";
import { Autoplay } from "swiper/modules";

defineProps<{
  title?: String;
  data: string[];
}>();
</script>

<template>
  <section class="content-inner">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-4">
          <div
            class="section-head style-1 m-b30 wow fadeInUp"
            data-wow-delay="0.2s"
            data-wow-duration="0.8s"
          >
            <h2 class="title m-b0">
              {{ title ? title : "Our Accepted insurance" }}
            </h2>
          </div>
        </div>
        <div class="col-xl-8 m-b30">
          <Swiper
            class="swiper client-swiper2"
            :modules="[Autoplay]"
            :slides-per-view="4"
            :space-between="30"
            :autoplay="{
              delay: 3000,
            }"
            :breakpoints="{
              767: {
                slidesPerView: 4,
              },
              575: {
                slidesPerView: 3,
              },
              320: {
                slidesPerView: 2,
              },
            }"
          >
            <SwiperSlide
              class="swiper-slide wow bounceIn"
              data-wow-delay="0.1s"
              data-wow-duration="0.8s"
              v-for="(item, index) in data"
              :key="index"
            >
              <div class="clients-logo2 hover-white">
                <img :src="item" alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </section>
</template>
