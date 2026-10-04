<script setup lang="ts">
import { ref } from 'vue';
import Banner from '@/elements/Banner.vue';
import BannerImg from '@/assets/images/about/img1.webp';
import Lightgallery1 from '@/components/Lightgallery1.vue';
import WeCareAboutSection from '@/components/WeCareAboutSection.vue';
import { IMAGES } from '@/constent/Them';
import TeamSection1 from '@/components/TeamSection1.vue';
import RealPeopleSection from '@/components/RealPeopleSection.vue';
import TwentyTwenty from '@/elements/TwentyTwenty.vue';
import TestimonialSection from '@/components/TestimonialSection.vue';
import testimonialImg from '@/assets/images/avatar/small/avatar3.webp';
import ClientSwiper from '@/components/ClientSwiper.vue';
import CallToAction from '@/components/CallToAction.vue';
const ClientlogoList = ref([
    IMAGES.logoM1,
    IMAGES.logoM2,
    IMAGES.logoM3,
    IMAGES.logoM4,
    IMAGES.logoM1,
    IMAGES.logoM2
])

const TwentyTwentyList = ref([
    {
        before: IMAGES.before1,
        after: IMAGES.after1
    }
])
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
</script>
<template>
  <main class="page-content">
    <Banner :pageTitle="'About Us 2'" :bgImg="BannerImg"/>

    <Lightgallery1 />
    
    <WeCareAboutSection :title="'We Care About Your Dental Health'" :data="ClientlogoList"/>
   
    <section class="content-inner bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xl-7 col-lg-6 m-b30 pe-xl-5">
            <div class="section-head style-1 m-b30">
              <h2 class="title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Meet the Doctor</h2>
              <h3 class="text-primary font-24 m-b20 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">Dr. Nashid Martines</h3>
              <p class="fw-normal wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">As a dentist, I strive to make my office a comfortable and welcoming place where patients feel completely at home. I am passionate about helping my patients achieve and maintain beautiful, healthy smiles that they are proud to show off. My patients are an integral part of my community, and I am committed to providing them with the most gentle and effective dental care possible. Our team understands that dental anxiety can prevent patients from scheduling appointments, so we aim to ensure that your visit to Brenner Dental Care is unlike any other.</p>
            </div>
            <div class="row align-items-center g-4">
              <div class="col-sm-6 d-flex wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
                <div class="text-center">
                  <img src="../../assets/images/sign.svg" alt="">
                  <span class="font-14 d-block">Dr. Nashid Martines</span>
                </div>
              </div>
              <div class="col-sm-6 wow fadeInUp" data-wow-delay="1.0s" data-wow-duration="0.8s">
                 <RouterLink to="/appointment" class="btn btn-lg btn-icon btn-primary"> Appointment <span class="right-icon">
                    <i class="feather icon-arrow-right"></i>
                  </span>
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="col-xl-5 col-lg-6 m-b30 wow fadeInUp" data-wow-delay="1.0s" data-wow-duration="0.8s">
            <div class="dz-media height-md radius-xl">
              <img src="../../assets/images/about/img5.webp" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>

    <TeamSection1 :data="TeamSectionData"/>
    
    <RealPeopleSection />

    <div class="bg-light bg-half-bottom">
      <div class="container">
        <div class="twentytwenty-box wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
           <TwentyTwenty :data="TwentyTwentyList" class="twentytwenty-container"/>
          <RouterLink to="/about-us-2" class="btn btn-white rounded btn-sm position-absolute end-0 bottom-0 me-md-4 mb-md-4 me-2 mb-2">View All</RouterLink>
        </div>
      </div>
    </div>
    
    <TestimonialSection  :data="TestimonialMembers" />

    <!-- Client Section  -->
    <ClientSwiper :title="'Our Accepted insurance'" :data="ClientlogoList"/>
 
    <CallToAction :title="'Want to schedule an appointment?'" :class="'content-wrapper style-20 clearfix'"/>

  </main>

</template>