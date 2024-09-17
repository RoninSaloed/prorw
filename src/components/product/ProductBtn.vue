<template>
  <button
    @click="selectOption(title)"
    :class="{
      'sm:text-base text-[11px] border-[0.5px]  border-dark px-[10px] py-[2px]': true,
      'bg-slate-400': active,
    }"
  >
    {{ title }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  active: boolean;
}
defineProps<Props>();

const emit = defineEmits<{
  (event: "select-option", optionTitle: string): void;
}>();

const selectOption = (optionTitle: string) => {
  emit("select-option", optionTitle);
};
</script>
