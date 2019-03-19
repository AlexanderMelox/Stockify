<template>
  <div class="col-sm-6 col-md-4">
    <div class="card stock">
      <div class="card__heading">
        <h3 class="stock__title">{{ stock.name }}</h3>
        <span class="stock__price">${{ stock.price }} | Quantity: {{ stock.quantity }}</span>
      </div>
      <div class="card__body">
        <form>
          <div class="stock__input-group">
            <input
              type="number"
              :class="['stock__input', {'danger': insufficientQuantity}]"
              placeholder="Quantity"
              v-model="quantity"
            >
            <input
              type="submit"
              class="stock__button"
              :value="insufficientQuantity ? 'Not enough' : 'Sell'"
              @click.prevent="sellStock"
              :disabled="insufficientQuantity || Number(quantity) <= 0 || !Number.isInteger(Number(quantity))"
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { constants } from 'fs';

export default {
  props: {
    stock: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: 'sellStock'
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  }
};
</script>