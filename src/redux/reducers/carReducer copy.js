import { ADD_TO_CART } from "../actions/actionTypes";
import { REMOVE_CART_ITEM } from "../actions/actionTypes";

//import { productData } from "../../components/products/data";
const initState = { shoppingCart: [], totalPrice: 0, message: "", qty: 0 };

const carReducer = (state = initState, action) => {
	let { shoppingCart, totalPrice, qty } = state;
	let product;
	let index;
	let updatedPrice;
	let updatedQty;

	switch (action.type) {
		case ADD_TO_CART:
			const check = shoppingCart.find((cart) => cart.id === action.id);
			if (check) {
				console.log("This is product is already in the cart!");
				return {
					shoppingCart: [...shoppingCart],
					totalPrice,
					message: "This is product is already in the cart!",
					qty,
				};
			} else {
				product = action.products.find((product) => product.id === action.id);
				product["qty"] = 1;
				updatedQty = qty + 1;
				console.log("state => ", state);
				return {
					shoppingCart: [product, ...shoppingCart],
					totalPrice: totalPrice + product.price,
					message: "",
					qty: updatedQty,
				};
			}
			break;
		// case REMOVE_CART_ITEM:
		// 	const filtered = state.cartData.filter(
		// 		(product) => product.id !== action.data
		// 	);
		// 	cartItems = [...state, { cartData: filtered }];
		// 	return cartItems;
		default:
			return state;
	}
};

export default carReducer;
