import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import myLogger from "./middlewares/myLogger";
import ShopCartReducer from "./ShopCart/ShopCartReducer";

const store = createStore(ShopCartReducer, composeWithDevTools(
    applyMiddleware(myLogger)
  ));

export default store