<script setup lang="ts">
import Lightgallery from "lightgallery/vue";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import img1 from "@/assets/images/about/img12.webp";
import img2 from "@/assets/images/about/img13.webp";
import img3 from "@/assets/images/about/img14.webp";
import { reactive } from "vue";

// Plugins
const plugins = [lgThumbnail, lgZoom];

// Sample images (use your actual image paths here)
const galleryBlog = [
  {
    thumbSrc: img1,
    fullSrc: img1,
  },
  {
    thumbSrc: img2,
    fullSrc: img2,
  },
  {
    thumbSrc: img3,
    fullSrc: img3,
  },
  // Add more images as needed
];

const gallery = reactive([
  { img: img1, className: "height-md" },
  {
    chaild:[
      { img: img2, className: "height-xs" },
      { img: img3, className: "height-xs" },
    ]
  }
]);
</script>

<template>
    <section class="content-inner">
      <div class="container">
        <div class="section-head style-1 row align-items-end justify-content-between m-b30">
          <div class="col-xl-4 col-lg-6 m-b10 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
            <h2 class="title m-b0">Learn More About Our Practice</h2>
          </div>
          <div class="col-xl-7 col-lg-6 m-b10 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
            <p class="font-20">Welcome to our practice! We are dedicated to restoring and enhancing the natural beauty of your smile using conservative, state-of-the-art procedures for beautiful, long-lasting results.</p>
          </div>
        </div>
        <div  id="lightgallery">
          <lightgallery class="row" :settings="{ speed: 500, plugins: [lgThumbnail, lgZoom], selector: '.lg-item' }">
            <template v-for="({ img, className, chaild }, ind) in gallery" :key="ind">
              <div class="col-lg-6">
                <template v-if="chaild" v-for="({ img, className }, ind) in chaild" :key="ind">
                  <div class="dz-media radius-xl m-b20" :class="className" id="lightgallery">
                    <a :href="img" :data-src="img" class="lg-item">
                    <img :src="img" alt="" />
                    </a>
                </div>
                </template>
                <div v-else class="dz-media radius-xl m-b20" :class="className" id="lightgallery">
                    <a :href="img" :data-src="img" class="lg-item">
                    <img :src="img" alt="" />
                    </a>
                </div>
              </div>
            </template>
          </lightgallery>
        </div>
      </div>
    </section>
</template>