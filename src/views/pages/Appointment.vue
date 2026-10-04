<script setup lang="ts">
import Banner from '@/elements/Banner.vue';
import { ref, Suspense } from 'vue';
import background1 from '@/assets/images/background/bg7.webp';
import bgImg from '@/assets/images/background/bg4.webp';
import ContectFormSection from '@/components/ContectFormSection.vue';

const items = ref([
    {
        icone:'flaticon-medical-symbol',
        title:'Medical Service',
        desc:'It is a long established fact that a reader will be distracted by the readable content of a page.',
        image:background1
    },
    {
        icone:'flaticon-drugs',
        title:'24/7 Medicines',
        desc:'It is a long established fact that a reader will be distracted by the readable content of a page.',
        image:background1
    },
    {
        icone:'flaticon-doctor',
        title:'Best Doctor',
        desc:'It is a long established fact that a reader will be distracted by the readable content of a page.',
        image:background1
    }
])
const activeIndex = ref<number | null>(1);
const handleMouseEnter = (index: number) => {
  activeIndex.value = index;
};
</script>
<template>
    <main class="page-content">
        <Suspense>
            <template #default>
                <Banner :pageTitle="'Appointment'"/>
            </template>
            <template #fallback>
                Loading..
            </template>
        </Suspense>

    <section class="content-inner overlay-primary-gradient-light overlay-opacity-10" :style="{ backgroundImage: 'url(' + bgImg + ')' }">
        <div class="container">
            <div class="row counter-reset">
                <div 
                    class="col-xl-4 col-md-6 m-b30 wow fadeInUp" 
                    data-wow-delay="0.2s" 
                    data-wow-duration="0.8s" 
                    v-for="(item, index) in items" :key="index"
                    @mouseenter="handleMouseEnter(index)"
                    >
                    <div :class="`icon-bx-wraper style-6 counter-increment box-hover ${activeIndex === index&&'active'}`">
                    <div class="bg" :style="{ backgroundImage: 'url(' + item.image + ')' }"></div>
                    <div class="icon-bx">
                        <span class="icon-cell">
                        <i :class="item.icone"></i>
                        </span>
                    </div>
                    <div class="icon-content">
                        <h3 class="dz-title">{{ item.title }}</h3>
                        <p>{{ item.desc }}</p>
                        <RouterLink to="/service-detail" class="icon-link-hover-end m-t30 d-block">Read More <i class="feather icon-arrow-right-circle"></i>
                        </RouterLink>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <ContectFormSection />
    
    <section class="content-inner">
        <div class="container">
        <div class="row content-wrapper">
            <div class="col-xl-7 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
            <div class="map-wrapper style-3 me-xl-4">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28891.193971348785!2d75.8546432!3d25.1559936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1719221707984!5m2!1sen!2sin&zoomcontrol=false" width="600" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div class="item1 position-absolute">
                <div class="content-bx style-5 alert alert-dismissible fade show" role="alert">
                    <div class="content-logo">
                    <img src="../../assets/images/logo.svg" alt="">
                    </div>
                    <div class="content-text m-b20">
                    <h6 class="m-b5">Office Address: </h6>
                    <p class="m-b0">234 Oak Drive, Villagetown, USA</p>
                    </div>
                    <div class="content-text">
                    <h6 class="m-b5">Working Hours: </h6>
                    <p class="m-b0">Mon-Thu: 8:00am-5:00pm <br> Fri: 8:00am-1:00pm </p>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.5 7.5L7.5 22.5" stroke="#AFAAA4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M7.5 7.5L22.5 22.5" stroke="#AFAAA4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    </button>
                </div>
                </div>
            </div>
            </div>
            <div class="col-xl-5">
            <div class="section-head style-1 m-b30 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                <h2 class="title m-b5">All Locations</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div class="row">
                <div class="col-xl-12 col-lg-6 m-b15 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                <div class="dz-img-box style-2">
                    <div class="dz-content">
                    <div class="inner-content clearfix">
                        <h3 class="title m-b10">
                        <img src="../../assets/images/country/united_states.webp" alt=""> United States
                        </h3>
                        <p class="m-b10">123 Health Way, Suite 456 Goodland, 78910 United States</p>
                        <a href="tel:+0123-456-7890" class="text-body">+0 123-456-7890</a>
                    </div>
                    <div class="dz-footer">
                        <a href="https://www.google.com/maps/" target="_blank" class="icon-link-hover-end">Get Directions <i class="feather icon-arrow-up-right"></i>
                        </a>
                    </div>
                    </div>
                    <div class="dz-media">
                    <img src="../../assets/images/map.webp" alt="">
                    </div>
                </div>
                </div>
                <div class="col-xl-12 col-lg-6 m-b15 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
                <div class="dz-img-box style-2">
                    <div class="dz-content">
                    <div class="inner-content clearfix">
                        <h3 class="title m-b10">
                        <img src="../../assets/images/country/canada.webp" alt=""> Canada
                        </h3>
                        <p class="m-b10">123 Health Way, Suite 456 Goodland, 78910 United States</p>
                        <a href="tel:+0123-456-7890" class="text-body">+0 123-456-7890</a>
                    </div>
                    <div class="dz-footer">
                        <a href="https://www.google.com/maps/" target="_blank" class="icon-link-hover-end">Get Directions <i class="feather icon-arrow-up-right"></i>
                        </a>
                    </div>
                    </div>
                    <div class="dz-media">
                    <img src="../../assets/images/map.webp" alt="">
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
    </main>
</template>