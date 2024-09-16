<template>
  <button
    @click="toggleBurger()"
    class="flex flex-col items-center justify-center z-50"
  >
    <span
      :class="{
        'block md:h-[2px] h-[1px] w-3 md:w-6 rounded-sm bg-black transition-all duration-300 ease-out': true,
        'md:translate-y-0.5 translate-y-0.5 rotate-45': isSideBarOpen,
        'md:-translate-y-1.5 -translate-y-1': !isSideBarOpen,
      }"
    >
    </span>
    <span
      :class="{
        'block md:h-[2px] h-[1px] w-3  md:w-6 rounded-sm bg-black  transition-all duration-300 ease-out ': true,
        'opacity-0': isSideBarOpen,
        'opacity-100': !isSideBarOpen,
      }"
    >
    </span>
    <span
      :class="{
        'block md:h-[2px] h-[1px] w-3 md:w-6 rounded-sm bg-black  transition-all duration-300 ease-out ': true,
        'md:-translate-y-0.5 -translate-y-0.7 -rotate-45': isSideBarOpen,
        'md:translate-y-1.5 translate-y-1': !isSideBarOpen,
      }"
    >
    </span>
  </button>
</template>

<script setup lang="ts">
export interface Props {
  isMobile: boolean;
  isSideBarOpen: boolean;
}
defineProps<Props>();

const emit = defineEmits<{
  (event: "toggle-burger"): void;
}>();

const toggleBurger = (): void => {
  emit("toggle-burger");
};
</script>
