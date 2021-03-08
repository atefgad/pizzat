import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";

export const Nav = styled.nav`
	background: #f60;
	height: 80px;
	display: flex;
	justify-content: left;
	font-weight: 700;
	transition: 0.5s ease-out;
	position: fixed;
	width: 100%;
	z-index: 9999;
	&.scrolled {
		background: #ff9800b5 !important;
	}
`;

export const NavBoxs = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	/* width: 150px;
	margin-right: 2rem; */

	@media screen and (max-width: 480px) {
		width: 100px !important;
	}
	@media screen and (max-width: 767px) {
		width: 150px !important;
	}

	a {
		@media screen and (max-width: 480px) {
			padding: 0;
			width: 40px;
			height: 40px;
		}
	}
`;

export const NavBoxUser = styled(Link)`
	font-size: 1.5rem;
	color: #fff;
	/* background-color: #ea8a0e; */
	padding: 5px;
	border-radius: 50%;
	width: 50px;
	height: 50px;
	text-align: center;
	line-height: 2;
	transition: 0.3s ease-in;
	&:hover {
		background-color: #ea8a0e;
	}
`;
export const NavBoxCart = styled(Link)`
	font-size: 1.5rem;
	color: #fff;
	position: relative;
	line-height: 1;
	margin-left: 0.5rem;
	margin-right: 0.5rem;
	padding: 5px;
	border-radius: 50%;
	width: 50px;
	height: 50px;
	text-align: center;
	line-height: 2;
	transition: 0.3s ease-in;
	&:hover {
		background-color: #ea8a0e;
	}
	@media screen and (max-width: 480px) {
		margin: 0;
	}
`;
export const CartCount = styled.span`
	display: inline-block;
	font-size: 16px;
	font-weight: 400;
	color: #ffffff;
	background-color: red;
	padding: 5px 8px;
	border-radius: 50%;
	position: absolute;
	top: -5px;
	right: 0;
	line-height: 1;
`;
export const NavBoxPhone = styled(Link)`
	color: #fff;
	text-decoration: none;
	margin-left: 2rem;
	font-size: 1.5rem;
	line-height: 1.5;
	p {
		font-size: 1rem;
		font-weight: 400;
		letter-spacing: 1px;
	}
	span {
		font-size: 1.2rem;
		margin-left: 0.5rem;
		letter-spacing: 1px;

		transition: 0.3s ease-in-out;
		&:hover {
			color: #ddd;
		}
	}

	@media screen and (max-width: 767px) {
		display: none;
	}
`;

export const NavBoxWishList = styled(Link)`
	font-size: 1.5rem;
	color: #fff;
	padding: 5px;
	border-radius: 50%;
	width: 50px;
	height: 50px;
	text-align: center;
	line-height: 2;
	transition: 0.3s ease-in;
	&:hover {
		background-color: #ea8a0e;
	}
`;

export const NavLogo = styled.div`
	display: block;
	min-height: 100px;
	width: 200px;
	transition: all 0.3s ease-in-out 0s;
	text-align: center;
	position: relative;
	z-index: 6;
	top: -12px;
	padding: 15px 15px 0;
	background-color: red;
	border-top-right-radius: 15px;
	border-top-left-radius: 15px;
	@media screen and (max-width: 480px) {
		/* background-color: transparent; */
		display: none;
	}
	::before {
		content: " ";
		position: absolute;
		width: 0;
		height: 0;
		right: 0;
		bottom: -40px;
		border-width: 20px 50px;
		border-style: solid;
		border-color: red transparent transparent red;
		@media screen and (max-width: 480px) {
			display: none;
		}
		@media screen and (max-width: 767px) {
			bottom: -39px;
			border-width: 20px 39px;
		}
	}
	::after {
		content: " ";
		position: absolute;
		width: 0;
		height: 0;
		left: 0;
		bottom: -40px;
		border-width: 20px 50px;
		border-style: solid;
		border-color: red red transparent transparent;
		@media screen and (max-width: 480px) {
			display: none;
		}
		@media screen and (max-width: 767px) {
			bottom: -39px;
			border-width: 20px 39px;
		}
	}
	a {
		letter-spacing: 2px;
		font-size: 2.5rem;
		text-decoration: none;
		text-align: center;
		line-height: 2;
		font-family: "Potta One", cursive;

		transform: rotate(-7deg);
		@media screen and (max-width: 767px) {
			font-size: 1.5rem !important;
		}
	}

	@media screen and (max-width: 767px) {
		width: auto;
		min-height: auto;
		top: 0;
	}
`;

export const NavLink = styled(Link)`
	color: #fff;
	font-size: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	cursor: pointer;

	@media screen and (max-width: 400px) {
		position: absolute;
		top: 10px;
		left: 25px;
	}
`;

export const NavIcon = styled.div`
	display: block;
	position: absolute;
	/* top: 0; */
	right: 0;
	line-height: 1.6;
	cursor: pointer;
	color: #fff;
	p {
		transform: translate(-150%, 100%);
		/* font-weight: 400; */
	}
`;

export const Bars = styled(RiMenu3Fill)`
	font-size: 2rem;
	transform: translate(-50%, -15%);
`;
