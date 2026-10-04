<script lang="ts" setup>
import { ref } from 'vue';

const open = ref(false);
const index = ref<number>(0);
defineProps<{
  options: any;
}>();
</script>

<template>
  <button
    type="button"
    tabindex="-1"
    class="btn dropdown-toggle form-control"
    data-bs-toggle="dropdown"
    role="combobox"
    aria-owns="bs-select-1"
    aria-haspopup="listbox"
    aria-expanded="false"
    title="Select Status"
    @click="open = !open"
  >
    <div class="filter-option">
      <div class="filter-option-inner">
        <div class="filter-option-inner-inner"><img :src="options[index].img" alt="" v-if="options[index].img" class="me-2"/>{{ options[index].lable }}</div>
      </div>
    </div>
  </button>

  <div :class="`dropdown-menu ${open ? 'show' : ''}`">
    <div class="inner show" role="listbox" id="bs-select-1" tabindex="-1" style="max-height: 250px; overflow-y: auto; min-height: auto" aria-activedescendant="bs-select-1-0">
      <ul class="dropdown-menu inner show" role="presentation" style="margin-top: 0px; margin-bottom: 0px">
        <li :class="`${index == ind ? 'selected active' : ''}`" v-for="({ lable, img }, ind) in options">
          <a @click="index = ind" role="option" :class="`${index == ind ? 'active selected' : ''}`" class="dropdown-item" id="bs-select-1-0" tabindex="0" aria-setsize="6" aria-posinset="1" aria-selected="true">
            <img :src="img" alt="" v-if="img" class="me-2"/>
            <span class="text">{{ lable }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>

</template>