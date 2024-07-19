<template>
  <div id="app">
    <h1>Restaurant Ordering System</h1>
    <Menu @add-to-order="addToOrder"></Menu>
    <Order :order="order" @remove-from-order="removeFromOrder" @clear-order="clearOrder"></Order>
  </div>
</template>

<script>
import Menu from './components/Menu.vue';
import Order from './components/Order.vue';

export default {
  name: 'App',
  components: {
    Menu,
    Order
  },
  data() {
    return {
      order: []
    };
  },
  methods: {
    addToOrder(dish) {
      this.order.push(dish);
    },
    removeFromOrder(dish) {
      this.order = this.order.filter(item => item._id !== dish._id);
    },
    clearOrder() {
      this.order = [];
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
