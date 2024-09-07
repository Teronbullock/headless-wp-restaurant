<script setup>
  import './the-hero.scss';
  import { ref } from 'vue';

  const props = defineProps({
    sectionClass: {
      type: String,
      default: ''
    },
    sectionStyle: {
      type: Object,
      default: () => ({})
    },
    sectionAriaLabel: {
      type: String,
      default: ''
    },
    heroMask: {
      type: Boolean,
      default: false
    }
  });

  const heroAriaLabel = ref(props.sectionAriaLabel || undefined); 
  const heroStyle = ref(props.sectionStyle || undefined);
  let heroClass = ref(props.heroMask ? 'hero--mask' : '');

  if (props.sectionClass) {
    heroClass.value += ` ${props.sectionClass}`;
  }


</script>

<template>
  <section :class="`hero ${heroClass}`" :aria-label="heroAriaLabel" :style="heroStyle">
    <div class="container d-flex justify-content-center h-100 pt-5">
      <div class="hero__content text-center">
        <slot name="body"></slot> 
      </div>
    </div>
  </section>
</template>