import React, { useState } from "react";
import {
	Nav,
	NavLink,
	NavIcon,
	Bars,
	NavLogo,
	NavBoxs,
	NavBoxUser,
	NavBoxCart,
	CartCount,
	NavBoxWishList,
	NavBoxPhone,
} from "./NavbarStyle";
import { FaPizzaSlice, FaRegHeart, FaRegUser } from "react-icons/fa";
import { FcCustomerSupport } from "react-icons/fc";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";

const Navbar = ({ toggle }) => {
	const { totalQuantities } = useSelector((state) => state.CartReducer);
	const { products } = useSelector((state) => state.FavoritesReducer);
	const [scrolled, setScrolled] = useState(false);

	const changeBgNavbar = () => {
		if (window.scrollY >= 90) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};
	window.addEventListener("scroll", changeBgNavbar);

	return (
		<React.Fragment>
			<Nav className={scrolled ? "scrolled" : null}>
				<NavBoxs style={{ width: "220px" }}>
					<NavBoxUser title="my account" to="/registration">
						<FaRegUser />
					</NavBoxUser>
					<NavBoxCart title="shopping cart" to="/cart">
						<FiShoppingCart />
						{totalQuantities && totalQuantities > 0 ? (
							<CartCount>{totalQuantities}</CartCount>
						) : null}
					</NavBoxCart>
					<NavBoxWishList title="favorites" to="/favorites">
						<FaRegHeart />
						{products && products.length > 0 ? (
							<CartCount>{products.length}</CartCount>
						) : null}
					</NavBoxWishList>
				</NavBoxs>
				<NavLogo>
					<NavLink to="/">
						Pi{<FaPizzaSlice color="#fd7f33" size="3rem" />}Zat
					</NavLink>
				</NavLogo>
				<NavBoxs>
					<NavBoxPhone to="/">
						<p>order online or call now</p>
						<FcCustomerSupport style={{ float: "left" }} size="2rem" />
						<span>+952347651</span>
					</NavBoxPhone>
				</NavBoxs>
				<NavIcon onClick={toggle}>
					<p>Menu</p>
					<Bars />
				</NavIcon>
			</Nav>
		</React.Fragment>
	);
};

export default Navbar;
