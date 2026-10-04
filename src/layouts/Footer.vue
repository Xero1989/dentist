<script setup lang="ts">
import { ref } from 'vue';
import bgimg from '@/assets/images/background/bg5.webp';
// Reactive variable for the current year
const currentYear = ref(new Date().getFullYear());
</script>

<template>
<!-- Footer -->
<footer class="site-footer style-1 footer-dark" :style="{ backgroundImage: `url(${bgimg})` }">
		<!-- Footer Top -->
		<div class="footer-top">
			<div class="container">
				<div class="row">
					<div class="col-xl-3 col-sm-12 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
						<div class="widget widget_about me-2">
							<div class="footer-logo logo-white">
                <RouterLink to="/index"><img src="../assets/images/logo-white.svg" alt=""></RouterLink> 
							</div>
							<p><span class="text-white">ClinicMaster</span> Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit, Sed Diam Nonummy Nibh.</p>
							
							<div class="widget-rating2">
								<img src="../assets/images/google.svg" alt="">
								<div class="clearfix">
									<div class="d-flex">
										<ul class="star-list">
											<li><i class="fa fa-star"></i></li>
											<li><i class="fa fa-star"></i></li>
											<li><i class="fa fa-star"></i></li>
											<li><i class="fa fa-star"></i></li>
											<li><i class="fa fa-star"></i></li>
										</ul>
										<span class="rating ms-1">(4.8)</span>
									</div>									
									<span class="text">12k+ ratings on google</span>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-2 col-md-3 col-6 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
						<div class="widget widget_services">
							<h2 class="footer-title">Our Services </h2>
							<ul class="list-hover1">
								<li><a href="javascript:void(0);"><span>Emergency Care</span></a></li>
								<li><a href="javascript:void(0);"><span>Operation Theater</span></a></li>
								<li><a href="javascript:void(0);"><span>Medical Checkup</span></a></li>
								<li><a href="javascript:void(0);"><span>Diagnostic Center</span></a></li>
								<li><a href="javascript:void(0);"><span>Outdoor Checkup</span></a></li>
							</ul>   
						</div>
					</div>
					<div class="col-xl-2 col-md-3 col-6 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
						<div class="widget widget_services">
							<h2 class="footer-title">Useful Links</h2>
							<ul class="list-hover1">
								<li><a href="javascript:void(0);"><span>Privacy Policy</span></a></li>
								<li><a href="javascript:void(0);"><span>Terms & Conditions</span></a></li>
								<li><a href="javascript:void(0);"><span>Contact Us</span></a></li>
								<li><a href="javascript:void(0);"><span>Latest News</span></a></li>
								<li><a href="javascript:void(0);"><span>Our Sitemap</span></a></li>
							</ul>   
						</div>
					</div>
					<div class="col-xl-2 col-md-3 col-6 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
						<div class="widget widget_services">
							<h2 class="footer-title">Our Stores</h2>
							<ul class="list-hover1">
								<li><a href="javascript:void(0);"><span>New York</span></a></li>
								<li><a href="javascript:void(0);"><span>London SF</span></a></li>
								<li><a href="javascript:void(0);"><span>Edinburgh</span></a></li>
								<li><a href="javascript:void(0);"><span>Los Angeles</span></a></li>
								<li><a href="javascript:void(0);"><span>Las Vegas</span></a></li>
							</ul>
						</div>
					</div>
					<div class="col-xl-2 col-md-3 col-6 wow fadeInUp" data-wow-delay="1.0s" data-wow-duration="0.8s">
						<div class="widget widget_services">
							<h2 class="footer-title">Quick Links</h2>
							<ul class="list-hover1">
								<li><a href="javascript:void(0);"><span>About Us</span></a></li>
								<li><a href="javascript:void(0);"><span>Our Services</span></a></li>
								<li><a href="javascript:void(0);"><span>Our Team</span></a></li>
								<li><a href="javascript:void(0);"><span>Appointments</span></a></li>
								<li><a href="javascript:void(0);"><span>Contact Us</span></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Footer Top End -->
		
		<!-- Footer Top -->
		<div class="footer-middle">
			<div class="container">
				<div class="fm-inner">
					<div class="row align-items-center g-lg-5 g-4">
						<div class="col-lg-6 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
							<h2 class="title">Important Updates Waiting for you</h2>
							<p>Get our latest and best contents right into your inbox</p>
						</div>
						<div class="col-lg-6 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
							<form class="dzSubscribe style-1" action="../assets/script/mailchimp.php" method="post">
								<div class="dzSubscribeMsg"></div>
								<div class="form-group">
									<div class="input-group mb-0">
										<input name="dzEmail" type="email" class="form-control" placeholder="Your Email Address">
										<div class="input-group-addon">
											<button name="submit" value="Submit" type="submit" class="btn btn-secondary btn-hover1">
												<span class="btn-text">Subscribe Now</span>
												<span class="btn-icon">
													<i class="fa-solid fa-paper-plane"></i>
												</span>
											</button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<!-- Footer Bottom -->
		<div class="footer-bottom">
			<div class="container">
				<div class="fb-inner">
					<div class="row">
						<div class="col-lg-6 col-md-12 text-start"> 
							<p class="copyright-text">© <span class="current-year">{{ currentYear }}</span> <a href="https://themeforest.net/user/dexignzone" target="_blank">DexignZone</a> Theme. All Rights Reserved.</p>
						</div>
						<div class="col-lg-6 col-md-12 text-end"> 
							<ul class="nav-inline">
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
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Footer Bottom End -->
	</footer>
<!-- Footer End -->
</template>