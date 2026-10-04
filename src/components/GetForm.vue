<script setup lang="ts">
import  IMAGES  from '@/assets/images/background/bg2.png';
import type { PropType } from 'vue';

const props = defineProps({
    menClass: {
    type: String as PropType<string>,
    required: false,
  },
});
</script>
<template>

<section :class="`${menClass?menClass:'content-inner'}`">
	<div class="container">
		<div class="row">
			<div class="col-xl-7 col-lg-6 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
				<div class="map-wrapper style-1">
					<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28891.193971348785!2d75.8546432!3d25.1559936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1719221707984!5m2!1sen!2sin&zoomcontrol=false" width="600" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
					
					<div class="item1">
						<div class="info-widget style-16">
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
											<p>Mon-Thu: 8:00am-5:00pm<br> Fri: 8:00am-1:00pm</p>
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
											<p>764 15768 Delmer Shoals, <br> Eliasport, FL 04331-6195</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xl-5 col-lg-6 m-b30 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
				<div class="form-wrapper style-1 m-l40">
					<div class="form-body bg-secondary background-blend-burn" :style="{ backgroundImage: 'url(' + IMAGES+ ')' }" style=" background-size: cover;  background-position: bottom right;">
						<div class="section-head style-1 m-b30">
							<h2 class="title text-white">Get in Touch <br> With us</h2>
						</div>
						<form action="../assets/script/contact_smtp.php" class="dzForm row" method="POST">
							<input type="hidden" class="form-control" name="dzToDo" value="Contact">
							<input type="hidden" class="form-control" name="reCaptchaEnable" value="0">
							<div class="dzFormMsg"></div>
							<div class="col-sm-6 m-b30">
								<div class="form-floating floating-underline input-light">
									<input name="dzFirstName" type="text" class="form-control" id="inputYourName2" placeholder="First Name">
									<label for="inputYourName2">First Name</label>
								</div>
							</div>
							<div class="col-sm-6 m-b30">
								<div class="form-floating floating-underline input-light">
									<input name="dzLastName" type="text" class="form-control" id="inputLastName2" placeholder="Last Name">
									<label for="inputLastName2">Last Name</label>
								</div>
							</div>
							<div class="col-sm-6 m-b30">
								<div class="form-floating floating-underline input-light">
									<input name="dzPhoneNumber" type="text" class="form-control dz-number" id="inputPhoneNumber2" placeholder="Phone Number">
									<label for="inputPhoneNumber2">Phone Number</label>
								</div>
							</div>
							<div class="col-sm-6 m-b30">
								<div class="form-floating floating-underline input-light">
									<input name="dzEmail" type="email" class="form-control" id="inputYourEmail2" placeholder="Phone Number">
									<label for="inputYourEmail2">Your Email</label>
								</div>
							</div>
							<div class="col-sm-12 m-b30">
								<div class="form-floating floating-underline input-light">
									<textarea name="dzMessage" class="form-control" id="inputMessage" rows="6" placeholder="Select Service"></textarea>
									<label for="inputMessage">Message</label>
								</div>
							</div>
							<div class="col-sm-12">
								<button type="submit" name="submit" value="submit" class="btn btn-lg btn-icon btn-white btn-shadow">
									Appointment <span class="right-icon"><i class="feather icon-arrow-right"></i></span>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>


</template>