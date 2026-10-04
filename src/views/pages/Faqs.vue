<script setup lang="ts">
import { ref } from 'vue';
import Banner from '@/elements/Banner.vue';
import PlansSection from '@/components/PlansSection.vue';
import ContectFormSection from '@/components/ContectFormSection.vue';
import { IMAGES } from '@/constent/Them';
import { storeToRefs } from 'pinia';
import { useStore } from '@/stores/counter';
import background from '@/assets/images/bg1.png';
import TestimonialSection1 from '@/components/TestimonialSection1.vue';

// Pricing plans data
const pricingPlans = ref([
  {
    name: 'Maintenance Package',
    monthlyPrice: 49,
    yearlyPrice: 1049,
    services: [
      'Dental cleaning',
      'Polishing',
      'Filling',
      'Gum care',
      'Flossing',
    ],
    image: IMAGES.pricetable1
  },
  {
    name: 'Cosmetic Surgeries',
    monthlyPrice: 99,
    yearlyPrice: 1099,
    services: [
      'Root canal treatment',
      'Braces',
      'Implants',
      'Bridges',
      'Crown',
    ],
    image: IMAGES.pricetable2
  },
  {
    name: 'Restorative Procedures',
    monthlyPrice: 49,
    yearlyPrice: 1049,
    services: [
      'Missing teeth',
      'Bridges',
      'Bridges',
      'Porcelain veneers',
      'Dental sealants',
    ],
    image: IMAGES.pricetable3
  },
  {
    name: 'Offered Services',
    monthlyPrice: 99,
    yearlyPrice: 1099,
    services: [
      'Dental cleanings',
      'Dental examinations',
      'X-rays',
      'Fluoride treatments',
      'Dental sealants',
    ],
    image: IMAGES.pricetable4
  }
]);


const Testimonial = ref({
  title:'Have any questions?',
  description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
})

// Video Box ----
const {opneModel, opneModelYoutubeID}=storeToRefs(useStore())
const openVideo = (key:any) => {
  opneModel.value = true;
  opneModelYoutubeID.value = key;
};
</script>
<template>
    <main class="page-content">
      <Banner :pageTitle="`Faq's`"/>

      <TestimonialSection1 :data="Testimonial"/>

      <section class="content-inner-1 p-t0 mb-xl-5">
        <div class="container">
          <div class="content-bx style-7 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
            <div class="clearfix">
              <h2 class="dz-title">Still have questions?</h2>
              <p class="m-b0">Can’t find the answer you’re looking for. Please chat to our friendly team.</p>
            </div>
            <div class="flex-btn">
              <RouterLink to="/contact-us" class="btn btn-primary btn-hover1">Get In Touch</RouterLink>
            </div>
          </div>
        </div>
      </section>

      <ContectFormSection />

      <PlansSection :data="pricingPlans"/>

      <section class="content-inner-1 bg-light content-wrapper style-21" :style="{ backgroundImage: 'url(' + background + ')' }">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-5">
              <div class="content-media">
                <img src="../../assets/images/about/img17.webp" alt="">
                <div class="video-bx2 item1">
                  <a href="#" @click.prevent class="video-btn video-lg popup-youtube" @click="openVideo('o8OgzQdA70c')">
                    <i class="fa fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-7">
              <div class="info-widget style-9 bg-white" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
                <div class="widget-content">
                  <h2 class="title">Open Hours</h2>
                  <ul>
                    <li>Monday <span class="text-primary">09:30 - 07:30</span>
                    </li>
                    <li>Tuesday <span class="text-primary">09:30 - 07:30</span>
                    </li>
                    <li>Wednesday <span class="text-primary">09:30 - 07:30</span>
                    </li>
                    <li>Thursday <span class="text-primary">09:30 - 07:30</span>
                    </li>
                    <li>Friday <span class="text-primary">09:30 - 07:30</span>
                    </li>
                    <li>Saturday <span class="text-primary">09:30 - 07:30</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
</template>