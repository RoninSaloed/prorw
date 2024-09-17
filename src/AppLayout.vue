<template>
  <div class="max-w-[1240px] m-auto">
    <Menu /> <product /> <proposals /> <Footer />
  </div>
</template>

<script setup lang="ts">
import { useCheckDevice } from "./helpers/CheckMobileDevice";
import Menu from "./components/menu/Menu.vue";
import Product from "./components/product/Product.vue";
import Proposals from "./components/proposals/Proposals.vue";
import Footer from "./components/footer/Footer.vue";
const { detectDevice } = useCheckDevice();
detectDevice();
</script>
