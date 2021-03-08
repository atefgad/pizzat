import React from "react";
import { useSelector } from "react-redux";
import PageHeading from "../../components/pageHeading";
import {
	FavContainer,
	FavContent,
	EmptyFav,
	EmptyFavTitle,
	EmptyFavLink,
} from "./favoritesStyle";
import FavCardItem from "./favItem";

const Favorites = () => {
	const { products } = useSelector((state) => state.FavoritesReducer);
	return (
		<div>
			<PageHeading title="Favorites" />
			{products && products.length > 0 ? (
				<FavContainer>
					<FavContent FavContent>
						<FavCardItem products={products} />
					</FavContent>
				</FavContainer>
			) : (
				<EmptyFav>
					<EmptyFavTitle>
						No Products In The Favorite list{" "}
						<EmptyFavLink to="/shop">shopping now!</EmptyFavLink>
					</EmptyFavTitle>
				</EmptyFav>
			)}
		</div>
	);
};

export default Favorites;
