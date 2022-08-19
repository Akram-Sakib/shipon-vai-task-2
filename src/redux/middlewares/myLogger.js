import ShopCartReducer from "../ShopCart/ShopCartReducer";

const myLogger = (store) => (next) => (action) => {
  // console.log(action);
  // console.log(store.getState());

  const upComingState = [action].reduce(ShopCartReducer, store.getState());
  const isNegative = upComingState.products.find(
    (product) => product.stock < 0
  );

  const isNegative2 = store.getState().cart.find((item) => item.quantity < 0);

  if (isNegative || isNegative2) {
    alert("This item is out of stock");
    return;
  }


  return next(action);
};

export default myLogger;
