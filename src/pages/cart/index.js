import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PageHeading from "../../components/pageHeading";
import {
	CartContainer,
	ShoppingCartContainer,
	CartTotalArea,
	CartTotalInfo,
	CartTotalInfoList,
	CartListSubtotal,
	CartListSubtotalItem,
	SubtotalItemVal,
	CartTotalAmount,
	CartTotalAmountval,
	CartTotalLink,
	CartTotalBtn,
	EmptyShoppingCart,
	EmptyCartIcon,
	EmptyShoppingCartTitle,
	EmptyShoppingLink,
} from "./cartStyle";
import ShoppingCardItem from "./cardItem";

const ShoppingCart = () => {
	const { products, totalPrice } = useSelector((state) => state.CartReducer);
	const totalP = totalPrice + 20 + 12 / 100;
	return (
		<div>
			<PageHeading title="Shopping Cart" />
			{products && products.length > 0 ? (
				<CartContainer>
					<ShoppingCartContainer>
						<ShoppingCardItem cartItems={products} />
					</ShoppingCartContainer>
					<CartTotalArea>
						<CartTotalInfo>
							<CartTotalInfoList>
								<CartListSubtotal>
									<CartListSubtotalItem>Subtotal</CartListSubtotalItem>
									<SubtotalItemVal>{totalPrice.toFixed(2)} $</SubtotalItemVal>
								</CartListSubtotal>
								<CartListSubtotal>
									<CartListSubtotalItem>Shipping</CartListSubtotalItem>
									<SubtotalItemVal>20 $</SubtotalItemVal>
								</CartListSubtotal>
								<CartListSubtotal>
									<CartListSubtotalItem>VAT</CartListSubtotalItem>
									<SubtotalItemVal>12%</SubtotalItemVal>
								</CartListSubtotal>
							</CartTotalInfoList>
							<CartTotalAmount>
								<span>Order Total</span>
								<CartTotalAmountval>{totalP.toFixed(2)} $</CartTotalAmountval>
							</CartTotalAmount>

							<CartTotalLink>
								<CartTotalBtn>checkout</CartTotalBtn>
							</CartTotalLink>
						</CartTotalInfo>
					</CartTotalArea>
				</CartContainer>
			) : (
				<EmptyShoppingCart>
					<EmptyCartIcon />
					<EmptyShoppingCartTitle>
						No products in the cart{" "}
						<EmptyShoppingLink to="/shop">shopping now!</EmptyShoppingLink>
					</EmptyShoppingCartTitle>
				</EmptyShoppingCart>
			)}
		</div>
	);
};

export default ShoppingCart;
