<template>
  <footer class="mb-[50px]">
    <div class="w-full h-[1px] bg-[#DDDDDD] sm:mb-5 mb-[10px]"></div>
    <div
      class="sm:flex block items-center sm:justify-around justify-center sm:text-left text-center w-full"
    >
      <p
        class="font-cormorant md:text-[40px] text-[15px] uppercase text-dark tracking-widest font-normal sm:mb-0 mb-[10px]"
      >
        LIMARENKO
      </p>

      <ul class="sm:text-sm text-[11px]">
        <li class="sm:mb-5 mb-[10px]">{{ t("footer.delivery") }}</li>
        <li class="sm:mb-5 mb-[10px]">{{ t("footer.privacy") }}</li>
        <li class="sm:mb-0 mb-[20px]">{{ t("footer.refund") }}</li>
      </ul>
      <ul class="sm:text-sm text-[11px]">
        <li class="sm:mb-5 mb-[10px]">Instagram</li>
        <li>limarenko@gmail.com</li>
      </ul>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
