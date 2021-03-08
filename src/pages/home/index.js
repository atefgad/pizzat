import React from "react";
import ProductsList from "../../components/products";
import Feature from "../../components/features";
import { useSelector } from "react-redux";
import ProductsList2 from "../../components/products/ProList";

const Home = () => {
	const { products } = useSelector((state) => state.ProductsReducer);
	const pizzaCategory = products.filter(
		(product) => product.category === "pizza"
	);
	const sweetsCategory = products.filter(
		(product) => product.category === "sweets"
	);
	return (
		<div>
			<ProductsList products={pizzaCategory} heading="Our Delicious Pizz" />
			<Feature
				heading="The Best Pizza in Town"
				subHeading="We are proud of our Pizza shop with the highest-quality products."
			/>
			<ProductsList2
				products={sweetsCategory}
				heading="Our Perfect Sweets..!"
			/>
		</div>
	);
};

export default Home;
