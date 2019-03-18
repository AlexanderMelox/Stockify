import { findStock } from '../utils/utils';

const state = {
  funds: 10000,
  stocks: []
};

const mutations = {
  BUY_STOCK(state, { stockId, quantity, stockPrice }) {
    // Find if the stock record exists
    const record = findStock(state, stockId);
    // Checks if it does exist
    if (record) {
      // Adds the stock quantity to the existing quantity
      record.quantity += quantity;
    } else {
      // Pushes a new stock to the portfolio
      state.stocks.push({
        id: stockId,
        quantity: quantity
      });
    }
    // Subtracts the funds by taking the stock price multiplied by the quantity
    state.funds -= stockPrice * quantity;
  },
  SELL_STOCK(state, { stockId, quantity, stockPrice }) {
    // Find if the stock record exists
    const record = findStock(state, stockId);
    // Checks if the quantity in store is greater than the amount trying to sell
    if (record.quantity > quantity) {
      // Substract the amount of stocks selling
      record.quantity -= quantity;
    } else {
      // Removes that stock from portfolio
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    // Adds the funds for selling the stock.
    state.funds += stockPrice * quantity;
  }
};

const actions = {
  sellStock({ commit }, order) {
    commit('SELL_STOCK', order);
  }
};

const getters = {
  stockPortfolio(state, getters) {
    // Creates an array of stocks
    return state.stocks.map(stock => {
      const record = findStock(getters, stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      };
    });
  },
  funds(state) {
    return state.funds;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
