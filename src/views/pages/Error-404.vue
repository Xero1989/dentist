<script setup lang="ts">
import Banner from '@/elements/Banner.vue';
</script>
<template>
    <main class="page-content">
        <Banner :pageTitle="`Error 404`"/>
        <section class="error-page style-2 overflow-hidden content-inner-1">
			<div class="container">
				<div class="row align-items-center justify-content-center">
					<div class="col-md-7 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
						<div class="dz-error-media">
							<img src="../../assets/images/error.webp" alt="">
						</div>
					</div>
					<div class="col-md-5 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
						<div class="inner-content">
							<h2 class="dz-error">Oops!</h2>
							<p class="text">We couldn’t find the page you were looking for</p>
                            <RouterLink to="/index" class="btn btn-primary btn-hover1">Go back</RouterLink>
						</div>
					</div>
				</div>
			</div>
		</section>
    </main>
</template>