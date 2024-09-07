<script setup>
  import { RouterView } from 'vue-router';
  import TheHeader from './components/TheHeader/TheHeader.vue';
  import TheFooter from './components/TheFooter/TheFooter.vue';

</script>

<template>
  <TheHeader />
  <RouterView />
  <TheFooter />
</template>