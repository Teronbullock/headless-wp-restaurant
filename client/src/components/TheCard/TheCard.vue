<script setup>
  import './the-card.scss';

  const props = defineProps({
    titleText: {
      type: String,
      default: ''
    },
    sectionClass: {
      type: String,
      default: ''
    },
    headerClass: {
      type: String,
      default: ''
    },
    headerType: {
      type: String,
      default: 'h2'
    },
    headerTitleClass: {
      type: String,
      default: ''
    },
    hasTitleUnderline: {
      type: Boolean,
      default: false
    },
    cardBody: {
      type: String,
      default: ''
    },
    borderColor: {
      type: String,
      default: ''
    },
  })

  let titleUnderlineColor = `border-${props.borderColor}`;
</script>

<template>
  <div :class="`card ${sectionClass}`">
    <div 
      :class="`card__header ${headerClass}`" 
      v-if="titleText || headerImg"
    >
      <h1 :class="`card__title ${headerTitleClass}`" v-if="titleText && headerType==='h1'">
        {{ titleText }}
      </h1>
      <h2 :class="`card__title ${headerTitleClass}`" v-if="titleText && headerType==='h2'">
        {{ titleText }}
      </h2>
      <h3 :class="`card__title ${headerTitleClass}`" v-if="titleText && headerType==='h3'">
        {{ titleText }}
      </h3>
      <h4 :class="`card__title ${headerTitleClass}`" v-if="titleText && headerType==='h4'">
        {{ titleText }}
      </h4>
      <div v-if="hasTitleUnderline === true" :class="`card__title-underline ${titleUnderlineColor}`"></div>
    </div>
    <div :class="`card__body ${cardBody}`">
      <slot name="body"></slot>
    </div>
  </div>
</template>