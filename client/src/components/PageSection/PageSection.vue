<script setup>
  import './page-section.scss';
  defineProps({
    sectionID: {
      type: String,
      default: ''
    },

    sectionClass: {
      type: String,
      default: ''
    },

    sectionStyle: {
      type: Object,
      default: () => ({})
    },

    sectionTitle: {
      type: String,
      default: ''
    },

    sectionBodyClass: {
      type: String,
      default: ''
    },

    headerType: {
      type: String,
      default: 'h2',
      validator: (value) => {
        return ['h2', 'h3', 'h4'].includes(value);
      }
    },

    headerClass: {
      type: String,
      default: ''
    }
  });


</script>

<template>
  <section :class="`page-section ${sectionClass}`" :id="`page-section-${sectionID}`" :style="sectionStyle">
    <div :class="`page-section__header ${headerClass}`">
      <h2 v-if="headerType === 'h2'" class="page-section__title mt-2">{{ sectionTitle }}</h2>
      <h3 v-if="headerType === 'h3'" class="page-section__title mt-2">{{ sectionTitle }}</h3>
      <h4 v-if="headerType === 'h4'" class="page-section__title mt-2">{{ sectionTitle }}</h4>
    </div>
    <div :class="`page-section__body ${sectionBodyClass}`">
      <slot name="body"></slot>
    </div>
  </section>
</template>
