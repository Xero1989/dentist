<script setup lang="ts">
import { ref } from 'vue';
import Banner from '@/elements/Banner.vue';
import BlogList from '@/components/BlogList.vue';
import ChooseDentalCareSection from '@/components/ChooseDentalCareSection.vue';
import ContectFormSection from '@/components/ContectFormSection.vue';
import TestimonialSection1 from '@/components/TestimonialSection1.vue';

const Testimonial = ref({
  title:'Have any questions?',
  description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
})


</script>
<template>

    <main class="page-content">
        <Banner :pageTitle="'Services'"/>

    <section class="content-inner gradient-primary">
      <div class="container">
       <BlogList />
      </div>
    </section>

    <ChooseDentalCareSection menClass=""/>

    <ContectFormSection />

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