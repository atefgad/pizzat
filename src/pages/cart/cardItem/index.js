import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	CardItem,
	CardButtons,
	DeleteBtn,
	FavBtn,
	CardImg,
	CardDescription,
	CardQuantity,
	PlusBtn,
	QntInput,
	MinusBtn,
	Price,
} from "./cardItemStyle";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { ImBin } from "react-icons/im";
import {
	REMOVE_CART_ITEM,
	ADD_TO_FAV_LIST,
	INCREASE,
	DECREASE,
	PRODUCT,
} from "../../../redux/actions/actionTypes";
import { useDispatch, useSelector } from "react-redux";

const ShoppingCardItem = ({ cartItems }) => {
	const { products } = useSelector((state) => state.FavoritesReducer);
	const dispatch = useDispatch();
	const [isActive] = useState([]);

	const inFavorite = (index) => {
		const check = products.find((pr) => pr.id === index);
		if (!check) {
			return;
		} else {
			isActive.push(index);
		}
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
			{cartItems.map(
				({ id, image, name, price, desc, category, quantity }, indx) => {
					return (
						<CardItem key={indx}>
							{/* Item (remove & fav) */}
							<CardButtons>
								<DeleteBtn
									onClick={() => dispatch({ type: REMOVE_CART_ITEM, id })}
								>
									<ImBin />
								</DeleteBtn>
								<FavBtn
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
									isActive={isActive.includes(id) === true ? isActive : false}
									disabled={isActive.includes(id) === true ? isActive : false}
								/>
							</CardButtons>
							{/* Product Image */}
							<CardImg>
								<Link to={`/details/${id}`}>
									<img src={image} alt={name} />
								</Link>
							</CardImg>
							{/* Product Name */}
							<CardDescription>
								<Link to={`/details/${id}`}>
									<span>{name}</span>
								</Link>
								<span>{category}</span>
							</CardDescription>
							{/* Item Quantity */}
							<CardQuantity>
								<MinusBtn
									type="button"
									onClick={() => dispatch({ type: DECREASE, id })}
								>
									<AiOutlineMinus />
								</MinusBtn>
								<QntInput type="text" value={quantity} />
								<PlusBtn
									type="button"
									onClick={() => dispatch({ type: INCREASE, id })}
								>
									<AiOutlinePlus />
								</PlusBtn>
							</CardQuantity>
							{/* Item Price */}
							<Price>
								<span>price</span>
								<span>{price} $</span>
							</Price>
							{/* Total Item Price */}
							<Price>
								<span>total price</span>
								<span>{(price * quantity).toFixed(2)} $</span>
							</Price>
						</CardItem>
					);
				}
			)}
		</>
	);
};

export default ShoppingCardItem;
