<template>
  <section v-if="show" @click.self="closeSideNav" class="cart-section-wrapper">
    <div v-if="show" class="cart-section">
      <h2>Your Cart</h2>
      <h3>
        Total Amount:
        <base-badge mode="highlight">${{ cartTotal }}</base-badge>
      </h3>
      <ul>
        <cart-item
          v-for="item in cartItems"
          :key="item.productId"
          :prod-id="item.productId"
          :title="item.title"
          :image="item.image"
          :price="item.price"
          :qty="item.qty"
        ></cart-item>
      </ul>
    </div>
  </section>
</template>

<script>
import CartItem from './CartItem.vue';

export default {
  components: {
    CartItem,
  },
  computed: {
    cartItems() {
      return this.$store.getters['cart/items'];
    },
    cartTotal() {
      return this.$store.getters['cart/totalSum'];
    },
    show() {
      return this.$store.getters['cart/showSideNav'];
    },
  },
  methods: {
    closeSideNav() {
      this.$store.commit('cart/toggleSideNav', false);
    },
  },
};
</script>

<style scoped>
.cart-section-wrapper {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 5rem;
  background-color: #292929ba;
  display: flex;
  justify-content: flex-end;
}
.cart-section {
  position: absolute;
  z-index: 20;
  margin: 0;
  max-height: 91vh;
  height: 91vh;
  width: 25rem;
  background-color: white;
  opacity: 1;
  overflow: scroll;
}

h2 {
  color: #292929;
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 1rem;
}

h3 {
  text-align: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
