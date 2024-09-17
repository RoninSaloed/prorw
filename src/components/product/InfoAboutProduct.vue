<template>
  <div class="text-left sm:w-[370px] w-[280px]">
    <div class="text-base flex my-12 z-10">
      <div class="opacity-50 mr-[9px]">Головна —</div>
      <div class="opacity-50 mr-[9px]">Жилети —</div>
      <div class="">Vest</div>
    </div>
    <div class="font-cormorant text-[32px] mt-[50px] mb-5">Vest</div>

    <div v-if="!getIsMobile" class="mb-5">
      {{
        `Перероблений декорований жилет. Класичний\n крій. Асиметричний декор -
      бісерна бахрома.\n Декоритивний рукав-крило з вінтажної тюлі.`
      }}
    </div>

    <div class="sm:w-[370px] w-[250px] h-[1px] bg-[#DDDDDD] mb-5"></div>

    <div class="mb-5">₴1 000</div>

    <div class="mb-5">
      <div class="mb-[5px]">Розмір:</div>
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
      <div class="mb-[5px]">Колір:</div>
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
    <button class="bg-dark px-[50px] py-[10px] text-white mb-5">
      Додати у кошик
    </button>
    <div class="font-light mb-5">SKU: V0423001</div>
    <div class="sm:w-[370px] w-[250px] h-[1px] bg-[#DDDDDD] smb-[30px]"></div>

    <div
      class="font-light font-cormorant mb-[10px] text-[32px] opacity-50 flex items-center cursor-pointer"
      @click="toggleDescription()"
    >
      Деталі
      <span class="ml-[10px]"
        ><plus-icon v-if="!isOpenDescription" /><dash-icon v-else
      /></span>
    </div>
    <div v-if="isOpenDescription" class="mb-[50px]">
      <ul class="font-light opacity-50 font-onest">
        <li
          class="relative pl-[10px] before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-1 before:h-1 before:bg-dark before:transform before:-translate-y-1/2"
        >
          65% Бавовна, 35% віскоза
        </li>
        <li
          class="relative pl-[10px] before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-1 before:h-1 before:bg-dark before:transform before:-translate-y-1/2"
        >
          Кожна сорочка унікальна
        </li>
        <li
          class="relative pl-[10px] before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-1 before:h-1 before:bg-dark before:transform before:-translate-y-1/2"
        >
          зроблено в Україні
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
