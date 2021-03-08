import React from "react";
import ProductsList from "../../components/products";
import Feature from "../../components/features";
import { useSelector } from "react-redux";
import ProductsList2 from "../../components/products/ProList";

const Shop = () => {
	const { products } = useSelector((state) => state.ProductsReducer);
	const pizzaCategory = products.filter(
		(product) => product.category === "pizza"
	);
	const sweetsCategory = products.filter(
		(product) => product.category === "sweets"
	);
	return (
		<div>
			<ProductsList products={pizzaCategory} />
			<ProductsList2 products={sweetsCategory} />
		</div>
	);
};

export default Shop;
