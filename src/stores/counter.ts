import { defineStore } from 'pinia'
import { ref } from 'vue'
const opneModel = ref(false);
const opneModelYoutubeID = ref(String);
export const useStore = defineStore('storeId', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
     opneModel,
     opneModelYoutubeID
    }
  },
})