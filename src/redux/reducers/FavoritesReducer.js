import { ADD_TO_FAV_LIST, REMOVE_FAV_ITEM } from "../actions/actionTypes";
const initState = {
	products: [],
	message: "",
};

const FavoritesReducer = (state = initState, action) => {
	let { products } = state;

	let stateFavItems;
	switch (action.type) {
		case ADD_TO_FAV_LIST:
			const { product } = action.payload;
			const check = products.find((pr) => pr.id === product.id);
			console.log("check", check);
			if (check) {
				return {
					...state,
					products: [...products],
					message: "This product is already in the cart!",
				};
			} else {
				console.log("staate", state);
				stateFavItems = {
					...state,
					products: [...products, product],
					message: "added to the cart!",
				};
				return stateFavItems;
			}

		case REMOVE_FAV_ITEM:
			const filtered = products.filter((product) => product.id !== action.id);

			return {
				...state,
				products: filtered,
				message: "removed item from to the cart!",
			};
		default:
			return state;
	}
};

export default FavoritesReducer;
