<template>
  <div>
    <h2>Menu</h2>
    <div v-for="dish in dishes" :key="dish._id" class="menu-item">
      <h3>{{ dish.name }}</h3>
      <p>{{ dish.description }}</p>
      <p>{{ dish.price | currency }}</p>
      <button @click="addToOrder(dish)">Add to Order</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      dishes: []
    };
  },
  created() {
    axios.get('http://localhost:3000/dishes')
      .then(response => {
        this.dishes = response.data;
      });
  },
  methods: {
    addToOrder(dish) {
      this.$emit('add-to-order', dish);
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
.menu-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
}
</style>
