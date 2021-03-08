import {
	ADD_TO_CART,
	REMOVE_CART_ITEM,
	INCREASE,
	DECREASE,
} from "../actions/actionTypes";
const initState = {
	products: [],
	totalPrice: 0,
	totalQuantities: 0,
	message: "",
};

const cartReducer = (state = initState, action) => {
	let { products, totalPrice, totalQuantities } = state;
	let findProduct;
	let index;
	let stateCartItems;
	switch (action.type) {
		case ADD_TO_CART:
			const { product, quantity } = action.payload;
			const check = products.find((pr) => pr.id === product.id);
			console.log("check", check);
			if (check) {
				return {
					...state,
					products: [...products],
					totalPrice,
					totalQuantities,
					message: "This product is already in the cart!",
				};
			} else {
				const Tprice = totalPrice + product.price * quantity;
				const Tquantities = totalQuantities + quantity;
				product.quantity = quantity;
				console.log("staate", state);
				stateCartItems = {
					...state,
					products: [...products, product],
					totalPrice: Tprice,
					totalQuantities: Tquantities,
					message: "added to the cart!",
				};
				return stateCartItems;
			}

		case REMOVE_CART_ITEM:
			const findPro = products.find((product) => product.id === action.id);
			const filtered = products.filter((product) => product.id !== action.id);

			return {
				...state,
				products: filtered,
				totalPrice: totalPrice - findPro.price * findPro.quantity,
				totalQuantities: totalQuantities - findPro.quantity,
				message: "removed item from to the cart!",
			};

		case INCREASE:
			findProduct = products.find((product) => product.id === action.id);
			index = products.findIndex((product) => product.id === action.id);
			findProduct.quantity += 1;
			products[index] = findProduct;
			return {
				...state,
				totalPrice: totalPrice + findProduct.price,
				totalQuantities: totalQuantities + 1,
			};
		case DECREASE:
			findProduct = products.find((product) => product.id === action.id);
			index = products.findIndex((product) => product.id === action.id);
			if (findProduct.quantity > 1) {
				findProduct.quantity -= 1;
				products[index] = findProduct;
				return {
					...state,
					totalPrice: totalPrice - findProduct.price,
					totalQuantities: totalQuantities - 1,
				};
			} else {
				return state;
			}
		default:
			return state;
	}
};

export default cartReducer;
