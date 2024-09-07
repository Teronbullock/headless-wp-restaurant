<script setup>
  import './the-columns.scss';
  
  const props = defineProps({
    columns: {
      type: Number,
      default: 1,
      validator: value => value >= 1 && value <= 6,
    },
    sectionId: {
      type: String,
      default: ''
    },
    sectionClass: {
      type: String,
      default: ''
    },
    sectionAriaLabel: {
      type: String,
      default: ''
    },
    sectionWidth: {
      type: Boolean,
      default: false
    },
    sectionStyle: {
      type: Object,
      default: () => ({})
    },
    hasBGImg: {
      type: String,
      default: ''
    },
    colClass: {
      type: Object,
      default: () => ({
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: ''
      })
    }

  })

  let colsContainerClass = '';
  let theSectionClass = props.sectionClass;

  if ( props.sectionWidth === true ) {
    colsContainerClass = 'container';
  }

  // set sectionClass if hasBGImg is true
  if ( props.hasBGImg == 'grayscale' ) {
    theSectionClass += ' cols--has-bg-grayscale';
  } else if ( props.hasBGImg == 'true') {
    theSectionClass += ' cols--has-bg';
  }


</script>
<template>
  <section :id="sectionId" :class="`cols ${theSectionClass}`" :style="sectionStyle" :aria-label="sectionAriaLabel">
    <div :class="`cols__container ${colsContainerClass}`">
      <div :class="`col col-${i} ${colClass[i]}`" v-for="i in columns" :key="i">
        <slot :name="'col-' + i"></slot>
      </div>
    </div>
  </section>
</template>