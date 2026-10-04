<script setup lang="ts">
import { ref } from 'vue';
import { IMAGES } from '@/constent/Them';
import Banner from '@/elements/Banner.vue';
import RealPeopleSection from '@/components/RealPeopleSection.vue';
import PlansSection from '@/components/PlansSection.vue';
import CallToAction from '@/components/CallToAction.vue';


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
</script>

<template>
    <main class="page-content">
        <Banner :pageTitle="'Services 2'"/>
       
        <section class="content-inner p-b20">
            <div class="container">
            <div class="dz-img-box style-3">
                <div class="dz-media wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                <img src="../../assets/images/services/img1.webp" alt="">
                </div>
                <div class="dz-content wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                <div class="dz-number">01</div>
                <h2 class="title">Dental Implants</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p>Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                 <RouterLink to="/service-detail-2" class="btn btn-primary icon-link-hover-end radius-sm">View All Details <i class="feather icon-arrow-right-circle"></i>
                </RouterLink>
                </div>
            </div>
            <div class="dz-img-box style-3 right">
                <div class="dz-media wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                <img src="../../assets/images/services/img2.webp" alt="">
                </div>
                <div class="dz-content wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                <div class="dz-number">02</div>
                <h2 class="title">Orthodontics</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p>Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <RouterLink to="/service-detail-2" class="btn btn-primary icon-link-hover-end radius-sm">View All Details <i class="feather icon-arrow-right-circle"></i>
                </RouterLink>
                </div>
            </div>
            <div class="dz-img-box style-3">
                <div class="dz-media wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                <img src="../../assets/images/services/img3.webp" alt="">
                </div>
                <div class="dz-content wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                <div class="dz-number">03</div>
                <h2 class="title">Pediatric Dentistry</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p>Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                 <RouterLink to="/service-detail-2" class="btn btn-primary icon-link-hover-end radius-sm">View All Details <i class="feather icon-arrow-right-circle"></i>
                </RouterLink>
                </div>
            </div>
            <div class="dz-img-box style-3 right">
                <div class="dz-media wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                <img src="../../assets/images/services/img4.webp" alt="">
                </div>
                <div class="dz-content wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                <div class="dz-number">04</div>
                <h2 class="title">Root Canals</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p>Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                 <RouterLink to="/service-detail-2" class="btn btn-primary icon-link-hover-end radius-sm">View All Details <i class="feather icon-arrow-right-circle"></i>
                </RouterLink>
                </div>
            </div>
            </div>
        </section>

        <RealPeopleSection />
      
        <PlansSection :data="pricingPlans"/>
       
        <CallToAction :title="'Want to schedule an appointment?'" :class="'content-wrapper style-20 clearfix'"/>
      
    </main>
</template>