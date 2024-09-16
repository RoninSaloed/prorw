<template>
  <Menu />
</template>

<script setup lang="ts">
import { useCheckDevice } from "./helpers/checkIsMobileDevice";
import Menu from "./components/menu/Menu.vue";
const { detectDevice } = useCheckDevice();
detectDevice();
</script>
