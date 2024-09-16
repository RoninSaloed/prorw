<template>
  <div
    class="flex items-center justify-between md:px-[30px] px-[10px] py-2 md:py-0"
  >
    <ul v-if="!getIsMobile" class="font-onest text-black text-sm flex">
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
    <burger-btn
      v-else
      :is-mobile="getIsMobile"
      :is-side-bar-open="isSideBarOpen"
      @toggle-burger="sidebarToggle()"
    />

    <p
      class="font-cormorant md:text-[40px] text-[15px] uppercase text-black tracking-widest font-normal"
    >
      LIMARENKO
    </p>
    <ul class="font-onest text-black text-sm flex cursor-pointer">
      <li
        v-for="(item, idx) in secondPartMenuConfig"
        :key="idx"
        @click="toggleActive(idx)"
        class="md:mr-[40px] mr-0 last:mr-0"
      >
        <span
          v-if="!(getIsMobile && item.title === 'UA/UAH')"
          class="flex items-center md:text-[14px] text-[11px]"
          >{{ item.title }}</span
        >
      </li>
    </ul>
  </div>
  <menu-mobile-list
    :active-index="activeIndex"
    :get-is-sidebar-open="isSideBarOpen"
    @toggle-active="toggleActive"
  />
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import {
  firstPartMenuConfig,
  secondPartMenuConfig,
} from "../../configs/menuConfig";
import { useApplicationStore } from "../../stores/application.store";
import { storeToRefs } from "pinia";
import BurgerBtn from "./BurgerBtn.vue";
import MenuMobileList from "./MenuMobileList.vue";
const store = useApplicationStore();
const { getIsMobile } = storeToRefs(store);

const activeIndex = ref<Record<number, boolean>>({});
const isSideBarOpen = ref<boolean>(false);

const sidebarToggle = () => {
  isSideBarOpen.value = !isSideBarOpen.value;
};

const toggleActive = (index: number) => {
  activeIndex.value[index] = !activeIndex.value[index];
};
</script>
