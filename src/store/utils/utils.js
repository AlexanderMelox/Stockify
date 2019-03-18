export function findStock(state, stockId) {
  const record = state.stocks.find(element => element.id == stockId);
  return record;
}
