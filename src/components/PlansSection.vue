<script setup lang="ts">
import { IMAGES } from '@/constent/Them';
import { ref } from 'vue';

const isMonthly = ref(true);

interface ContactDetail {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  image: string;
  services: string | string[];
}

const props = defineProps<{
    data: ContactDetail[]; 
}>();

// Method to toggle between monthly and yearly pricing
const togglePrice = (period: 'monthly' | 'yearly') => {
  isMonthly.value = period === 'monthly';
};
</script>

<template>
  <section class="content-inner">
    <div class="container">
      <div class="section-head style-1 m-b30 text-center wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
        <h2 class="title">Flexible Pricing Plans</h2>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      </div>

      <div class="toggle-tabs toggle-tabs1 wow fadeInUp" :class="isMonthly ? 'monthly' : 'yearly'" data-wow-delay="0.4s" data-wow-duration="0.8s">
        <span class="monthly" @click="togglePrice('monthly')">Monthly</span>
        <span class="yearly" @click="togglePrice('yearly')">Yearly</span>
      </div>

      <div class="row">
        <div 
          v-for="(plan, index) in data " 
          :key="index" 
          class="col-xl-6 m-b30 wow fadeInUp" 
          :data-wow-delay="(index + 1) * 0.2 + 's'" 
          data-wow-duration="0.8s"
        >
          <div class="pricingtable-wrapper style-2">
            <div class="pricingtable-inner">
              <div class="dz-media">
                <img :src="plan.image" :alt="`${plan.name} Plan`">
              </div>
              <div class="pricingtable-info">
                <div v-if="isMonthly" class="pricingtable-price month">
                  <h2 class="pricingtable-bx">${{ plan.monthlyPrice }}<small>/ Monthly</small></h2>
                </div>
                <div v-else class="pricingtable-price year">
                  <h2 class="pricingtable-bx">${{ plan.yearlyPrice }}<small>/ Yearly</small></h2>
                </div>
                <div class="pricingtable-title">
                  <h3 class="title">{{ plan.name }}</h3>
                </div>
                <div class="pricingtable-list">
                  <ul class="pricingtable-features">
                    <li v-for="(service, serviceIndex) in plan.services" :key="serviceIndex">{{ service }}</li>
                  </ul>
                </div>
                <div class="pricingtable-button">
                 <RouterLink to="/pricing-table" class="btn btn-secondary w-100 btn-hover1">
                    <span>Choose Plans</span>
                  </RouterLink>
                </div>
              </div>
            </div>
            <span class="vertical-text">{{ plan.name.toUpperCase() }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
