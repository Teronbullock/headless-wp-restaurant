<script setup>
import './product-card.scss';

defineProps({
  productName: {
    type: String,
    default: '',
    required: true
  },
  productPrice: {
    type: String,
    default: ''
  },
  productDescription: {
    type: String,
    default: ''
  },
});


</script>

<template>
  <a class="product-card d-inline-block w-100 d-flex" href="#">
    <div class="product-card__image w-25">
      <img src="https://via.placeholder.com/300x200" alt="Product Image" />
    </div>
    <div class="product-card__info p-3 w-75">
      <h3 class="product-card__title mt-0 mb-1 text-black">
        {{ productName }}
      </h3>
      <div class="product-card__price text-black mb-1">
        {{ productPrice }}
      </div>
      <div class="product-card__content text-light-gray" html>
        <p class="product-card__description m-0">
          {{ productDescription }}
        </p>
      </div>
    </div>
  </a>
</template>