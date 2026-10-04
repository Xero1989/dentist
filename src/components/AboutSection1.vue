<script setup lang="ts">
import { onMounted, ref } from 'vue';
import bgImg from '@/assets/images/background/bg4.webp';
import bgImgAbout from '@/assets/images/about/img6.webp';
import background1 from '@/assets/images/background/bg7.webp';
import { storeToRefs } from 'pinia';
import { useStore } from '@/stores/counter';
import CountUp from 'vue-countup-v3';

// Define props for receiving data from the parent component
const props = defineProps({
  data: {
    type: Object as () => {
      title: string;
      class?:string
      description: string;
    },
    required: true
  }
});

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

// Video Box ----
const {opneModel, opneModelYoutubeID}=storeToRefs(useStore())
const openVideo = (key:any) => {
  opneModel.value = true;
  opneModelYoutubeID.value = key;
};



interface CountUpOptions {
  startVal?: number;
  duration?: number;
  useGrouping?: boolean;
  separator?: string;
  suffix?: string;
  enableScrollSpy?: boolean;
  scrollSpyDelay?: number;
  scrollSpyOnce?: boolean;
  onCompleteCallback?: () => void;
  plugin?: any;
}

const isInViewport = ref(false);  // isInViewport is a ref with a boolean value
const scrollSpyOnce = ref(true);

const countUpOptions = ref<CountUpOptions>({
  startVal: 0,
  duration: 2,
  useGrouping: true,
  separator: ',',
  suffix: '',
  enableScrollSpy: true,
  scrollSpyOnce: true,
  scrollSpyDelay: 100,
  onCompleteCallback: () => {
    console.log('Counting completed!');
  }
});

const checkIfInViewport = () => {
  const element = document.querySelector('.counter-container') as HTMLElement;
  if (element) {
    const rect = element.getBoundingClientRect();
    const isInViewportCheck = rect.top <= window.innerHeight && rect.bottom >= 0;

    if (isInViewportCheck && scrollSpyOnce.value) {
      isInViewport.value = true;  
      scrollSpyOnce.value = false;
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', checkIfInViewport);
  checkIfInViewport();
});
</script>
<template>
  <section :class="`content-inner overlay-primary-gradient-light ${ data.class }`" :style="{ backgroundImage: 'url(' + bgImg + ')' }">
      <div class="container">
        <div class="row content-wrapper style-11 m-b30 justify-content-center">
          <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-7">
            <div class="content-media m-b30">
              <div class="dz-media" data-bottom-top="transform: translateY(30px)" data-top-bottom="transform: translateY(0px)">
                <img src="../assets/images/about/img5.webp" alt="">
              </div>
              <div class="item1" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(0px)">
                <div class="info-widget style-1 move-3">
                  <div class="avatar-group">
                    <img class="avatar rounded-circle avatar-sm border border-white border-2" src="../assets/images/avatar/small/avatar1.webp" alt="">
                    <img class="avatar rounded-circle avatar-sm border border-white border-2" src="../assets/images/avatar/small/avatar2.webp" alt="">
                    <img class="avatar rounded-circle avatar-sm border border-white border-2" src="../assets/images/avatar/small/avatar3.webp" alt="">
                    <img class="avatar rounded-circle avatar-sm border border-white border-2" src="../assets/images/avatar/small/avatar4.webp" alt="">
                  </div>
                  <div class="clearfix ms-2">
                    <span class="number text-primary">150k</span>
                    <span>Patient recovers</span>
                  </div>
                </div>
              </div>
              <div class="item2" data-bottom-top="transform: translateY(-30px)" data-top-bottom="transform: translateY(0px)">
                <div class="media1 move-4">
                  <img src="../assets/images/hero-banner/img4.webp" alt="">
                </div>
              </div>
              <div class="item3" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(0px)">
                <svg viewBox="0 0 496 175" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_i_3_4351)">
                    <path d="M455.54 4C647.742 4 2.913 252.086 4.727 142.129c.25-15.123 16.243-24.141 31.273-25.835V116.294" stroke="var(--bs-primary)" stroke-width="8" />
                  </g>
                  <defs>
                    <filter id="filter0_i_3_4351" x=".723" y="0" width="494.598" height="177.24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="1.5" />
                      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.833 0 0 0 0 0.896 0 0 0 1 0" />
                      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3_4351" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div class="col-xxl-6 col-xl-7 col-lg-7">
            <div class="content-info pt-md-5 m-b30">
              <div class="section-head style-3 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                <h2 class="title">{{ data.title }}</h2>
                <div class="widget-rating3 m-b20">
                  <ul class="star-list">
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                  </ul>
                  <span class="rating">(4.8)</span>
                  <span class="text ms-2">12k+ ratings on google</span>
                </div>
                <p>{{ data.description }}</p>
              </div>
              <div class="info-widget style-15 overlay-secondary-dark wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s" :style="{ backgroundImage: 'url(' + bgImgAbout + ')' }">
                <div class="row">
                  <div class="col-sm-6 d-flex align-items-center mb-4 mb-sm-0">
                    <div class="video-bx2">
                      <a href="#" @click.prevent class="video-btn popup-youtube"  @click="openVideo('o8OgzQdA70c')">
                        <i class="fa fa-play"></i>
                      </a>{{ ' ' }}
                      <span class="text-white">Play Video</span>
                    </div>
                  </div>
                  <div class="col-sm-6 ps-sm-4">
                    <ul class="list-check-try text-white light-green fw-medium">
                      <li>Teeth Whitening</li>
                      <li>Modern Anesthetic</li>
                      <li>Quality Brackets</li>
                      <li>Root Canal </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-2">
            <div class="row counter-item">
              <div class="col-xxl-12 col-sm-4 col-6 wow fadeInRight" data-wow-delay="0.6s" data-wow-duration="0.8s">
                <div class="content-bx style-3 m-b30 text-center bg-color1">
                  <span class="content-text text-secondary d-flex align-items-center justify-content-center">
                    <span class="counter"><count-up :options="countUpOptions" :end-val="45"></count-up></span>k 
                    </span>
                  <h3 class="title m-b0 text-orange">Happy Patients</h3>
                </div>
              </div>
              <div class="col-xxl-12 col-sm-4 col-6 wow fadeInRight" data-wow-delay="0.8s" data-wow-duration="0.8s">
                <div class="content-bx style-3 m-b30 text-center bg-color2">
                  <span class="content-text text-secondary d-flex align-items-center justify-content-center">
                    <span class="counter"><count-up :options="countUpOptions" :end-val="200"></count-up></span>+ </span>
                  <h3 class="title m-b0 text-green">Specialists</h3>
                </div>
              </div>
              <div class="col-xxl-12 col-sm-4 wow fadeInRight" data-wow-delay="1.0s" data-wow-duration="0.8s">
                <div class="content-bx style-3 m-b30 text-center bg-color3">
                  <span class="content-text text-secondary d-flex align-items-center justify-content-center">
                    <span class="counter"><count-up :options="countUpOptions" :end-val="150"></count-up></span>+ </span>
                  <h3 class="title m-b0 text-primary">Winning Awards</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row counter-reset">
          <div 
            class="col-xl-4 col-md-6 m-b30 wow fadeInUp" 
            data-wow-delay="0.2s" 
            data-wow-duration="0.8s" 
            v-for="(item, index) in items" :key="index"
            @mouseenter="handleMouseEnter(index)"
            >
            <div :class="`icon-bx-wraper style-6 counter-increment box-hover ${activeIndex === index&&'active'}`">+
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
</template>

<style scoped>

</style>