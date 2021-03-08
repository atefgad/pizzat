import product1 from "../../assets/images/product-1.jpg";
import product2 from "../../assets/images/product-2.jpg";
import product3 from "../../assets/images/product-3.jpg";
import sweet1 from "../../assets/images/sweet3.jpg";
import sweet2 from "../../assets/images/sweet-2.jpg";
import sweet3 from "../../assets/images/sweet-3.jpg";

const initState = {
	products: [
		{
			id: 1,
			name: "Supreme Pizza",
			image: product1,
			price: 19.99,
			quantity: 1,
			category: "pizza",
			desc:
				"Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto",
		},
		{
			id: 2,
			name: "Hawaiian Paradise",
			image: product2,
			price: 16.99,
			quantity: 1,
			category: "pizza",
			desc:
				" Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto",
		},
		{
			id: 3,
			name: "Veggie Overload",
			image: product3,
			price: 14.99,
			quantity: 1,
			category: "pizza",
			desc:
				" Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto",
		},
		{
			id: 4,
			name: "Doughlicious",
			image: sweet2,
			price: 9.99,
			quantity: 1,
			category: "sweets",
			desc:
				"Belgian chocolate glazed donuts covered in icing with sprinkles on top",
		},
		{
			id: 5,
			name: "Caramel Wonder",
			image: sweet3,
			price: 12.99,
			quantity: 1,
			category: "sweets",
			desc:
				"Vanilla ice cream covered with caramel and chocolate glaze topped with a coco stick",
		},
		{
			id: 6,
			name: "Brownie Bunch",
			image: sweet1,
			price: 9.99,
			quantity: 1,
			category: "sweets",
			desc:
				"Double fudge brownie squares topped with white chocolate pieces and macadamia nuts",
		},
	],
	product: {},
};

const ProductsReducer = (state = initState, action) => {
	switch (action.type) {
		case "PRODUCT":
			return {
				...state,
				product: state.products.find(
					(product) => product.id === parseInt(action.id)
				),
			};
		default:
			return state;
	}
};
export default ProductsReducer;
