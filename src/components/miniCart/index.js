import React from "react";
import {
	MiniCartContent,
	CartCount,
	MiniCartIcon,
	MiniCartLink,
} from "./miniCartStyle";
import { useSelector } from "react-redux";

const MiniCart = () => {
	const { totalQuantities } = useSelector((state) => state.CartReducer);
	return (
		<>
			{totalQuantities && totalQuantities > 0 ? (
				<MiniCartContent
					animate={{ x: 0, scale: 1, opacity: 1 }}
					initial={{ x: "-100vw", scale: 0.2, opacity: 0.2 }}
					transition={{
						delay: 0.2,
						duration: 0.3,
						type: "spring",
						stiffness: 200,
					}}
				>
					<MiniCartLink to="/cart" title="view shopping cart">
						<CartCount>{totalQuantities}</CartCount>

						<MiniCartIcon />
					</MiniCartLink>
				</MiniCartContent>
			) : null}
		</>
	);
};

export default MiniCart;
