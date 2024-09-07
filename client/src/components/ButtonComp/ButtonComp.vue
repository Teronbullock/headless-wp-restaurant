<script setup>
  import './button-comp.scss';

  defineProps({
  btnText: {
    type: String,
    required: true
  },
  btnClass: {
    type: String,
    required: false,
    default: ''
  }
})
</script>

<template>
  <button :class="`btn ${btnClass}`"> {{ btnText }}</button>
</template>