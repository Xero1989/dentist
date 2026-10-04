<script setup lang="ts">
import { ImgComparisonSlider } from '@img-comparison-slider/vue';

 interface type{
    before:string;
    after:string;
 }
 const props = defineProps<{
  data: type[]; 
}>();
</script>

<template>
    <template v-for="(item, index) in data" :key="index">
        <ImgComparisonSlider class="twentytwenty-sm w-100">
            <img slot="first" :src="item.before" alt="" class="w-100">
            <img slot="second" :src="item.after" alt="" class="w-100">
        </ImgComparisonSlider>
    </template>
</template>

<style scoped>

.twentytwenty-box {
    position: relative;
    border-radius: 40px;
    overflow: hidden;
}

.twentytwenty-box .twentytwenty-sm::after {
    content: "AFTER" !important;
    right: 30px;
    left: auto !important;
}

.twentytwenty-box .twentytwenty-sm::before, .twentytwenty-box .twentytwenty-sm::after{
    content: "BEFORE";
    position: absolute;
    top: 50%;
    left: 30px;
    z-index: 99;
    font-size: 18px;
    height: 105px;
    width: 45px;
    padding: 34px 8px;
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
    border-radius: 8px;
    writing-mode: tb-rl;
    transform: translateY(-50%) rotate(180deg);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1px;
}

</style>