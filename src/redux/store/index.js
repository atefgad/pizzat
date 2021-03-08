import { createStore, combineReducers } from "redux";
import ProductsReducer from "../reducers/productReducer";
import CartReducer from "../reducers/cartReducer";
import FavoritesReducer from "../reducers/FavoritesReducer";

const root = combineReducers({
	ProductsReducer,
	CartReducer,
	FavoritesReducer,
});

const store = createStore(root);
export default store;
