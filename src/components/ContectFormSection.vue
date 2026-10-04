<script setup lang="ts">
import { IMAGES } from '@/constent/Them';
import CustemSelect from '@/elements/CustemSelect.vue';

const options= [
  {lable:'Department'},
  {lable:'Angioplasty'},
  {lable:'Cardiology'},
  {lable:'Dental'},
  {lable:'Eye Care'}
]
const options1= [
  {lable:'Doctor Name'},
  {lable:'Nashid Martines'},
  {lable:'Kenneth Fong'},
]
</script>

<template>
    <section class="content-wrapper style-12 bg-secondary background-blend-burn" :style="{ backgroundImage: 'url(' + IMAGES.background1+ ')' }">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="content-info">
              <div class="section-head style-3 m-b40">
                <h2 class="title text-white m-b0 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Make An <span class="text-yellow">Appointment</span>
                </h2>
              </div>
              <div class="form-wrapper">
                <div class="form-body">
                  <form action="../assets/script/contact_smtp.php" class="dzForm" method="POST">
                    <input type="hidden" class="form-control" name="dzToDo" value="Appointment">
                    <input type="hidden" class="form-control" name="reCaptchaEnable" value="0">
                    <div class="dzFormMsg"></div>
                    <div class="row g-3">
                      <div class="col-xl-4 col-sm-6 m-b10 wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="0.8s">
                        <div class="form-floating floating-outline input-light">
                          <input name="dzName" type="text" class="form-control" id="inputYourName" placeholder="Your Name">
                          <label for="inputYourName">Your Name</label>
                          <span class="input-group-text">
                            <i class="feather icon-user"></i>
                          </span>
                        </div>
                      </div>
                      <div class="col-xl-4 col-sm-6 m-b10 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                        <div class="form-floating floating-outline input-light">
                          <input name="dzEmail" type="email" class="form-control" id="inputYourEmail" placeholder="Your Email">
                          <label for="inputYourEmail">Your Email</label>
                          <span class="input-group-text">
                            <i class="feather icon-mail"></i>
                          </span>
                        </div>
                      </div>
                      <div class="col-xl-4 col-sm-6 m-b10 wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="0.8s">
                        <div class="form-floating floating-outline input-light">
                          <input name="dzOther[DateTime]" type="text" class="form-control" id="dateTimePickerOnly" placeholder="Phone Number">
                          <label for="dateTimePickerOnly">Date Time</label>
                          <span class="input-group-text">
                            <i class="feather icon-calendar"></i>
                          </span>
                        </div>
                      </div>
                      <div class="col-xl-4 col-sm-6 m-b10 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                        <div class="form-floating floating-outline input-light">
                            <div class="dropdown bootstrap-select bs-select">
                                <CustemSelect :options="options"/>
                            </div>
                        </div>
                      </div>
                      <div class="col-xl-4 col-sm-6 m-b10 wow fadeInUp" data-wow-delay="0.7s" data-wow-duration="0.8s">
                        <div class="form-floating floating-outline input-light">
                            <div class="dropdown bootstrap-select bs-select">
                                <CustemSelect :options="options1"/>
                            </div>
                        </div>
                      </div>
                      <div class="col-xl-4 col-sm-6 m-b10 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
                        <button type="submit" name="submit" value="submit" class="btn btn-lg btn-icon btn-white shadow-sm w-100">
                          <span class="w-100">Appointment</span>
                          <span class="right-icon bg-primary">
                            <i class="feather icon-arrow-right"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 align-self-end">
            <div class="content-media wow fadeInUp" data-wow-delay="1.0s" data-wow-duration="0.8s">
              <img src="../assets/images/about/img1.webp" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>
</template>