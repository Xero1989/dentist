<script setup lang="ts">
import { ref, type PropType } from 'vue';
import bgImgDefault from '@/assets/images/banner/bnr1.webp';

const props = defineProps({
  pageTitle: {
    type: String as PropType<string>,
    required: true,
  },
  bgImg: {
    type: String as PropType<string>,
    required: false,
  },
});


</script>

<template>
    <div class="dz-bnr-inr style-2 dz-bnr-inr-md">
        <div class="container">
          <div class="dz-bnr-inr-entry">
            <div class="dz-bnr-inr-flex">
              <div class="bnr-info">
                <h1 class="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">{{ pageTitle }}</h1>
                <nav aria-label="breadcrumb" class="breadcrumb-row wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                  <ul class="breadcrumb">
                    <li class="breadcrumb-item">
                        <RouterLink to="/">Home</RouterLink>
                    </li>{{ ' ' }}
                    <li class="breadcrumb-item">{{ pageTitle }}</li>
                  </ul>
                </nav>
              </div>
              <div class="bnr-media" data-bottom-top="transform: translateY(-100px)" data-top-bottom="transform: translateY(100px)">
                <img :src="bgImg?bgImg:bgImgDefault" alt="" class="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
              </div>
            </div>
          </div>
        </div>
        <div class="item1" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(0px)">
          <img class="move-1" src="../assets/images/hero-banner/img2.webp" alt="">
        </div>
        <div class="item2" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
          <img class="move-2" src="../assets/images/hero-banner/img4.webp" alt="">
        </div>
        <div class="item3" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
          <img class="move-3" src="../assets/images/hero-banner/img3.webp" alt="">
        </div>
        <svg class="banner-shape" viewBox="0 0 1920 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1921 164.375C1734.2 -139.225 527.167 48.8754 -33 180.875H1921V164.375Z" fill="var(--bs-primary)"></path>
          <path d="M1921 164.375C1714.2 -59.2247 527.167 58.8754 -33 180.875H1921V164.375Z" fill="white"></path>
        </svg>
        <div class="banner-shape4"></div>
        <div class="banner-shape5"></div>
    </div>
</template>

