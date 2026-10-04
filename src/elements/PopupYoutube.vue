<script setup lang="ts">
import { ref, defineProps, type PropType } from 'vue';
import ModelVideo from './ModelVideo.vue';
import { storeToRefs } from 'pinia';
import { useStore } from '@/stores/counter';

const props = defineProps({
    text: {
        type: String as PropType<string>,
        required: true,
    },
    videoId: {
        type: String as PropType<string>,
        required: true,
    }
});

const {opneModel, opneModelYoutubeID}=storeToRefs(useStore())

const openVideo = (key:any) => {
  opneModel.value = true;
  opneModelYoutubeID.value = key;
};

// Define the text that you want to display with rotation
const rotatedText = ref(props.text.split(''));
</script>

<template>
  <a class="popup-youtube" href="Javascript:void(0)" @click="openVideo(props.videoId)">
    <div class="word-rotate-box">
        <i class="fa-solid fa-play"></i>
      <span 
        v-for="(char, index) in rotatedText" 
        :key="index" 
        class="text__char" 
        :style="{ '--char-rotate': `${index * 15}deg` }">
        {{ char }}
      </span>
    </div>
  </a>
</template>
