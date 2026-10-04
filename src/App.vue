<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { RouterView } from 'vue-router'
import Header from './layouts/Header.vue';
import Footer from './layouts/Footer.vue';
import { storeToRefs } from 'pinia';
import { useStore } from './stores/counter';
import ModelVideo from './elements/ModelVideo.vue';


// Reactive state to control page Loader visibility---------
const isLoading = ref(true);
const preloaderStyle = ref({
  opacity: 1,
  transition: 'opacity 0.5s',
});
onMounted(() => {
  setTimeout(() => {
    preloaderStyle.value.opacity = 0;
    setTimeout(() => {
      isLoading.value = false;
    }, 500);
  }, 1500);
  window.addEventListener('scroll', handleScroll);
});

// Function to handle the scroll-to-top action------------
const showScrollTop = ref(false);
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
const handleScroll = () => {
  if (window.scrollY > 500) {
    showScrollTop.value = true;
  } else {
    showScrollTop.value = false;
  }
};
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

const {opneModel, opneModelYoutubeID}=storeToRefs(useStore())

const closeModel = () => {
  opneModel.value = false;
};


</script>

<template>
  <div class="page-wraper">
    <div  v-if="isLoading" class="dz-preloader-2" id="dzPreloader" :style="preloaderStyle">
      <div class="loader">Loading ...</div>
    </div>
    <component :is="$route.meta.layout">
      <Header />
      
      <RouterView />

      <Footer />
    </component>
    <button :class="{'scroltop': true, 'show': showScrollTop}" type="button" @click="scrollToTop"><i class="fas fa-arrow-up"></i></button> 
    <ModelVideo :isClose="closeModel" :isVideoModalOpen="opneModel" :videoId="opneModelYoutubeID" />
  </div>
</template>
