import React from "react";
import { Link } from "react-router-dom";
import {
	CardItem,
	CardButtons,
	DeleteBtn,
	CardImg,
	CardDescription,
	Price,
} from "./facItemStyle";
import { ImBin } from "react-icons/im";
import { useDispatch } from "react-redux";
import { REMOVE_FAV_ITEM } from "../../../redux/actions/actionTypes";

const FavCardItem = ({ products }) => {
	const dispatch = useDispatch();
	return (
		<>
			{products.map(({ id, image, name, price, category, quantity }, indx) => {
				return (
					<CardItem key={indx}>
						{/* Item (remove & fav) */}
						<CardButtons>
							<DeleteBtn
								onClick={() => dispatch({ type: REMOVE_FAV_ITEM, id })}
							>
								<ImBin />
							</DeleteBtn>
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

						{/* Item Price */}
						<Price>
							<span>price</span>
							<span>{price} $</span>
						</Price>
					</CardItem>
				);
			})}
		</>
	);
};

export default FavCardItem;
