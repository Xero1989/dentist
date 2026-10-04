<script setup lang="ts">
import { ref } from "vue";
import aboutImg15 from "@/assets/images/about/img15.webp";
import RealPeopleSection from "@/components/RealPeopleSection.vue";
import TeamSection1 from "@/components/TeamSection1.vue";
import { IMAGES } from "@/constent/Them";
import ClientSwiper from "@/components/ClientSwiper.vue";
import TestimonialSection1 from "@/components/TestimonialSection1.vue";

const TeamSectionData = ref({
  title: "Highly Qualified Team",
  class: "p-t50",
  description:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  list: [
    {
      image: IMAGES.teamSmall1,
      name: "Nashid Martines",
      postion: "Cardiac Surgery",
    },
    {
      image: IMAGES.teamSmall2,
      name: "Nashid Martines",
      postion: "Cardiac Surgery",
    },
    {
      image: IMAGES.teamSmall3,
      name: "Nashid Martines",
      postion: "Cardiac Surgery",
    },
    {
      image: IMAGES.teamSmall4,
      name: "Nashid Martines",
      postion: "Cardiac Surgery",
    },
    {
      image: IMAGES.teamSmall5,
      name: "Nashid Martines",
      postion: "Cardiac Surgery",
    },
    {
      image: IMAGES.teamSmall1,
      name: "Nashid Martines",
      postion: "Cardiac Surgery",
    },
    {
      image: IMAGES.teamSmall2,
      name: "Nashid Martines",
      postion: "Cardiac Surgery",
    },
    {
      image: IMAGES.teamSmall3,
      name: "Nashid Martines",
      postion: "Cardiac Surgery",
    },
  ],
});
const ClientlogoList = ref([
  IMAGES.logoM1,
  IMAGES.logoM2,
  IMAGES.logoM3,
  IMAGES.logoM4,
  IMAGES.logoM1,
  IMAGES.logoM2,
]);

const Testimonial = ref({
  title: "Have any questions?",
  description:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
});
</script>
<template>
  <main class="page-content">
    <div class="dz-bnr-inr style-2 dz-bnr-inr-md dz-bnr-detail">
      <div class="container">
        <div class="dz-bnr-inr-entry">
          <div class="dz-bnr-inr-flex">
            <div class="bnr-info">
              <h1
                class="wow fadeInUp"
                data-wow-delay="0.2s"
                data-wow-duration="0.8s"
              >
                Dental Implants
              </h1>
              <p
                class="wow fadeInUp"
                data-wow-delay="0.4s"
                data-wow-duration="0.8s"
              >
                For more than 30 years, dental implants have enhanced the lives
                of countless individuals. These implants create a strong
                foundation for replacement teeth that mimic the appearance,
                feel, and functionality of natural teeth. As a result, patients
                can laugh, speak, and smile with renewed confidence.
              </p>
              <div class="row media-wrapper" id="lightgallery">
                <div class="col-6">
                  <div
                    class="dz-media radius-md wow fadeInUp"
                    data-wow-delay="0.6s"
                    data-wow-duration="0.8s"
                  >
                    <a
                      href="../../assets/images/services/small/img1.webp"
                      data-src="../../assets/images/services/small/img1.webp"
                      class="lg-item"
                    >
                      <img
                        src="../../assets/images/services/small/img1.webp"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div class="col-6">
                  <div
                    class="dz-media radius-md wow fadeInUp"
                    data-wow-delay="0.8s"
                    data-wow-duration="0.8s"
                  >
                    <a
                      href="../../assets/images/services/small/img2.webp"
                      data-src="../../assets/images/services/small/img2.webp"
                      class="lg-item"
                    >
                      <img
                        src="../../assets/images/services/small/img2.webp"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="detail-media wow fadeInUp"
              data-wow-delay="1.0s"
              data-wow-duration="0.8s"
            >
              <div class="dz-media height-lg">
                <img
                  src="../../assets/images/services/large/img2.webp"
                  alt=""
                />
              </div>
              <div class="media-info">
                <div class="info-widget style-5">
                  <div class="widget-media text-primary">
                    <i class="feather icon-phone-call"></i>
                  </div>
                  <div class="widget-content">
                    <h6 class="title">Contact us?</h6>
                    <a href="tel:+11234567890" class="text-secondary"
                      >+1 123 456 7890</a
                    >
                  </div>
                </div>
                <RouterLink
                  to="/appointment"
                  class="btn btn-lg btn-icon btn-primary btn-shadow"
                >
                  <span class="w-100">Appointment</span>
                  <span class="right-icon">
                    <i class="feather icon-arrow-right"></i>
                  </span>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="item1">
        <img
          class="move-1"
          src="../../assets/images/hero-banner/img2.webp"
          alt=""
        />
      </div>
      <div class="item2">
        <img class="move-2" src="../../assets/images/banner/img1.webp" alt="" />
      </div>
      <div class="item3">
        <img class="move-3" src="../../assets/images/banner/img2.webp" alt="" />
      </div>
      <svg
        class="banner-shape"
        viewBox="0 0 1920 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1921 164.375C1734.2 -139.225 527.167 48.8754 -33 180.875H1921V164.375Z"
          fill="var(--bs-primary)"
        ></path>
        <path
          d="M1921 164.375C1714.2 -59.2247 527.167 58.8754 -33 180.875H1921V164.375Z"
          fill="white"
        ></path>
      </svg>
      <div class="banner-shape4"></div>
      <div class="banner-shape5"></div>
    </div>
    <section class="content-inner-2 clearfix">
      <div class="container">
        <div class="row align-items-center">
          <div
            class="col-lg-6 wow fadeInUp"
            data-wow-delay="0.2s"
            data-wow-duration="0.8s"
          >
            <div class="dz-media m-b30 me-xl-5">
              <img src="../../assets/images/services/small/img3.webp" alt="" />
            </div>
          </div>
          <div
            class="col-lg-6 wow fadeInUp"
            data-wow-delay="0.4s"
            data-wow-duration="0.8s"
          >
            <div class="section-head style-1 m-b30">
              <h2 class="title fw-semibold">
                What is Dental Implants Restoration?
              </h2>
              <p class="m-b30">
                A dental implant is designed to replace one or more teeth in
                your mouth. Typically made of titanium, implants are surgically
                inserted into the jawbone. Over several months, the implant
                fuses with the bone, becoming a solid and stable part of your
                smile. After the implant heals, we can place single crowns,
                bridges, or even full dentures over them.
              </p>
              <h3 class="font-28 m-b10">
                Why is Dental Implants Restoration needed?
              </h3>
              <p>
                Dental implant restoration is often necessary if you're missing
                one or more of your natural teeth. Missing teeth can be more
                than just a cosmetic issue; it can make eating, chewing, and
                even speaking difficult. Fortunately, dental implants can
                replace what you're missing, improving both your smile and your
                quality of life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="content-inner-2 clearfix">
      <div class="container">
        <div
          class="row content-bx style-9 g-0 wow fadeInUp"
          data-wow-delay="0.2s"
          data-wow-duration="0.8s"
          :style="{ backgroundImage: 'url(' + aboutImg15 + ')' }"
        >
          <div class="col-xl-7 col-lg-9">
            <h2 class="title m-b15">Benefits of Dental Implants</h2>
            <p>
              Dental implants work best for patients with solid, healthy bone in
              the area where the titanium posts will be placed. X-rays help us
              assess these areas and detect any signs of bone loss. If you have
              bone loss or low-lying sinuses, we may recommend bone grafting or
              a sinus lift to ensure successful implant placement. Implants can
              last for decades without showing signs of wear or damage.
            </p>
            <RouterLink
              to="/appointment"
              class="btn btn-lg btn-icon btn-primary m-t40"
            >
              Appointment
              <span class="right-icon">
                <i class="feather icon-arrow-right"></i>
              </span>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
    <section class="content-inner overflow-hidden">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div
              class="section-head style-1 wow fadeInUp"
              data-wow-delay="0.2s"
              data-wow-duration="0.8s"
            >
              <h2 class="title m-b10 fw-semibold">Dental Implant Process</h2>
              <p>
                The dental implant process involves several stages to ensure
                successful placement and integration of the implant:
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="timeline-wrapper style-1">
        <div class="container">
          <div class="timeline-inner">
            <div class="timeline-left">
              <div class="timeline-wrap">
                <div class="timeline-head">
                  <div class="timeline-number">1</div>
                  <span class="step">Step</span>
                </div>
                <div
                  class="timeline-info wow fadeInUp"
                  data-wow-delay="0.2s"
                  data-wow-duration="0.8s"
                >
                  <h3 class="title">Initial Consultation and Planning</h3>
                  <p>
                    A comprehensive examination, including X-rays and scans, is
                    conducted to assess dental health and create a detailed
                    treatment plan.
                  </p>
                </div>
              </div>
              <div class="timeline-wrap">
                <div class="timeline-head">
                  <div class="timeline-number">2</div>
                  <span class="step">Step</span>
                </div>
                <div
                  class="timeline-info wow fadeInUp"
                  data-wow-delay="0.4s"
                  data-wow-duration="0.8s"
                >
                  <h3 class="title">Implant And Placement</h3>
                  <p>
                    The dental implant, a titanium post, is surgically placed
                    into the jawbone to serve as an artificial root for the
                    replacement tooth.
                  </p>
                </div>
              </div>
            </div>
            <div class="timeline-right">
              <div class="timeline-wrap bottom">
                <div class="timeline-head">
                  <div class="timeline-number">3</div>
                  <span class="step">Step</span>
                </div>
                <div
                  class="timeline-info wow fadeInDown"
                  data-wow-delay="0.6s"
                  data-wow-duration="0.8s"
                >
                  <h3 class="title">Healing and Osseointegration</h3>
                  <p>
                    Over several months, the implant fuses with the jawbone,
                    providing a stable foundation for the replacement tooth.
                  </p>
                </div>
              </div>
              <div class="timeline-wrap bottom">
                <div class="timeline-head">
                  <div class="timeline-number">4</div>
                  <span class="step">Step</span>
                </div>
                <div
                  class="timeline-info wow fadeInDown"
                  data-wow-delay="0.8s"
                  data-wow-duration="0.8s"
                >
                  <h3 class="title">Abutment and Crown Placement</h3>
                  <p>
                    An abutment is attached to the implant, and a custom-made
                    crown is placed on the abutment, completing the restoration
                    with a natural-looking and functional tooth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <RealPeopleSection />

    <TeamSection1 :data="TeamSectionData" />

    <section class="content-wrapper style-22">
      <div class="container">
        <div class="row g-3 align-items-center">
          <div class="col-lg-5">
            <div
              class="section-head style-3 m-0 wow fadeInUp"
              data-wow-delay="0.2s"
              data-wow-duration="0.8s"
            >
              <h2 class="title fw-semibold m-b20">
                The pros of implant dentures
              </h2>
              <p class="m-b30">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
              <RouterLink
                to="/appointment"
                class="btn btn-lg btn-icon btn-primary"
              >
                Appointment
                <span class="right-icon">
                  <i class="feather icon-arrow-right"></i>
                </span>
              </RouterLink>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="content-info">
              <div
                class="accordion dz-accordion style-4 wow fadeInUp"
                data-wow-delay="0.4s"
                data-wow-duration="0.8s"
                id="accordionExample6"
              >
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne6"
                      aria-expanded="true"
                      aria-controls="collapseOne6"
                    >
                      Improved Stability and Comfort:
                    </button>
                  </h2>
                  <div
                    id="collapseOne6"
                    class="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample6"
                  >
                    <div class="accordion-body">
                      <p>
                        Implant dentures are securely anchored to the jawbone,
                        reducing the risk of slipping or shifting, which
                        enhances comfort and stability compared to traditional
                        dentures.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo6"
                      aria-expanded="false"
                      aria-controls="collapseTwo6"
                    >
                      Enhanced Chewing and Speaking Ability
                    </button>
                  </h2>
                  <div
                    id="collapseTwo6"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample6"
                  >
                    <div class="accordion-body">
                      <p>
                        Implant dentures are securely anchored to the jawbone,
                        reducing the risk of slipping or shifting, which
                        enhances comfort and stability compared to traditional
                        dentures.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree6"
                      aria-expanded="false"
                      aria-controls="collapseThree6"
                    >
                      Better aesthetics and higher self-confidence
                    </button>
                  </h2>
                  <div
                    id="collapseThree6"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample6"
                  >
                    <div class="accordion-body">
                      <p>
                        Implant dentures are securely anchored to the jawbone,
                        reducing the risk of slipping or shifting, which
                        enhances comfort and stability compared to traditional
                        dentures.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour6"
                      aria-expanded="false"
                      aria-controls="collapseFour6"
                    >
                      Long-Term Durability
                    </button>
                  </h2>
                  <div
                    id="collapseFour6"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample6"
                  >
                    <div class="accordion-body">
                      <p>
                        Implant dentures are securely anchored to the jawbone,
                        reducing the risk of slipping or shifting, which
                        enhances comfort and stability compared to traditional
                        dentures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Client Section  -->
    <ClientSwiper :title="'Our Accepted insurance'" :data="ClientlogoList" />

    <TestimonialSection1 :data="Testimonial" />

    <section class="content-inner-1 p-t0">
      <div class="container">
        <div
          class="content-bx style-7 wow fadeInUp"
          data-wow-delay="0.2s"
          data-wow-duration="0.8s"
        >
          <div class="clearfix">
            <h2 class="dz-title">Still have questions?</h2>
            <p class="m-b0">
              Can’t find the answer you’re looking for. Please chat to our
              friendly team.
            </p>
          </div>
          <div class="flex-btn">
            <RouterLink to="/contact-us" class="btn btn-primary btn-hover1"
              >Get In Touch</RouterLink
            >
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
