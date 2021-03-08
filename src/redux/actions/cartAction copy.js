import { ADD_TO_CART } from "./actionTypes";
import { REMOVE_CART_ITEM } from "./actionTypes";

export const addToCart = (id, products) => {
	return {
		type: ADD_TO_CART,
		id,
		products,
	};
};

export const removeCartItem = (data) => {
	console.log("remove action", data);
	return {
		type: REMOVE_CART_ITEM,
		data,
	};
};
