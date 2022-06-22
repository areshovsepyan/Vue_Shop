<template>
  <section class="header-wrapper">
    <header>
      <h1>
        <router-link to="/">VueShop</router-link>
      </h1>
      <nav>
        <ul>
          <li>
            <router-link to="/products">Products</router-link>
          </li>
          <li>
            <a @click="toggleSideNav">Cart</a>
            <base-badge mode="elegant">{{ cartQuantity }}</base-badge>
          </li>
        </ul>
      </nav>
    </header>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    cartQuantity() {
      return this.$store.getters['cart/quantity'];
    },
  },
  methods: {
    toggleSideNav() {
      const isShowed = this.$store.getters['cart/showSideNav'];
      this.$store.commit('cart/toggleSideNav', !isShowed);
    },
  },
};
</script>

<style scoped>
.header-wrapper {
  width: 100%;
  background-color: black;
}
header {
  height: 5rem;
  margin: 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: center;
  align-items: center;
}

li {
  margin: 0 1rem;
}

a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  border-bottom: 2px solid transparent;
  padding-bottom: 0.25rem;
  cursor: pointer;
}

a:hover,
a:active,
a.router-link-active {
  color: red;
  border-color: red;
}

button {
  font: inherit;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  border: 1px solid #45006d;
  background-color: transparent;
  color: #45006d;
  border-radius: 30px;
}

button:hover,
button:active {
  background-color: #f0d5ff;
}
</style>
