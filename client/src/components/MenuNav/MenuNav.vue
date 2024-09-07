<script setup>
  import './menu-nav.scss';

 defineProps({
    navItems: {
      type: Object,
      default: () => {}
    }
  }); 


</script>

<template>
  <div class="menu-nav__container container py-5">
    <ul class="menu-nav d-flex justify-content-between text-uppercase">
      <li class="menu-nav__item" v-for="item in navItems" :key="item.id">
        <a :href="`#page-section-${item.slug}`" class="menu-nav__link">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
</template>