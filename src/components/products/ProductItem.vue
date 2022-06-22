<template>
  <div class="product">
    <div class="product__data">
      <div class="product__image">
        <img :src="image" :alt="title" />
      </div>
      <div class="product__text">
        <p class="product_title">{{ title }}</p>
        <p class="product_price">${{ price }}</p>
      </div>
    </div>
    <div class="product__actions">
      <button @click="addToCart">Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'image', 'title', 'price'],
  methods: {
    addToCart() {
      this.$store.dispatch('cart/addToCart', { id: this.id });
    },
  },
};
</script>

<style scoped>
.product {
  position: relative;
  margin: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  width: 190px;
  height: 225px;
}

.product__data {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.product__image {
  /* margin-right: 1rem; */
}

.product__image img {
  height: 10rem;
  width: 10rem;
  object-fit: cover;
}
.product__text {
  width: 100%;
}

.product_title {
  font-size: 15px;
  font-weight: 500;
  line-height: 8px;
  margin: 0.5rem 0;
}

.product_price {
  font-size: 14px;
  line-height: 6px;
  opacity: 0.7;
  margin: 0.5rem 0;
}

.product__actions {
  position: absolute;
  bottom: -15px;
  right: 7px;
  text-align: center;
}

button {
  font: inherit;
  cursor: pointer;
  background-color: black;
  color: white;
  border: 1px solid black;
  cursor: pointer;
  padding: 0.3rem 0.8rem;
  font-size: 13px;
}

button:hover,
button:active {
  background-color: #8b8b8b;
  border-color: #8b8b8b;
}
</style>
