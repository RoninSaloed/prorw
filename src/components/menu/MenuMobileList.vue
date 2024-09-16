<template>
  <div
    :class="{
      'fixed top-0 z-0  h-lvh w-full transform-gpu bg-slate-200 transition-all duration-150 ease-linear ': true,
      'right-full': !getIsSidebarOpen,
      'right-0 ': getIsSidebarOpen,
    }"
  >
    <ul class="font-onest text-black text-sm z-20 mt-10 ml-2">
      <li
        v-for="(item, idx) in firstPartMenuConfig"
        :key="idx"
        class="flex items-center pr-[40px] last:pr-0 cursor-pointer"
        @click="toggleActive(idx)"
      >
        <span class="mr-[5px]">{{ item.title }}</span>
        <component
          :is="item.icon"
          :class="{ 'rotate-180': activeIndex[idx] }"
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useApplicationStore } from "../../stores/application.store";
import { firstPartMenuConfig } from "../../configs/menuConfig";
type Props = {
  getIsSidebarOpen: boolean;
  activeIndex: Record<number, boolean>;
};
defineProps<Props>();

const emit = defineEmits<{
  (event: "toggle-active", idx: number): void;
}>();

const toggleActive = (idx: number): void => {
  emit("toggle-active", idx);
};
const store = useApplicationStore();
</script>
