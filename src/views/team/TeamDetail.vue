<script setup lang="ts">
import ContectFormSection from '@/components/ContectFormSection.vue';
import Banner from '@/elements/Banner.vue';
import { onMounted, ref } from 'vue';
import CountUp from 'vue-countup-v3';
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
    <main class="page-content">
        <Banner :pageTitle="'Team Details'"/>
        <section class="content-inner-2">
            <div class="container">
            <div class="row">
                <div class="col-lg-6 m-b30">
                <aside class="side-bar sticky-top">
                    <div class="widget wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                    <div class="dz-team style-6">
                        <div class="dz-media">
                        <img src="../../assets/images/about/img2.webp" alt="/">
                        </div>
                        <ul class="dz-social">
                        <li>
                            <a href="https://www.linkedin.com" target="_blank">
                            <i class="fa-brands fa-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com" target="_blank">
                            <i class="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com" target="_blank">
                            <i class="fa-brands fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com" target="_blank">
                            <i class="fa-brands fa-x-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com" target="_blank">
                            <i class="fa-brands fa-youtube"></i>
                            </a>
                        </li>
                        </ul>
                        <div class="item1">
                        <div class="info-widget style-10 move-3">
                            <span class="content-text text-primary d-flex">
                                <count-up :options="countUpOptions" :end-val="20"></count-up>+ </span>
                            <h3 class="title m-b0">Years <br> Experienced </h3>
                        </div>
                        </div>
                    </div>
                    </div>
                </aside>
                </div>
                <div class="col-lg-6">
                <div class="section-head style-1 mb-30">
                    <h2 class="titlev fw-semibold m-b0 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Dr. Nashid Martines</h2>
                    <p class="text-primary m-b20 fw-normal small wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">MBBS (Village Town), USA (Cardiac Surgery)</p>
                    <p class="fw-normal small wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                    <p class="fw-normal small wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>
                <table class="table table-border-bottom m-b40 wow fadeInUp" data-wow-delay="1.0s" data-wow-duration="0.8s">
                    <tbody>
                    <tr>
                        <th>Specialty</th>
                        <td>Orthodontist Surgeon Specialize</td>
                    </tr>
                    <tr>
                        <th>Degrees</th>
                        <td>
                        <a href="javascript:void(0);">MBBS University of California</a>
                        </td>
                    </tr>
                    <tr>
                        <th>Experience</th>
                        <td>20+ years, New York Urgent Medical Care Serving California</td>
                    </tr>
                    <tr>
                        <th>Time</th>
                        <td> Monday - Friday 08:00 - 20:00 <br> Saturday 09:00 - 18:00 <br> Sunday 09:00 - 18:00 </td>
                    </tr>
                    <tr>
                        <th>Awards</th>
                        <td>2018 - 2019 : William Allan Award</td>
                    </tr>
                    </tbody>
                </table>
                <h3 class="font-20 m-b25 wow fadeInUp" data-wow-delay="1.2s" data-wow-duration="0.8s">Professional Skills</h3>
                <div class="progress-wrap m-b35 wow fadeInUp" data-wow-delay="1.4s" data-wow-duration="0.8s">
                    <div class="progress-info">
                    <span class="title">Radiant Skin Dermatology</span>
                    <span class="progress-value">90%</span>
                    </div>
                    <div class="progress" role="progressbar" aria-label="Radiant Skin Dermatology" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar" style="width: 90%"></div>
                    </div>
                </div>
                <div class="progress-wrap m-b35 wow fadeInUp" data-wow-delay="1.6s" data-wow-duration="0.8s">
                    <div class="progress-info">
                    <span class="title">Flawless Dermatology</span>
                    <span class="progress-value">78%</span>
                    </div>
                    <div class="progress" role="progressbar" aria-label="Flawless Dermatology" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar" style="width: 78%"></div>
                    </div>
                </div>
                <div class="progress-wrap m-b35 wow fadeInUp" data-wow-delay="1.8s" data-wow-duration="0.8s">
                    <div class="progress-info">
                    <span class="title">Luminous Dermatology</span>
                    <span class="progress-value">95%</span>
                    </div>
                    <div class="progress" role="progressbar" aria-label="Luminous Dermatology" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar" style="width: 95%"></div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        <section class="content-inner-1">
            <div class="container">
            <div class="row">
                <div class="col-lg-3 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                <div class="icon-bx-wraper style-10">
                    <div class="icon-bx bg-secondary">
                    <span class="icon-cell">
                        <i class="feather icon-map-pin"></i>
                    </span>
                    </div>
                    <div class="icon-content">
                    <h5 class="dz-title fw-semibold">Address</h5>
                    <p>1247/Plot No. 39, 15th Phase, Colony, Kukatpally, Hyderabad</p>
                    </div>
                </div>
                </div>
                <div class="col-lg-3 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                <div class="icon-bx-wraper style-10">
                    <div class="icon-bx bg-secondary">
                    <span class="icon-cell">
                        <i class="feather icon-phone"></i>
                    </span>
                    </div>
                    <div class="icon-content">
                    <h5 class="dz-title fw-semibold">Call Us</h5>
                    <p>
                        <a href="tel:+01234567890" class="text-body">+0 123-456-7890</a>
                        <br>
                        <a href="tel:+09876543210" class="text-body">+0 987-654-3210</a>
                    </p>
                    </div>
                </div>
                </div>
                <div class="col-lg-3 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                <div class="icon-bx-wraper style-10">
                    <div class="icon-bx bg-secondary">
                    <span class="icon-cell">
                        <i class="feather icon-mail"></i>
                    </span>
                    </div>
                    <div class="icon-content">
                    <h5 class="dz-title fw-semibold">Send us a Mail</h5>
                    <p>
                        <a href="mailto:info@example.com" class="text-body">info@example.com</a>
                        <br>
                        <a href="mailto:clinicmaster@example.com" class="text-body">clinicmaster@example.com</a>
                    </p>
                    </div>
                </div>
                </div>
                <div class="col-lg-3 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
                <div class="icon-bx-wraper style-10">
                    <div class="icon-bx bg-secondary">
                    <span class="icon-cell">
                        <i class="feather icon-clock"></i>
                    </span>
                    </div>
                    <div class="icon-content">
                    <h5 class="dz-title fw-semibold">Opening Time</h5>
                    <p>Mon-Thu: 8:00am-5:00pm <br> Fri: 8:00am-1:00pm </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        <ContectFormSection />
    
    </main>

</template>