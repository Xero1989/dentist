<script setup lang="ts">
import { ref } from 'vue';
import AboutSection1 from '@/components/AboutSection1.vue';
import HeroBanner from '@/components/HeroBanner.vue';
import TeamSection1 from '@/components/TeamSection1.vue';
import { IMAGES } from '@/constent/Them';
import ContectFormSection from '@/components/ContectFormSection.vue';
import ServiceSection1 from '@/components/ServiceSection1.vue';
import ChooseDentalCareSection from '@/components/ChooseDentalCareSection.vue';
import AboutSection2 from '@/components/AboutSection2.vue';
import PlansSection from '@/components/PlansSection.vue';
import NewsAndUpdate from '@/components/NewsAndUpdate.vue';
import GetForm from '@/components/GetForm.vue';
import TestimonialSection from '@/components/TestimonialSection.vue';
import testimonialImg from '@/assets/images/avatar/small/avatar3.webp';

const AboutSectionData1 = ref({
  title:'We Care About Your Dental Health',
  class:' overlay-opacity-10 pt-sm-0',
  description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.',
})

const AboutSectionData2 = ref({
  title:'About Dr. Nashid Martines',
  description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
})

const TeamSectionData = ref({
    title:'Highly Qualified Team',
    description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    list:[
      {
        image:IMAGES.teamSmall1,
        name:'Nashid Martines',
        postion:'Cardiac Surgery',
      },
      {
        image:IMAGES.teamSmall2,
        name:'Nashid Martines',
        postion:'Cardiac Surgery',
      },
      {
        image:IMAGES.teamSmall3,
        name:'Nashid Martines',
        postion:'Cardiac Surgery',
      },
      {
        image:IMAGES.teamSmall4,
        name:'Nashid Martines',
        postion:'Cardiac Surgery',
      },
      {
        image:IMAGES.teamSmall5,
        name:'Nashid Martines',
        postion:'Cardiac Surgery',
      },
      {
        image:IMAGES.teamSmall1,
        name:'Nashid Martines',
        postion:'Cardiac Surgery',
      },
      {
        image:IMAGES.teamSmall2,
        name:'Nashid Martines',
        postion:'Cardiac Surgery',
      },
      {
        image:IMAGES.teamSmall3,
        name:'Nashid Martines',
        postion:'Cardiac Surgery',
      },
    ]
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

// Pricing plans data
const pricingPlans = ref([
{
    name: 'Offered Services',
    monthlyPrice: 49,
    yearlyPrice: 1049,
    services: [
      'Dental cleanings',
      'Dental examinations',
      'X-rays',
      'Fluoride treatments',
      'Dental sealants',
    ],
    image: IMAGES.pricetable1
  },
  {
    name: 'Cosmetic Surgeries',
    monthlyPrice: 99,
    yearlyPrice: 1099,
    services: [
      'Dental cleanings',
      'Dental examinations',
      'X-rays',
      'Fluoride treatments',
      'Dental sealants',
    ],
    image: IMAGES.pricetable2
  }
]);
</script>

<template>
  <main class="page-content">
     <!-- Hero Banner -->
    <HeroBanner />
  
    <!-- About Section 1 -->
    <AboutSection1 :data="AboutSectionData1"/>

    <TeamSection1 :data="TeamSectionData"/>

    <ContectFormSection />

    <ServiceSection1 />

    <ChooseDentalCareSection menClass="twentytwenty-top-spacing"/>

    <AboutSection2 :data="AboutSectionData2"/>

    <PlansSection :data="pricingPlans"/>

    <NewsAndUpdate />
    
    <TestimonialSection  :data="TestimonialMembers" />

    <GetForm />
  </main>
</template>
