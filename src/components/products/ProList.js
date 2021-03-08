import React from "react";
import {
	ProductsContainer,
	ProductWrapper,
	ProductHeading,
	ProductHeadTitle,
} from "./productsStyle";
import ProductCardItem2 from "./productCard2";

const ProductsList2 = ({ heading, products }) => {
	return (
		<ProductsContainer>
			<ProductHeading>
				<ProductHeadTitle>{heading}</ProductHeadTitle>
			</ProductHeading>
			<ProductWrapper>
				<ProductCardItem2 productsList={products} />
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

export default ProductsList2;
