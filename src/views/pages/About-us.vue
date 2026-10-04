<script setup lang="ts">
import { ref } from 'vue';
import { IMAGES } from '@/constent/Them';
import Banner from '@/elements/Banner.vue';
import TestimonialSection from '@/components/TestimonialSection.vue';
import AboutSection1 from '@/components/AboutSection1.vue';
import ChooseDentalCareSection from '@/components/ChooseDentalCareSection.vue';
import AboutSection2 from '@/components/AboutSection2.vue';
import testimonialImg from '@/assets/images/avatar/small/avatar3.webp';
import GetForm from '@/components/GetForm.vue';
import ClientSwiper from '@/components/ClientSwiper.vue';
import CallToAction from '@/components/CallToAction.vue';

const AboutSectionData1 = ref({
  title:'We Care About Your Dental Health',
  class:' overlay-opacity-10',
  description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.',
})

const AboutSectionData2 = ref({
  title:'About Dr. Nashid Martines',
  description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
})

const TestimonialMembers = ref({
  title:'What our patient say about us',
  list:[
    {
      bgImg:IMAGES.testimonial1,
      name: "Kenneth Fong",
      position: "Postgraduate Student",
      image: testimonialImg ,
      msg:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a making it look like readable English.'
    },
    {
      bgImg:IMAGES.testimonial2,
      name: "Kenneth Fong",
      position: "Postgraduate Student",
      image: testimonialImg ,
      msg:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a making it look like readable English.'
    },
    {
      bgImg:IMAGES.testimonial1,
      name: "Kenneth Fong",
      position: "Postgraduate Student",
      image: testimonialImg ,
      msg:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a making it look like readable English.'
    }
  ]
})


const ClientlogoList = ref([
    IMAGES.logoM1,
    IMAGES.logoM2,
    IMAGES.logoM3,
    IMAGES.logoM4,
    IMAGES.logoM1,
    IMAGES.logoM2
])
</script>
<template>

    <main class="page-content">
      <Banner :pageTitle="'About Us'"/>
      
      <!-- About Section 1 -->
      <AboutSection1 :data="AboutSectionData1"/>

      <ChooseDentalCareSection />

      <AboutSection2 :data="AboutSectionData2"/>

      <TestimonialSection  :data="TestimonialMembers" />

      <GetForm :class="'content-inner-2'"/>
      
      <!-- Client Section  -->
      <ClientSwiper :title="'Our Accepted insurance'" :data="ClientlogoList"/>

      <CallToAction :title="'Want to schedule an appointment?'" :class="'content-wrapper style-20 clearfix'"/>
      
    </main>
</template>