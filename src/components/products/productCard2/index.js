import React, { useState } from "react";
import {
	ProductCard,
	ProductImg,
	ProductInfo,
	ProductTitle,
	ProductDesc,
	ProductPrice,
	ProductWishListIcon,
	ProductLinks,
	ProductButton,
} from "./productCard2Style";
import {
	ADD_TO_CART,
	PRODUCT,
	ADD_TO_FAV_LIST,
} from "../../../redux/actions/actionTypes";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const ProductCardItem2 = ({ productsList }) => {
	const { products } = useSelector((state) => state.ProductsReducer);
	const [isAdd] = useState([]);
	const [isActive] = useState([]);
	const [quantity] = useState(1);
	const dispatch = useDispatch();

	const inCart = (index) => {
		const check = products.find((pr) => pr.id === index);
		if (!check) {
			return;
		} else {
			isAdd.push(index);
		}
	};

	const inFavorite = (index) => {
		const check = products.find((pr) => pr.id === index);
		if (!check) {
			return;
		} else {
			isActive.push(index);
		}
	};

	// const toggle = (index) => {
	// 	if (isActive === index) {
	// 		return setActive(null);
	// 	}
	// 	setActive(index);
	// };

	const handleAddToCart = (product, id) => {
		// first dispatch item product data in ProductReducer
		dispatch({ type: PRODUCT, id });
		// add item product data in (cart shopping) CartReducer
		dispatch({
			type: ADD_TO_CART,
			payload: { product, quantity },
		});
		inCart(id);
		let x = JSON.stringify(product);
		localStorage.setItem("cartItems", x);
	};

	const handelAddToFavorite = (product, id) => {
		// first dispatch item product data in ProductReducer
		dispatch({ type: PRODUCT, id });
		// add item product data in (Favorites List) FavoritesReducer
		dispatch({
			type: ADD_TO_FAV_LIST,
			payload: { product },
		});
		inFavorite(id);
		let x = JSON.stringify(product);
		localStorage.setItem("FavItems", x);
		console.log("FAV product", product);
	};

	return (
		<>
			{productsList.map(
				({ id, image, name, desc, price, category, quantity }, indx) => {
					return (
						<ProductCard key={indx}>
							<Link to={`/details/${id}`}>
								<ProductImg src={image} alt={name} />
							</Link>
							<ProductPrice>{price} $</ProductPrice>
							<ProductInfo>
								<ProductTitle>{name}</ProductTitle>
								<ProductDesc>{desc}</ProductDesc>
								<ProductLinks>
									<ProductButton
										title={
											isAdd.includes(id) === true ? "added" : "add to cart"
										}
										disabled={isAdd.includes(id) === true ? true : false}
										onClick={() =>
											handleAddToCart(
												{
													id,
													image,
													name,
													desc,
													price,
													category,
													quantity,
												},
												id
											)
										}
									>
										add to cart
									</ProductButton>
									<a
										title={
											isActive.includes(id) === true
												? "added"
												: "add to favorite"
										}
										href="#!"
									>
										<ProductWishListIcon
											isActive={
												isActive.includes(id) === true ? isActive : false
											}
											disabled={
												isActive.includes(id) === true ? isActive : false
											}
											onClick={() =>
												handelAddToFavorite(
													{
														id,
														image,
														name,
														desc,
														price,
														category,
														quantity,
													},
													id
												)
											}
										>
											<span></span>
										</ProductWishListIcon>
									</a>
								</ProductLinks>
							</ProductInfo>
						</ProductCard>
					);
				}
			)}
		</>
	);
};

export default ProductCardItem2;
