<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { defineProps } from "vue";
import { Autoplay, Pagination } from "swiper/modules";
import { storeToRefs } from "pinia";
import { useStore } from "@/stores/counter";

// Define props for receiving data from the parent component
const props = defineProps({
  data: {
    type: Object as () => {
      title: string;
      description?: string;
      list: Array<{
        bgImg: string;
        name: string;
        position: string;
        image: string;
        msg: string;
      }>;
    },
    required: true,
  },
});
const currentIndex = ref(1);

const setThumbsSwiper = (swiper: any) => {
  currentIndex.value = swiper.activeIndex;
};

// Video Box ----

const { opneModel, opneModelYoutubeID } = storeToRefs(useStore());
const openVideo = (key: any) => {
  opneModel.value = true;
  opneModelYoutubeID.value = key;
};
</script>

<template>
  <section class="content-inner gradient-primary overflow-hidden">
    <div class="container">
      <div
        class="section-head style-3 row align-items-end justify-content-between m-b30"
      >
        <div
          class="col-xl-5 col-lg-6 m-b10 wow fadeInUp"
          data-wow-delay="0.2s"
          data-wow-duration="0.8s"
        >
          <h2 class="title m-b0">{{ data.title }}</h2>
        </div>
        <div
          class="col-xl-6 col-lg-6 m-b10 wow fadeInUp"
          data-wow-delay="0.4s"
          data-wow-duration="0.8s"
        >
          <div class="float-xl-end">
            <div class="d-flex align-items-center m-b15">
              <div class="info-widget style-12 m-r10 bg-light">
                <div class="avatar-group">
                  <img
                    class="avatar rounded-circle avatar-md border border-white border-2"
                    src="../assets/images/avatar/small/avatar1.webp"
                    alt=""
                  />
                  <img
                    class="avatar rounded-circle avatar-md border border-white border-2"
                    src="../assets/images/avatar/small/avatar2.webp"
                    alt=""
                  />
                  <img
                    class="avatar rounded-circle avatar-md border border-white border-2"
                    src="../assets/images/avatar/small/avatar3.webp"
                    alt=""
                  />
                  <img
                    class="avatar rounded-circle avatar-md border border-white border-2"
                    src="../assets/images/avatar/small/avatar4.webp"
                    alt=""
                  />
                </div>
                <div class="clearfix">
                  <span class="font-20">Talk to over 215 doctor</span>
                </div>
              </div>
              <RouterLink
                to="/testimonial"
                class="btn btn-square btn-xl btn-light btn-rounded"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17L17 7"
                    stroke="var(--bs-primary)"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M7 7H17V17"
                    stroke="var(--bs-primary)"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </RouterLink>
            </div>
            <div class="widget-rating3 large">
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
              <span class="rating me-2">(4.8)</span>
              <span class="text text-body fw-normal"
                >12k+ ratings on google</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-left">
      <Swiper
        class="swiper testimonial-swiper2 testimonial-wrapper2"
        :loop="true"
        :spaceBetween="0"
        :slidesPerView="2"
        @swiper="setThumbsSwiper"
        :autoplay="{
          delay: 3000,
        }"
        :breakpoints="{
          1481: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 1.6,
          },
          991: {
            slidesPerView: 1.2,
          },
          320: {
            slidesPerView: 1,
          },
        }"
        :modules="[Pagination, Autoplay]"
      >
        <SwiperSlide
          class="swiper-slide wow fadeInUp"
          data-wow-delay="0.6s"
          data-wow-duration="0.8s"
          v-for="(item, index) in data.list"
          :key="index"
        >
          <div class="testimonial-2">
            <div class="testimonial-media">
              <img :src="item.bgImg" alt="" />
              <div class="video-bx1 video-lg">
                <a
                  href="javascript:void(0)"
                  class="popup-youtube video-btn bg-primary"
                  @click="openVideo('o8OgzQdA70c')"
                >
                  <i class="fa fa-play"></i> </a
                >{{ " " }}
                <span class="text-black">Watch The Video</span>
                <a href="javascript:void(0);" class="btn-link">
                  <i class="feather icon-chevron-right"></i>
                </a>
              </div>
            </div>
            <div class="testimonial-detail">
              <div class="testimonial-head">
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
                <h3 class="title">Best Treatment</h3>
              </div>
              <div class="testimonial-contant">
                <div class="testimonial-text">
                  <p>{{ item.msg }}</p>
                </div>
              </div>
              <div class="testimonial-info">
                <div class="dz-media">
                  <img :src="item.image" alt="" />
                </div>
                <div class="clearfix">
                  <h5 class="testimonial-name">{{ item.name }}</h5>
                  <span class="testimonial-position">{{ item.position }}</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div
          class="slider__pagination testimonial-slider__pagination2 wow fadeInUp"
          data-wow-delay="1.0s"
          data-wow-duration="0.8s"
        >
          <div class="slider__current testimonial-slider__current">
            0{{ currentIndex + 1 }}
          </div>
          <div class="swiper-progress testimonial-pagination-swiper2"></div>
          <div class="slider__total testimonial-slider__total">
            0{{ data.list.length }}
          </div>
        </div>
      </Swiper>
    </div>
  </section>
</template>

<style scoped></style>
