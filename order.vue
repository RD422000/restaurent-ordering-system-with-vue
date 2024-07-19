<template>
  <div>
    <h2>Your Order</h2>
    <div v-for="item in order" :key="item._id" class="order-item">
      <h3>{{ item.name }}</h3>
      <p>{{ item.price | currency }}</p>
      <button @click="removeFromOrder(item)">Remove</button>
    </div>
    <div v-if="order.length">
      <h3>Total: {{ total | currency }}</h3>
      <button @click="placeOrder">Place Order</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['order'],
  computed: {
    total() {
      return this.order.reduce((sum, item) => sum + item.price, 0);
    }
  },
  methods: {
    removeFromOrder(item) {
      this.$emit('remove-from-order', item);
    },
    placeOrder() {
      const orderData = {
        items: this.order.map(item => item._id),
        total: this.total,
        status: 'Pending'
      };
      axios.post('http://localhost:3000/orders', orderData)
        .then(() => {
          alert('Order placed successfully!');
          this.$emit('clear-order');
        });
    }
  },
  filters: {
    currency(value) {
      return `$${value.toFixed(2)}`;
    }
  }
};
</script>

<style scoped>
.order-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
}
</style>
