<script setup lang="ts">
import { IMAGES } from '@/constent/Them';
import type { PropType } from 'vue';

const props = defineProps({
  menClass: {
        type: String as PropType<string>,
        required: false,
    },
})
</script>
<template>
    <section :class="`content-inner overflow-hidden ${menClass}`" style="background-size: cover;" :style="{ backgroundImage: 'url(' + IMAGES.background4+ ')' }">
      <div class="container">
        <div class="row content-wrapper style-10 align-items-center">
          <div class="col-lg-6 m-b30">
            <div class="section-head style-1 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
              <h2 class="title">Why Choose Dental Care</h2>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
            <div class="accordion dz-accordion style-2" id="accordionExample">
              <div class="accordion-item wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> Expertise in Dental Industry </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <div class="row align-items-center g-3">
                      <div class="col-sm-8">
                        <h3 class="title">Expertise in Dental Industry</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a making it look like readable English.</p>
                      </div>
                      <div class="col-sm-4">
                        <div class="dz-media radius-md">
                          <img src="../assets/images/blog/small/img1.webp" alt="">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> Patient-Centered Care </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <div class="row align-items-center g-3">
                      <div class="col-sm-8">
                        <h3 class="title">Expertise in Dental Industry</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a making it look like readable English.</p>
                      </div>
                      <div class="col-sm-4">
                        <div class="dz-media radius-md">
                          <img src="../assets/images/blog/small/img2.webp" alt="">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> Flexible Appointment Scheduling </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <div class="row align-items-center g-3">
                      <div class="col-sm-8">
                        <h3 class="title">Expertise in Dental Industry</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a making it look like readable English.</p>
                      </div>
                      <div class="col-sm-4">
                        <div class="dz-media radius-md">
                          <img src="../assets/images/blog/small/img3.webp" alt="">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 m-b30 text-center text-lg-start wow fadeInUp" data-wow-delay="1.0s" data-wow-duration="0.8s">
            <div class="content-media" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
              <div class="media-top">
                <div class="media1">
                  <img src="../assets/images/about/img7.webp" alt="">
                </div>
                <div class="media2">
                  <img src="../assets/images/about/img8.webp" alt="">
                </div>
              </div>
              <div class="media-bottom">
                <div class="media3">
                  <img src="../assets/images/about/img9.webp" alt="">
                </div>
                <div class="media4">
                  <img src="../assets/images/about/img10.webp" alt="">
                </div>
              </div>
              <div class="item1 move-3">
                <img src="../assets/images/hero-banner/img4.webp" alt="">
              </div>
              <div class="item2 move-4">
                <div class="info-widget style-1">
                  <div class="avatar-group">
                    <img class="avatar rounded-circle avatar-sm border border-white border-2" src="../assets/images/avatar/small/avatar1.webp" alt="">
                    <img class="avatar rounded-circle avatar-sm border border-white border-2" src="../assets/images/avatar/small/avatar2.webp" alt="">
                    <img class="avatar rounded-circle avatar-sm border border-white border-2" src="../assets/images/avatar/small/avatar3.webp" alt="">
                    <img class="avatar rounded-circle avatar-sm border border-white border-2" src="../assets/images/avatar/small/avatar4.webp" alt="">
                  </div>
                  <div class="clearfix ms-2">
                    <span class="number text-primary">150k</span>
                    <span>Patient Recovers</span>
                  </div>
                </div>
              </div>
              <div class="circle-wrapper">
                <img src="../assets/images/bg-circle.svg" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>