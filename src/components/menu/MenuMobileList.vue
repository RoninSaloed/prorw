<template>
  <div
    :class="{
      'fixed top-0 z-10   h-full w-full transform-gpu bg-slate-200 transition-all duration-150 ease-linear ': true,
      'right-full': !getIsSidebarOpen,
      'right-0 ': getIsSidebarOpen,
    }"
  >
    <div class="absolute right-3 top-1"><select-lang-btn /></div>

    <ul class="font-onest text-dark text-sm z-20 mt-10 ml-2">
      <li
        v-for="(item, idx) in firstPartMenuConfig"
        :key="idx"
        class="flex items-center pr-[40px] last:pr-0 cursor-pointer"
        @click="toggleActive(idx)"
      >
        <span class="mr-[5px]">{{ t(`menu.${item.title}`) }}</span>
        <component
          :is="item.icon"
          :class="{ 'rotate-180': activeIndex[idx] }"
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { firstPartMenuConfig } from "../../configs/menuConfig";
import SelectLangBtn from "./SelectLangBtn.vue";

const { t } = useI18n();

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
</script>
