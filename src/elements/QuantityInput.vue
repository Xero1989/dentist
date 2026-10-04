<script setup lang="ts">
import { ref, type PropType } from 'vue';

const props = defineProps({
  value: {
    type: Number as PropType<number>,
    required: true,
  }
});

const value = ref(props.value);  // Initialize the value

// Function to increase the value
const increase = () => {
  if (value.value < 100) {  // Check max limit
    value.value++;
  }
};

// Function to decrease the value
const decrease = () => {
  if (value.value > 1) {  // Check min limit
    value.value--;
  }
};
</script>
<template>
<div class="input-group bootstrap-touchspin">
    <span class="input-group-addon bootstrap-touchspin-prefix" style="display: none;"></span>
    <input
      type="number"
      v-model="value" 
      class="quantity-input form-control"
      style="display: block;"
      min="1"
      max="100"
    />
    <span class="input-group-addon bootstrap-touchspin-postfix" style="display: none;"></span>
    <span class="input-group-btn-vertical">
      <button class="btn btn-default bootstrap-touchspin-up" type="button" @click="increase">
        <i class="fa-solid fa-plus"></i>
      </button>
      <button class="btn btn-default bootstrap-touchspin-down" type="button" @click="decrease">
        <i class="fa-solid fa-minus"></i>
      </button>
    </span>
  </div>
</template>

<style scoped>
/* Hide number input arrows */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;  /* Firefox */
}
</style>