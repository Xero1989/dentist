<script setup lang="ts">
import { onMounted, ref } from 'vue';
import CountUp from 'vue-countup-v3';
const props = defineProps({
  data: {
    type: Object as () => {
      title: string;
      description: string;
    },
    required: true
  }
});


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
    <section class="content-inner p-t50 bg-light">
      <div class="container">
        <div class="row content-wrapper style-9 align-items-end">
          <div class="col-xl-6 col-lg-6 m-b30">
            <div class="section-head style-2 m-b30">
              <div class="sub-title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Best Dentist</div>
              <h2 class="title wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">{{ data.title }}</h2>
              <p class="fw-normal wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
                <strong class="text-secondary fw-semibold">Dr. Nashid Martines</strong> {{ data.description }}
              </p>
            </div>
            <h3 class="text-primary title-dashed-separator wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">About Skills</h3>
            <ul class="list-check text-secondary fw-medium grid-2 m-b35 wow fadeInUp" data-wow-delay="1.0s" data-wow-duration="0.8s">
              <li>Root Canal Therapy</li>
              <li>Dental Examinations</li>
              <li>Endodontic Surgery</li>
              <li>X-Rays and Imaging</li>
              <li>Cracked Tooth Treatment</li>
              <li>Oral Cancer Screenings</li>
            </ul>
            <div class="row align-items-center g-4">
              <div class="col-sm-6 d-flex wow fadeInUp" data-wow-delay="1.2s" data-wow-duration="0.8s">
                <div class="text-center">
                  <img src="../assets/images/sign.svg" alt="">
                  <span class="font-14 d-block">Dr. Nashid Martines</span>
                </div>
              </div>
              <div class="col-sm-6 wow fadeInUp" data-wow-delay="1.4s" data-wow-duration="0.8s">
                <RouterLink to="/appointment" class="btn btn-lg btn-icon btn-primary"> Appointment <span class="right-icon">
                    <i class="feather icon-arrow-right"></i>
                  </span>
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 m-b30">
            <div class="content-media">
              <div class="dz-media" data-bottom-top="transform: translateY(30px)" data-top-bottom="transform: translateY(-30px)">
                <img src="../assets/images/about/img2.webp" alt="">
              </div>
              <div class="item1" data-bottom-top="transform: translateY(-20px)" data-top-bottom="transform: translateY(10px)">
                <div class="info-widget style-10 move-3">
                  <span class="content-text text-primary d-flex align-items-center justify-content-center">
                    <count-up :options="countUpOptions" :end-val="20"></count-up>+ </span>
                  <h3 class="title m-b0">Years <br> Experienced </h3>
                </div>
              </div>
              <div class="item2" data-bottom-top="transform: translateY(-20px)" data-top-bottom="transform: translateY(10px)">
                <div class="dz-img-box style-1 move-4">
                  <div class="dz-media">
                    <img src="../assets/images/logo/logo1.png" alt="">
                  </div>
                  <div class="dz-content">
                    <h3 class="title">ClinicMaster 2024</h3>
                    <p>Quality and Accreditation Institute</p>
                    <a href="javascript:void(0);" class="btn-link">Best Dermatologists</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<style scoped>

</style>