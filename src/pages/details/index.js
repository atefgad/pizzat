import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PRODUCT } from "../../redux/actions/actionTypes";
// import PageHeading from "../../components/pageHeading";
import Product from "../../components/products/product";

const Details = () => {
	const [quantity, setQuantity] = useState(1);
	const { id } = useParams();
	const dispatch = useDispatch();
	const { product } = useSelector((state) => state.ProductsReducer);
	useEffect(() => {
		dispatch({ type: PRODUCT, id });
	}, [id]);
	const decQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};
	console.log("product Details ", product);
	return (
		<div>
			{/*<PageHeading title="Product Details Page" />*/}
			<Product proDetail={product} />
		</div>
	);
};

export default Details;
