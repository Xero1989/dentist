<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { defineProps } from "vue";
import bgImg from "@/assets/images/background/bg9.webp";
import { Autoplay, Pagination } from "swiper/modules";

const props = defineProps<{
  title?: String;
  data: string[];
}>();

onMounted(() => {
  new Swiper(".client-swiper2", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      767: {
        slidesPerView: 4,
      },
      575: {
        slidesPerView: 3,
      },
      320: {
        slidesPerView: 2,
      },
    },
    modules: [Autoplay],
  });
});

const activeIndex = ref<number | null>(2);
const handleMouseEnter = (index: number) => {
  activeIndex.value = index;
};
</script>
<template>
  <section
    class="content-inner-2 overlay-secondary-dark background-blend-luminosity bg-img-fix bg-half-bottom bg-half-light bg-half-sm"
    style="
      background-repeat: no-repeat;
      background-position: right center;
      background-size: cover;
    "
    :style="{ backgroundImage: 'url(' + bgImg + ')' }"
  >
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-7">
          <div
            class="section-head style-3 m-b30 text-white me-xl-4 wow fadeInUp"
            data-wow-delay="0.2s"
            data-wow-duration="0.8s"
          >
            <h2 class="title text-white">{{ title }}</h2>
            <div class="widget-rating3 m-b30">
              <ul class="star-list">
                <li>
                  <i class="fa fa-star"></i>
                </li>
                <li>
                  <i class="fa fa-star"></i>
                </li>
                <li>
                  <i class="fa fa-star"></i>
                </li>
                <li>
                  <i class="fa fa-star"></i>
                </li>
                <li>
                  <i class="fa fa-star"></i>
                </li>
              </ul>
              <span class="rating text-white me-2">(4.8)</span>
              <span class="text text-white">12k+ ratings on google</span>
            </div>
            <p class="fw-medium">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution.
            </p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search.
            </p>
          </div>
        </div>
        <div
          class="col-lg-5 m-b30 wow fadeInUp"
          data-wow-delay="0.4s"
          data-wow-duration="0.8s"
        >
          <div class="dz-media height-sm radius-xl">
            <img src="../assets/images/about/img18.webp" alt="" />
          </div>
        </div>
      </div>
      <div class="row align-items-center content-inner-3">
        <div class="col-xl-4">
          <div
            class="section-head style-1 m-b30 wow fadeInUp"
            data-wow-delay="0.2s"
            data-wow-duration="0.8s"
          >
            <h2 class="title m-b0 text-white">Our Accepted insurance</h2>
          </div>
        </div>
        <div class="col-xl-8">
          <Swiper
            class="swiper client-swiper2 m-b30"
            :slidesPerView="4"
            :spaceBetween="30"
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
            :autoplay="{
              delay: 3000,
            }"
            :loop="true"
          >
            <SwiperSlide
              class="swiper-slide wow bounceIn"
              data-wow-delay="0.1s"
              data-wow-duration="0.8s"
              v-for="(item, index) in data"
              :key="index"
            >
              <div class="clients-logo2 light">
                <img :src="item" alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div class="row">
        <div
          class="col-lg-6 m-b30 wow fadeInUp"
          data-wow-delay="0.2s"
          data-wow-duration="0.8s"
          @mouseenter="handleMouseEnter(1)"
        >
          <div
            class="content-bx style-8 shadow-sm box-hover"
            :class="{ active: activeIndex === 1 }"
          >
            <h3 class="title">Mission</h3>
            <p class="text">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search.
            </p>
          </div>
        </div>
        <div
          class="col-lg-6 m-b30 wow fadeInUp"
          data-wow-delay="0.4s"
          data-wow-duration="0.8s"
          @mouseenter="handleMouseEnter(2)"
        >
          <div
            class="content-bx style-8 shadow-sm box-hover"
            :class="{ active: activeIndex === 2 }"
          >
            <h3 class="title">Vision</h3>
            <p class="text">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
