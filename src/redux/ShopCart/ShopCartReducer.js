import {
  ADDTOCART,
  ADJUSTQUANTITY,
  ADJUSTSTOCK,
  DECREMENTQUANTITY,
  INCREMENTQUANTITY,
} from "./actionTypes";

const initialState = {
  products: [
    {
      id: 1,
      name: "Asus Vivobook X515MA",
      price: 35500,
      stock: 10,
      quantity: 0,
    },
    {
      id: 2,
      name: "Dell E1916HV 18.5 Inch",
      price: 9300,
      stock: 15,
      quantity: 0,
    },
    {
      id: 3,
      name: "Canon Eos 4000D 18MP",
      price: 36500,
      stock: 20,
      quantity: 0,
    },
  ],
  cart: [],
  currentItem: null,
};

const ShopCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTOCART:
      // Get the items data from the products array
      const item = state.products.find((prod) => prod.id === action.payload.id);
      // Check if item is in cart already
      const inCart = state?.cart?.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...state.cart, { ...item, quantity: 1 }],
      };
    case INCREMENTQUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case DECREMENTQUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    case ADJUSTQUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case ADJUSTSTOCK:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, stock: product.stock - action.payload.value, }
            : product
        ),
      };
    default:
      return state;
  }
};

export default ShopCartReducer;
