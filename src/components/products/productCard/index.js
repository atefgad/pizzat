import React, { useState } from "react";
import {
	ProCardBoxWrapper,
	BoxImg,
	Success,
	BoxContent,
	AddToCartSpan,
	AddToCartIcon,
	AddToCartBtn,
	AddToFav,
	Title,
	Desc,
	Price,
} from "./productCardStyle";
import { useDispatch } from "react-redux";
import {
	ADD_TO_CART,
	PRODUCT,
	ADD_TO_FAV_LIST,
} from "../../../redux/actions/actionTypes";
import { Link } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";

const ProductCardItem = ({ productsList }) => {
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
						<ProCardBoxWrapper key={indx}>
							<Link to={`/details/${id}`}>
								<BoxImg src={image} alt={name} />
							</Link>
							<BoxContent>
								{/* add to cart */}
								<AddToCartBtn
									title={isAdd.includes(id) === true ? "added" : "add to cart"}
									disabled={isAdd.includes(id) === true ? true : false}
									onClick={() =>
										handleAddToCart(
											{ id, image, name, desc, price, category, quantity },
											id
										)
									}
								>
									<AddToCartSpan
										isAdd={isAdd.includes(id) === true ? isAdd : null}
									>
										<AddToCartIcon
											isAdd={isAdd.includes(id) === true ? isAdd : null}
										/>
										<Success
											isAdd={isAdd.includes(id) === true ? isAdd : null}
										/>
									</AddToCartSpan>
								</AddToCartBtn>
								{/* add to fav */}
								<AddToFav
									title={
										isActive.includes(id) === true ? "added" : "add to favorite"
									}
									onClick={() =>
										handelAddToFavorite(
											{ id, image, name, desc, price, category, quantity },
											id
										)
									}
									disabled={isActive.includes(id) === true ? true : false}
								>
									{isActive.includes(id) === true ? (
										<FaHeart size="1.6rem" />
									) : (
										<FaRegHeart size="1.6rem" />
									)}
								</AddToFav>
								{/* card title */}
								<Title>{name}</Title>
								<Desc>{desc}</Desc>
								<Price>{price} $</Price>
							</BoxContent>
						</ProCardBoxWrapper>
					);
				}
			)}
		</>
	);
};

export default ProductCardItem;
