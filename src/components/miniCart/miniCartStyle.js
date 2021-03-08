import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { motion } from "framer-motion";

export const MiniCartContent = styled(motion.div)`
	width: 60px;
	height: 60px;
	position: fixed;
	right: 30px;
	top: 30%;
	border-radius: 50%;
	background-color: #fff;
	box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 999;
	cursor: pointer;
	&:hover span {
		transition: 0.2s linear;
		transform: scale(1.5);
	}
`;
export const CartCount = styled.span`
	position: absolute;
	top: -25px;
	right: -18px;
	display: block;
	height: 30px;
	width: 30px;
	line-height: 19px;
	font-size: 22px;
	background: #e31837;
	color: #fff;
	padding: 5px;
	border-radius: 20px;
	text-align: center;
`;
export const MiniCartLink = styled(Link)`
	&::after {
		right: -20px !important;
		top: 45px !important;
		left: unset !important;
		color: #e9ba23 !important;
	}
`;
export const MiniCartIcon = styled(FiShoppingCart)`
	color: #e31837;
	font-size: 25px;
`;
