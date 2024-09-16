import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useApplicationStore = defineStore("application", () => {
  const isMobile = ref<boolean>(false);

  const setIsMobile = (value: boolean) => {
    console.log(value, "test");
    isMobile.value = value;
  };

  const getIsMobile = computed<boolean>(() => {
    console.log(isMobile.value, "comp");

    return isMobile.value;
  });

  return {
    setIsMobile,
    getIsMobile,
  };
});
