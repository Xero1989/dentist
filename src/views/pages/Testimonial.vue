<script setup lang="ts">
import { ref } from "vue";
import { IMAGES } from "@/constent/Them";
import Banner from "@/elements/Banner.vue";
import { storeToRefs } from "pinia";
import { useStore } from "@/stores/counter";
import RealPeopleSection from "@/components/RealPeopleSection.vue";
import TwentyTwenty from "@/elements/TwentyTwenty.vue";
import testimonialImg from "@/assets/images/avatar/small/avatar3.webp";
import TestimonialSection from "@/components/TestimonialSection.vue";

const TwentyTwentyList = ref([
  {
    before: IMAGES.before1,
    after: IMAGES.after1,
  },
]);

const TestimonialMembers = ref({
  title: "What our patient say about us",
  list: [
    {
      bgImg: IMAGES.testimonial1,
      name: "Kenneth Fong",
      position: "Postgraduate Student",
      image: testimonialImg,
      msg: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a making it look like readable English.",
    },
    {
      bgImg: IMAGES.testimonial2,
      name: "Kenneth Fong",
      position: "Postgraduate Student",
      image: testimonialImg,
      msg: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a making it look like readable English.",
    },
    {
      bgImg: IMAGES.testimonial1,
      name: "Kenneth Fong",
      position: "Postgraduate Student",
      image: testimonialImg,
      msg: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a making it look like readable English.",
    },
  ],
});

// Video Box ----
const { opneModel, opneModelYoutubeID } = storeToRefs(useStore());
const openVideo = (key: any) => {
  opneModel.value = true;
  opneModelYoutubeID.value = key;
};
</script>
<template>
  <main class="page-content">
    <Banner :pageTitle="'Testimonial'" />
    <section class="content-inner-1">
      <div class="container">
        <div class="row m-b10 loadmore-content">
          <div
            class="col-xl-4 col-md-6 m-b20 wow fadeInUp"
            data-wow-delay="0.2s"
            data-wow-duration="0.8s"
          >
            <div class="testimonial-2">
              <div class="testimonial-media">
                <img src="../../assets/images/testimonial/img1.webp" alt="" />
                <div class="video-bx1 video-lg">
                  <a
                    href="#"
                    @click.prevent
                    class="popup-youtube video-btn bg-primary"
                    @click="openVideo('o8OgzQdA70c')"
                  >
                    <i class="fa fa-play"></i>
                  </a>
                  <span class="text-black">Watch The Video</span>
                  <a href="javascript:void(0);" class="btn-link">
                    <i class="feather icon-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-xl-4 col-md-6 m-b20 wow fadeInUp"
            data-wow-delay="0.4s"
            data-wow-duration="0.8s"
          >
            <div class="testimonial-2">
              <div class="testimonial-detail">
                <div class="testimonial-head">
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
                  <h3 class="title">Best Treatment</h3>
                </div>
                <div class="testimonial-contant">
                  <div class="testimonial-text">
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a making it look like readable English.
                    </p>
                  </div>
                </div>
                <div class="testimonial-info">
                  <div class="dz-media">
                    <img
                      src="../../assets/images/avatar/small/avatar3.webp"
                      alt=""
                    />
                  </div>
                  <div class="clearfix">
                    <h5 class="testimonial-name">Kenneth Fong</h5>
                    <span class="testimonial-position"
                      >Postgraduate Student</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-xl-4 col-md-6 m-b20 wow fadeInUp"
            data-wow-delay="0.6s"
            data-wow-duration="0.8s"
          >
            <div class="testimonial-2">
              <div class="testimonial-media">
                <img src="../../assets/images/testimonial/img2.webp" alt="" />
                <div class="video-bx1 video-lg">
                  <a
                    href="#"
                    class="popup-youtube video-btn bg-primary"
                    @click="openVideo('o8OgzQdA70c')"
                  >
                    <i class="fa fa-play"></i>
                  </a>
                  <span class="text-black">Watch The Video</span>
                  <a href="javascript:void(0);" class="btn-link">
                    <i class="feather icon-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-xl-4 col-md-6 m-b20 wow fadeInUp"
            data-wow-delay="0.8s"
            data-wow-duration="0.8s"
          >
            <div class="testimonial-2">
              <div class="testimonial-detail">
                <div class="testimonial-head">
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
                  <h3 class="title">Best Treatment</h3>
                </div>
                <div class="testimonial-contant">
                  <div class="testimonial-text">
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a making it look like readable English.
                    </p>
                  </div>
                </div>
                <div class="testimonial-info">
                  <div class="dz-media">
                    <img
                      src="../../assets/images/avatar/small/avatar3.webp"
                      alt=""
                    />
                  </div>
                  <div class="clearfix">
                    <h5 class="testimonial-name">Kenneth Fong</h5>
                    <span class="testimonial-position"
                      >Postgraduate Student</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-xl-4 col-md-6 m-b20 wow fadeInUp"
            data-wow-delay="1.0s"
            data-wow-duration="0.8s"
          >
            <div class="testimonial-2">
              <div class="testimonial-media">
                <img src="../../assets/images/testimonial/img2.webp" alt="" />
                <div class="video-bx1 video-lg">
                  <a
                    href="javascript:void(0)"
                    class="popup-youtube video-btn bg-primary"
                    @click="openVideo('o8OgzQdA70c')"
                  >
                    <i class="fa fa-play"></i>
                  </a>
                  <span class="text-black">Watch The Video</span>
                  <a href="javascript:void(0);" class="btn-link">
                    <i class="feather icon-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-xl-4 col-md-6 m-b20 wow fadeInUp"
            data-wow-delay="1.2s"
            data-wow-duration="0.8s"
          >
            <div class="testimonial-2">
              <div class="testimonial-detail">
                <div class="testimonial-head">
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
                  <h3 class="title">Best Treatment</h3>
                </div>
                <div class="testimonial-contant">
                  <div class="testimonial-text">
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a making it look like readable English.
                    </p>
                  </div>
                </div>
                <div class="testimonial-info">
                  <div class="dz-media">
                    <img
                      src="../../assets/images/avatar/small/avatar3.webp"
                      alt=""
                    />
                  </div>
                  <div class="clearfix">
                    <h5 class="testimonial-name">Kenneth Fong</h5>
                    <span class="testimonial-position"
                      >Postgraduate Student</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="dz-separator style-3">
          <a
            href="#"
            @click.prevent
            class="btn separator-badge dz-load-more wow fadeInUp"
            data-wow-delay="1.4s"
            data-wow-duration="0.8s"
            rel="ajax/testimonial.html"
            >Load More</a
          >
        </div>
      </div>
    </section>

    <RealPeopleSection />

    <div class="bg-light bg-half-bottom">
      <div class="container">
        <div
          class="twentytwenty-box wow fadeInUp"
          data-wow-delay="0.2s"
          data-wow-duration="0.8s"
        >
          <TwentyTwenty
            :data="TwentyTwentyList"
            class="twentytwenty-container"
          />
          <RouterLink
            to="/about-us-2"
            class="btn btn-white rounded btn-sm position-absolute end-0 bottom-0 me-md-4 mb-md-4 me-2 mb-2"
            >View All</RouterLink
          >
        </div>
      </div>
    </div>

    <TestimonialSection :data="TestimonialMembers" />
  </main>
</template>
