<template>
  <button class="relative" @click="toggleDropdown()">{{ selectedLang }}</button>
  <ul v-show="isDropdownOpen" class="absolute md:top-12">
    <li
      v-for="(item, idx) of langOptions"
      :key="idx"
      @click="selectOption(item.title)"
    >
      {{ item.title }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from "vue";
import { Lang, LANG_STORAGE } from "../../configs/menuConfig";
import { useI18n } from "vue-i18n";
import { langTypes } from "../../types/menuTypes";

const { locale } = useI18n();

const isDropdownOpen = ref<boolean>(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const selectedLang = ref<Lang>(locale.value as Lang);

const selectOption = (lang: Lang) => {
  localStorage.setItem(LANG_STORAGE, lang);
  locale.value = lang;
  selectedLang.value = lang;
};

const langOptions = computed<Array<langTypes<Lang>>>(() => {
  return Object.values(Lang)
    .filter((lang) => lang !== selectedLang.value)
    .map((lang) => {
      return {
        title: lang,
      };
    });
});

watchEffect(() => {
  console.log(locale.value);
});
</script>
