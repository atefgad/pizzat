import React from "react";
import {
	ProductsContainer,
	ProductWrapper,
	ProductHeading,
	ProductHeadTitle,
} from "./productsStyle";
import ProductCardItem from "./productCard";

const ProductsList = ({ heading, products }) => {
	return (
		<ProductsContainer>
			{heading ? (
				<ProductHeading>
					<ProductHeadTitle>{heading}</ProductHeadTitle>
				</ProductHeading>
			) : null}
			<ProductWrapper>
				<ProductCardItem productsList={products} />
			</ProductWrapper>
		</ProductsContainer>
	);
};

// const mapStateToProps = (state) => ({
// 	newProducts: state,
// });

// const mapDispatchToState = (dispatch) => ({
// 	addToCartHandler: (data) => dispatch(addToCart(data)),
// });

export default ProductsList;
