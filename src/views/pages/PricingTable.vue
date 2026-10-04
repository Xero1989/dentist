<script setup lang="ts">
import { ref } from 'vue';
import Banner from '@/elements/Banner.vue';
import PlansSection from '@/components/PlansSection.vue';
import TestimonialSection from '@/components/TestimonialSection.vue';
import { IMAGES } from '@/constent/Them';
import ContectFormSection from '@/components/ContectFormSection.vue';
import RealPeopleSection from '@/components/RealPeopleSection.vue';
import TwentyTwenty from '@/elements/TwentyTwenty.vue';
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
const TwentyTwentyList = ref([
    {
        before: IMAGES.before1,
        after: IMAGES.after1
    }
])

const Testimonial = ref({
  title:'Have any questions?',
  description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
})
</script>
<template>
  <main class="page-content">
      <Banner :pageTitle="'Pricing Table'"/>

      <PlansSection :data="pricingPlans"/>
  
      <ContectFormSection />

      <RealPeopleSection />

      <div class="bg-light bg-half-bottom">
        <div class="container">
          <div class="twentytwenty-box wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
            <TwentyTwenty :data="TwentyTwentyList" class="twentytwenty-container"/>
            <RouterLink to="/about-us-2" class="btn btn-white rounded btn-sm position-absolute end-0 bottom-0 me-md-4 mb-md-4 me-2 mb-2">View All</RouterLink>
          </div>
        </div>
      </div>

      <TestimonialSection1 :data="Testimonial"/>
 
      <section class="content-inner-1 p-t0">
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
  </main>

</template>