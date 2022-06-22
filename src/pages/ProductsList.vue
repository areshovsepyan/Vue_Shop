<template>
  <section>
    <div class="section-header">
      <h2>Top Rated Products</h2>
    </div>
    <div class="product-list">
      <product-item
        v-for="prod in products"
        :key="`${prod.id}-${prod.price}-${prod.title}`"
        :id="prod.id"
        :title="prod.title"
        :image="prod.image"
        :price="prod.price"
      ></product-item>
    </div>
    <UserCart />
  </section>
</template>

<script>
import ProductItem from '../components/products/ProductItem.vue';
import UserCart from '../components/cart/UserCart.vue';

export default {
  components: {
    ProductItem,
    UserCart,
  },
  computed: {
    products() {
      return this.$store.getters['prods/products'];
    },
  },
  beforeCreate() {
    this.$store.commit('cart/initialiseStore');
  },
};
</script>

<style scoped>
.section-header {
  width: 80vw;
  margin: 2rem auto 0 auto;
}
h2 {
  margin: 0;
}
.product-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0 auto 4rem auto;
  padding: 0;
  max-width: 50rem;
}
</style>
