import React, { useState } from "react";

import { ADD_TO_CART, PRODUCT } from "./actionTypes";
import { useDispatch } from "react-redux";

export const addToCart = (product, id) => {
	const dispatch = useDispatch();
	const [quantity] = useState(1);
	// first dispatch item product data in ProductReducer
	dispatch({ type: PRODUCT, id });
	// add item product data in (cart shopping) CartReducer
	dispatch({
		type: ADD_TO_CART,
		payload: { product, quantity },
	});
};
