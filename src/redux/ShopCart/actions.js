import {
  ADDTOCART,
  ADJUSTQUANTITY,
  ADJUSTSTOCK,
  DECREMENTQUANTITY,
  INCREMENTQUANTITY
} from "./actionTypes";

export const addtoCart = (item) => {
  return {
    type: ADDTOCART,
    payload: {
      id: item.id,
    },
  };
};

export const incrementQuantity = (id) => {
  return {
    type: INCREMENTQUANTITY,
    payload: {
      id: id,
    },
  };
};

export const decrementQuantity = (id) => {
  return {
    type: DECREMENTQUANTITY,
    payload: {
      id: id,
    },
  };
};

export const adjustQuantity = (itemId, value) => {
  return {
    type: ADJUSTQUANTITY,
    payload: {
      id: itemId,
      quantity: value,
      val: 1,
    },
  };
};

export const adjustStock = (stockId, value) => {
  return {
    type: ADJUSTSTOCK,
    payload: {
      id: stockId,
      value: value,
    },
  };
};
