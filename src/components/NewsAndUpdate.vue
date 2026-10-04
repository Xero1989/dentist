<script setup lang="ts">
import IMAGES from '@/assets/images/background/bg6.webp';


</script>
<template>
    <section class="content-inner bg-light overlay-primary-light" :style="{ backgroundImage: 'url(' + IMAGES+ ')' }">
      <div class="container">
        <div class="section-head style-1 m-b30 row align-items-end">
          <div class="col-xl-7 col-md-9 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
            <h2 class="title m-b0 fw-semibold">News And Update </h2>
          </div>
          <div class="col-xl-5 col-md-3 text-lg-end d-none d-md-block wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
            <RouterLink to="/blog-grid" class="btn btn-icon btn-secondary"> View All <span class="right-icon">
                <i class="feather icon-arrow-right"></i>
              </span>
            </RouterLink>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-4 col-md-6 m-b30 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
            <div class="dz-card style-1">
              <div class="dz-media">
                <img src="../assets/images/blog/grid/pic1.webp" alt="">
              </div>
              <div class="dz-info">
                <h3 class="dz-title">
                  <RouterLink to="/blog-details">The Art of Managing Business and Patient Care</RouterLink>
                </h3>
                <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                <div class="dz-meta">
                  <ul>
                    <li class="post-date">17 May 2023</li>
                    <li class="post-author">By <a href="javascript:void(0);">Nashid Martines</a>
                    </li>
                  </ul>
                </div>
              </div>
              <RouterLink to="/blog-details" class="btn btn-square btn-secondary rounded-circle">
                <i class="feather icon-arrow-up-right"></i>
              </RouterLink>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 m-b30 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
            <div class="dz-card style-1">
              <div class="dz-media">
                <img src="../assets/images/blog/grid/pic2.webp" alt="">
              </div>
              <div class="dz-info">
                <h3 class="dz-title">
                 <RouterLink to="/blog-details">The Art of Managing Business and Patient Care</RouterLink>
                </h3>
                <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                <div class="dz-meta">
                  <ul>
                    <li class="post-date">17 May 2023</li>
                    <li class="post-author">By <a href="javascript:void(0);">Nashid Martines</a>
                    </li>
                  </ul>
                </div>
              </div>
              <RouterLink to="/blog-details" class="btn btn-square btn-secondary rounded-circle">
                <i class="feather icon-arrow-up-right"></i>
              </RouterLink>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 m-b30 wow fadeInUp" data-wow-delay="1.0s" data-wow-duration="0.8s">
            <div class="dz-card style-1">
              <div class="dz-media">
                <img src="../assets/images/blog/grid/pic3.webp" alt="">
              </div>
              <div class="dz-info">
                <h3 class="dz-title">
                  <RouterLink to="/blog-details">The Art of Managing Business and Patient Care</RouterLink>
                </h3>
                <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                <div class="dz-meta">
                  <ul>
                    <li class="post-date">17 May 2023</li>
                    <li class="post-author">By <a href="javascript:void(0);">Nashid Martines</a>
                    </li>
                  </ul>
                </div>
              </div>
              <RouterLink to="/blog-details" class="btn btn-square btn-secondary rounded-circle">
                <i class="feather icon-arrow-up-right"></i>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>