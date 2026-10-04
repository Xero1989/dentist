<script setup lang="ts">
import CallToAction from '@/components/CallToAction.vue';

</script>
<template>
<main class="page-content">
  <div class="dz-bnr-inr style-2 dz-bnr-inr-md dz-bnr-content">
    <div class="container">
      <div class="dz-bnr-inr-entry">
        <div class="dz-bnr-inr-flex">
          <div class="bnr-info">
            <h1 class="fw-semibold wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Contact Information</h1>
            <p class="wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">Thank you for visiting our website. We are here to assist you with any inquiries you may have.</p>
            <div class="info-widget style-16 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
              <div class="row g-xl-5 g-4">
                <div class="col-xl-6 col-lg-12 col-md-6">
                  <div class="icon-bx-wraper style-1 align-items-center">
                    <div class="icon-bx bg-primary">
                      <span class="icon-cell">
                        <i class="feather icon-clock"></i>
                      </span>
                    </div>
                    <div class="icon-content">
                      <h5 class="dz-title fw-semibold">Working Hours:</h5>
                      <p>Mon-Thu: 8:00am-5:00pm <br> Fri: 8:00am-1:00pm </p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-12 col-md-6">
                  <div class="icon-bx-wraper style-1 align-items-center">
                    <div class="icon-bx bg-secondary">
                      <span class="icon-cell">
                        <i class="feather icon-mail"></i>
                      </span>
                    </div>
                    <div class="icon-content">
                      <h5 class="dz-title fw-semibold">Office Address:</h5>
                      <p>764 15768 Delmer Shoals, <br> Eliasport, FL 04331-6195 </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href="tel:+11234567890" class="btn btn-xl btn-icon btn-primary btn-rounded btn-shadow mb-3 mb-sm-0 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
              <span class="left-icon">
                <i class="feather icon-phone-call"></i>
              </span> +1 123 456 7890 </a>
          </div>
          <div class="form-wrapper style-1 m-l40 wow fadeInUp" data-wow-delay="1.0s" data-wow-duration="0.8s">
            <div class="form-body bg-white">
              <div class="section-head style-1 m-b30">
                <h2 class="title">Ask a Question</h2>
                <p>If you have any questions, you can contact us. Please, fill out the form below.</p>
              </div>
              <form action="../assets/script/contact_smtp.php" class="dzForm row" method="POST">
                <input type="hidden" class="form-control" name="dzToDo" value="Contact">
                <input type="hidden" class="form-control" name="reCaptchaEnable" value="0">
                <div class="dzFormMsg"></div>
                <div class="col-sm-6 m-b30">
                  <div class="form-floating floating-underline">
                    <input name="dzFirstName" type="text" class="form-control" id="inputYourName2" placeholder="First Name">
                    <label for="inputYourName2">First Name</label>
                  </div>
                </div>
                <div class="col-sm-6 m-b30">
                  <div class="form-floating floating-underline">
                    <input name="dzLastName" type="text" class="form-control" id="inputLastName2" placeholder="Last Name">
                    <label for="inputLastName2">Last Name</label>
                  </div>
                </div>
                <div class="col-sm-6 m-b30">
                  <div class="form-floating floating-underline">
                    <input name="dzPhoneNumber" type="text" class="form-control dz-number" id="inputPhoneNumber2" placeholder="Phone Number">
                    <label for="inputPhoneNumber2">Phone Number</label>
                  </div>
                </div>
                <div class="col-sm-6 m-b30">
                  <div class="form-floating floating-underline">
                    <input name="dzEmail" type="email" class="form-control" id="inputYourEmail2" placeholder="Phone Number">
                    <label for="inputYourEmail2">Your Email</label>
                  </div>
                </div>
                <div class="col-sm-12 m-b30">
                  <div class="form-floating floating-underline">
                    <textarea name="dzMessage" class="form-control" id="inputMessage" rows="6" placeholder="Select Service"></textarea>
                    <label for="inputMessage">Message</label>
                  </div>
                </div>
                <div class="col-sm-12">
                  <button type="submit" name="submit" value="submit" class="btn btn-lg btn-icon btn-primary btn-shadow"> Submit Now <span class="right-icon">
                      <i class="feather icon-arrow-right"></i>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="item1">
      <img class="move-1" src="../assets/images/hero-banner/img2.webp" alt="">
    </div>
    <div class="item2">
      <img class="move-2" src="../assets/images/hero-banner/img4.webp" alt="">
    </div>
    <div class="item3">
      <img class="move-3" src="../assets/images/hero-banner/img3.webp" alt="">
    </div>
    <svg class="banner-shape" viewBox="0 0 1920 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1921 164.375C1734.2 -139.225 527.167 48.8754 -33 180.875H1921V164.375Z" fill="var(--bs-primary)"></path>
      <path d="M1921 164.375C1714.2 -59.2247 527.167 58.8754 -33 180.875H1921V164.375Z" fill="white"></path>
    </svg>
    <div class="banner-shape4"></div>
    <div class="banner-shape5"></div>
  </div>
  <section class="content-inner">
    <div class="container">
      <div class="row content-wrapper">
        <div class="col-xl-7 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
          <div class="map-wrapper style-3 me-xl-4">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28891.193971348785!2d75.8546432!3d25.1559936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1719221707984!5m2!1sen!2sin&zoomcontrol=false" width="600" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div class="item1 position-absolute">
              <div class="content-bx style-5 alert alert-dismissible fade show" role="alert">
                <div class="content-logo">
                  <img src="../assets/images/logo.svg" alt="">
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
                      <img src="../assets/images/country/united_states.webp" alt=""> United States
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
                  <img src="../assets/images/map.webp" alt="">
                </div>
              </div>
            </div>
            <div class="col-xl-12 col-lg-6 m-b15 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
              <div class="dz-img-box style-2">
                <div class="dz-content">
                  <div class="inner-content clearfix">
                    <h3 class="title m-b10">
                      <img src="../assets/images/country/canada.webp" alt=""> Canada
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
                  <img src="../assets/images/map.webp" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <CallToAction :title="'Want to schedule an appointment?'" :class="'content-wrapper style-20 clearfix'"/>
</main>
</template>