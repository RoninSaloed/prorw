<template>
  <div class="lg:px-[50px] px-[10px]">
    <div class="md:text-[32px] mb-[50px] mt-[100px] text-base font-cormorant">
      {{ t("proposals.like") }}
    </div>
    <div
      class="flex md:text-base justify-center text-[11px] sm:pb-[100px] pb-[50px]"
    >
      <div class="mr-[20px]" v-if="!getIsMobile">
        <img
          src="../../assets/productImg/first.png"
          class="sm:w-[368px] sm:h-[429px] w-[145px] h-[170px]"
          alt=""
        />
        <div class="flex justify-between mt-[10px]">
          <div>{{ t("proposals.short") }}</div>
          <div>₴1 000</div>
        </div>
      </div>
      <div class="mr-[20px]">
        <img
          class="sm:w-[368px] sm:h-[429px] w-[145px] h-[170px]"
          src="../../assets/productImg/second.png"
          alt=""
        />
        <div class="flex justify-between mt-[10px]">
          <div>{{ t("proposals.long") }}</div>
          <div>₴1 000</div>
        </div>
      </div>

      <div>
        <img
          class="sm:w-[368px] sm:h-[429px] w-[145px] h-[170px]"
          src="../../assets/productImg/third.png"
          alt=""
        />
        <div class="flex justify-between mt-[10px]">
          <div>{{ t("proposals.crop") }}</div>
          <div>₴1 000</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useApplicationStore } from "../../stores/application.store";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const store = useApplicationStore();
const { getIsMobile } = storeToRefs(store);
</script>
