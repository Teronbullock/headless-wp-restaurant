<script setup>
  import { onBeforeUnmount, watchEffect, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import './the-header.scss';
  import { RouterLink } from 'vue-router';  

  const route = useRoute();
  let headerClass = ref('');

  const addHeaderClass = () => {
    if ( route.fullPath === '/' ) {
      headerClass.value = 'header--home';
    } else if ( route.fullPath === '/menu/' ) {
      headerClass.value = 'header--menu';
    }
  }
  
  const handleScroll = () => {
    const header = document.querySelector('[data-js="header"]');
    
    // Check if the header has the specified class
    if (header && header.classList.contains('header--home')) {

      if (window.scrollY >= 70 && window.innerWidth > 769) {
        header.classList.remove('top');
      } else {
        header.classList.add('top');
      }
    }
  }

  watchEffect( () => {
    addHeaderClass();
    window.addEventListener('scroll', handleScroll);
  });

  onBeforeUnmount( () => {
    window.removeEventListener('scroll', handleScroll);
  });

 
</script>

<template>
  <header :class="`header top ${headerClass}`" data-js="header">
    <div class="container">
      <div class="nav-wrapper">
        <nav class="nav text-uppercase">
          <RouterLink class="nav__item mr-md-4" to="/">Home</RouterLink>
          <RouterLink class="nav__item mr-md-4" to="/#about">About</RouterLink>
          <RouterLink class="nav__item" to="/menu/">Menu</RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>