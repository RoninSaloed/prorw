<template>
  <div
    class="flex items-center justify-between md:px-[30px] px-[10px] py-2 md:py-0"
  >
    <ul v-if="!getIsMobile" class="font-onest text-dark text-sm flex">
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
    <burger-btn
      v-else
      :is-mobile="getIsMobile"
      :is-side-bar-open="isSideBarOpen"
      @toggle-burger="sidebarToggle()"
    />

    <p
      class="font-cormorant md:text-[40px] text-[15px] uppercase text-dark tracking-widest font-normal"
    >
      LIMARENKO
    </p>
    <ul class="font-onest text-dark text-sm flex cursor-pointer">
      <li class="md:mr-[40px] mr-0">
        <select-lang-btn v-if="!getIsMobile" />
      </li>
      <li>
        <span class="flex items-center md:text-[14px] text-[11px]">{{
          t(`menu.cart`)
        }}</span>
      </li>
    </ul>
  </div>
  <div></div>
  <menu-mobile-list
    :active-index="activeIndex"
    :get-is-sidebar-open="isSideBarOpen"
    @toggle-active="toggleActive"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { firstPartMenuConfig } from "../../configs/menuConfig";
import { useApplicationStore } from "../../stores/application.store";
import { storeToRefs } from "pinia";
import BurgerBtn from "./BurgerBtn.vue";
import MenuMobileList from "./MenuMobileList.vue";
import { useI18n } from "vue-i18n";
import SelectLangBtn from "./SelectLangBtn.vue";
const { t } = useI18n();

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
