<template>
  <div class="text-left sm:w-[370px] w-[280px] pr-2">
    <div class="text-base flex my-12 z-10">
      <div class="opacity-50 mr-[9px]">{{ t("product.home") }} —</div>
      <div class="opacity-50 mr-[9px]">{{ t("product.waistcoats") }} —</div>
      <div class="">Vest</div>
    </div>
    <div class="font-cormorant text-[32px] mt-[50px] mb-5">Vest</div>

    <div v-if="!getIsMobile" class="mb-5 sm:text-base text-[11px]">
      {{ t("product.product_info") }}
    </div>

    <div class="sm:w-[370px] w-[250px] h-[1px] bg-[#DDDDDD] mb-5"></div>

    <div class="mb-5 sm:text-base text-[11px]">₴1 000</div>

    <div class="mb-5">
      <div class="mb-[5px] sm:text-base text-[11px]">
        {{ t("product.size") }}
      </div>
      <ul class="flex">
        <li
          v-for="(item, idx) of sizesEnum"
          :key="idx"
          class="md:mr-5 last:mr-0"
        >
          <product-btn
            :title="item"
            :active="activeFiltersSize[item]"
            @select-option="toggleActiveSize(item)"
          />
        </li>
      </ul>
    </div>
    <div class="mb-5">
      <div class="mb-[5px] sm:text-base text-[11px]">
        {{ t("product.color") }}
      </div>
      <ul class="flex">
        <li
          v-for="(item, idx) of colorsEnum"
          :key="idx"
          class="md:mr-5 last:mr-0"
        >
          <product-btn
            :title="item"
            :active="activeFiltersColor[item]"
            @select-option="toggleActiveColor(item)"
          />
        </li>
      </ul>
    </div>
    <button
      class="bg-dark px-[50px] py-[10px] text-white mb-5 sm:text-base text-[11px]"
    >
      {{ t("product.add_cart") }}
    </button>
    <div class="font-light mb-5 sm:text-base text-[11px]">SKU: V0423001</div>
    <div
      class="sm:w-[370px] w-[250px] h-[1px] bg-light sm:mb-[30px] mb-[10px]"
    ></div>

    <div
      class="font-light font-cormorant mb-[10px] sm:text-[32px] text-base opacity-50 flex items-center cursor-pointer"
      @click="toggleDescription()"
    >
      {{ t("product.details") }}
      <span class="ml-[10px]"
        ><plus-icon v-if="!isOpenDescription" /><dash-icon v-else
      /></span>
    </div>
    <div v-if="isOpenDescription" class="mb-[50px]">
      <ul class="font-light opacity-50 font-onest sm:text-[16px] text-[11px]">
        <li
          class="relative pl-[10px] before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-1 before:h-1 before:bg-dark before:transform before:-translate-y-1/2"
        >
          {{ t("product.param") }}
        </li>
        <li
          class="relative pl-[10px] before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-1 before:h-1 before:bg-dark before:transform before:-translate-y-1/2"
        >
          {{ t("product.unique") }}
        </li>
        <li
          class="relative pl-[10px] before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-1 before:h-1 before:bg-dark before:transform before:-translate-y-1/2"
        >
          {{ t("product.made") }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import productBtn from "./ProductBtn.vue";
import { sizesEnum, colorsEnum } from "../../configs/productConfig";
import { ref } from "vue";
import PlusIcon from "../../assets/icons/PlusIcon.vue";
import DashIcon from "../../assets/icons/DashIcon.vue";
import { useApplicationStore } from "../../stores/application.store";
import { storeToRefs } from "pinia";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const store = useApplicationStore();
const { getIsMobile } = storeToRefs(store);

const activeFiltersSize = ref<Record<string, boolean>>({});
const activeFiltersColor = ref<Record<string, boolean>>({});
const isOpenDescription = ref<boolean>();
const toggleActiveSize = (optionTitle: string) => {
  Object.keys(activeFiltersSize.value).forEach((key) => {
    activeFiltersSize.value[key] = false;
  });

  activeFiltersSize.value[optionTitle] = true;
};

const toggleActiveColor = (optionTitle: string) => {
  Object.keys(activeFiltersColor.value).forEach((key) => {
    activeFiltersColor.value[key] = false;
  });

  activeFiltersColor.value[optionTitle] = true;
};

const toggleDescription = () => {
  isOpenDescription.value = !isOpenDescription.value;
};
</script>
