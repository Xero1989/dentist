<script setup lang="ts">
import type { PropType } from 'vue';
import bgImg from '@/assets/images/background/bg8.webp';
// Define props for receiving data from the parent component
const props = defineProps({
    title: {
        type: String as PropType<string>,
        required: true,
    },
    class:{
        ype: String as PropType<string>,
        required: false,
    }
})

</script>
<template>
    <section :class="`${props.class ? props.class : 'content-wrapper'}`" :style="{ backgroundImage: 'url(' + bgImg + ')' }">
        <div class="container">
          <div class="row align-items-center h-100">
            <div class="col-md-6">
              <div class="section-head style-3 position-relative mb-0 z-2">
                <h2 class="title m-b40 fw-semibold wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">{{ title }}</h2>
                <RouterLink to="/appointment" class="btn btn-lg btn-icon btn-primary btn-shadow wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                  <span class="w-100">Appointment</span>
                  <span class="right-icon">
                    <i class="feather icon-arrow-right"></i>
                  </span>
                </RouterLink>
              </div>
            </div>
            <div class="col-md-6 align-self-end">
              <div class="dz-media" data-bottom-top="transform: translateY(100px)" data-top-bottom="transform: translateY(-20px)">
                <img src="../assets/images/about/img11.webp" alt="">
                <div class="item1">
                  <img class="move-2" src="../assets/images/hero-banner/img4.webp" alt="">
                </div>
              </div>
              <div class="item2">
                <img class="move-1" src="../assets/images/hero-banner/img2.webp" alt="">
              </div>
            </div>
          </div>
        </div>
    </section>
</template>