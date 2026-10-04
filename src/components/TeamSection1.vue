<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { defineProps } from "vue";
import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Thumbs,
  Grid,
} from "swiper/modules";
import bgImg from "@/assets/images/background/bg2.webp";
// Define props for receiving data from the parent component
const props = defineProps({
  data: {
    type: Object as () => {
      title: string;
      description: string;
      class?: string;
      list?: Array<{
        image: string;
        name: string;
        postion: string;
      }>;
    },
    required: true,
  },
});

const currentIndex = ref(1);
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper;
};
</script>

<template>
  <section
    class="content-inner"
    :class="class"
    style="
      background-position: right top;
      background-repeat: no-repeat;
      background-size: 100%;
    "
    :style="{ backgroundImage: 'url(' + bgImg + ')' }"
  >
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-6 order-xl-1 m-b30">
          <div class="section-head style-3">
            <h2
              class="title wow fadeInUp"
              data-wow-delay="0.2s"
              data-wow-duration="0.8s"
            >
              Highly Qualified Team
            </h2>
            <p
              class="m-b0 wow fadeInUp"
              data-wow-delay="0.4s"
              data-wow-duration="0.8s"
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <Swiper
            class="swiper dz-team-swiper1-thumb wow fadeInUp"
            data-wow-delay="0.6s"
            data-wow-duration="0.8s"
            :loop="true"
            :modules="[Autoplay, Thumbs, Grid]"
            :autoplay="{
              delay: 3000,
            }"
            :slides-per-view="2"
            :grid="{
              rows: 2,
            }"
            :breakpoints="{
              320: {
                slidesPerView: 1.2,
                grid: {
                  rows: 1,
                },
              },
              591: {
                slidesPerView: 2,
              },
              991: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 2,
              },
            }"
          >
            <SwiperSlide
              class="swiper-slide"
              v-for="(item, index) in data.list"
              :key="index"
            >
              <div class="dz-team style-3">
                <div class="dz-body">
                  <div class="dz-media">
                    <img :src="item.image" alt="/" />
                  </div>
                  <div class="dz-content">
                    <h3 class="dz-name">
                      <a href="javascript:void(0);">{{ item.name }}</a>
                    </h3>
                    <span class="dz-position">{{ item.postion }}</span>
                  </div>
                </div>
                <div class="dz-footer">
                  <ul class="dz-social">
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
                      <a href="https://www.youtube.com" target="_blank">
                        <i class="fa-brands fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div class="col-xl-6">
          <Swiper
            @swiper="setThumbsSwiper"
            class="swiper dz-team-swiper1 me-md-4 wow fadeInUp"
            data-wow-delay="0.2s"
            data-wow-duration="0.8s"
            style="overflow: unset"
            :modules="[
              Autoplay,
              Pagination,
              Navigation,
              Thumbs,
              Grid,
              EffectFade,
            ]"
            :effect="'fade'"
            :slidesPerView="1"
            :loop="true"
            :autoplay="{
              delay: 3000,
            }"
            :pagination="{
              el: '.team-progressbar-swiper',
              type: 'progressbar',
            }"
            :navigation="{
              nextEl: '.team-swiper-next',
              prevEl: '.team-swiper-prev',
            }"
          >
            <SwiperSlide
              class="swiper-slide"
              v-for="(item, index) in data.list"
              :key="index"
            >
              <div class="dz-team style-4">
                <div class="dz-media">
                  <img src="../assets/images/team/large/pic1.webp" alt="/" />
                </div>
                <ul class="dz-social">
                  <li>
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      class="linkedin"
                    >
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      class="instagram"
                    >
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      class="facebook"
                    >
                      <i class="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      class="x-twitter"
                    >
                      <i class="fa-brands fa-x-twitter"></i>
                    </a>
                  </li>
                </ul>
                <div class="item1">
                  <ul class="list-check-try fw-medium text-secondary">
                    <li>Teeth Whitening</li>
                    <li>Root Canal</li>
                  </ul>
                </div>
                <div class="item2">
                  <div class="info-widget style-3">
                    <div class="widget-head">
                      <div class="widget-media">
                        <img :src="item.image" alt="" />
                      </div>
                      <div class="widget-content">
                        <h6 class="title">Dr. {{ item.name }}</h6>
                        <span class="sub-title text-primary">{{
                          item.postion
                        }}</span>
                      </div>
                    </div>
                    <p>
                      “It is a long established fact that a reader will be
                      distracted by the readable content”
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <div
              class="slider__pagination team-pagination-swiper team-pagination-wrapper m-t5"
            >
              <div
                class="swiper-button team-swiper-prev btn btn-light btn-square radius-sm"
              >
                <i class="feather icon-arrow-left"></i>
              </div>
              <div class="slider__current team-slider__current">
                0{{ currentIndex + 1 }}
              </div>
              <div class="swiper-progress team-progressbar-swiper"></div>
              <div class="slider__total team-slider__total">
                0{{ data.list?.length }}
              </div>
              <div
                class="swiper-button team-swiper-next btn btn-light btn-square radius-sm"
              >
                <i class="feather icon-arrow-right"></i>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  </section>
</template>
