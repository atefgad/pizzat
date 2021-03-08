import styled from "styled-components";
import { MdRemoveShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

export const CartContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

export const ShoppingCartContainer = styled.div`
	width: 70%;
	height: auto;
	margin: 80px 0;
	background: #ffffff;
	box-shadow: 1px 2px 8px 0px rgba(0, 0, 0, 0.1);
	border-radius: 6px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	@media (max-width: 768px) {
		width: 100%;
	}
`;

/* Cart Total Area */
export const CartTotalArea = styled.div`
	width: 25%;
	background-color: #f5f5f5;
	box-shadow: 1px 3px 8px 0px rgba(0, 0, 0, 0.2);
	padding: 40px 40px 45px;
	margin-left: 2%;
	max-height: 300px;
	/* Responsive */
	@media (max-width: 768px) {
		width: 100%;
	}
	/* Responsive */
	@media (max-width: 1024px) {
		padding: 15px 25px;
	}
`;
export const CartTotalInfo = styled.div`
	padding: 0;
`;
export const CartTotalInfoList = styled.ul`
	border-bottom: 1px solid #dddddd;
	margin-bottom: 25px;
	padding-bottom: 15px;
	font-size: 16px;
`;
export const CartListSubtotal = styled.li`
	display: flex;
	align-items: center;
	font-weight: 500;
	margin-bottom: 10px;
`;
export const CartListSubtotalItem = styled.span`
	display: inline-block;
	flex: 0 0 calc(100% - 100px);
	max-width: calc(100% - 100px);
	text-align: left;
`;
export const SubtotalItemVal = styled.strong`
	color: black;
	display: inline-block;
	flex: 0 0 100px;
	font-weight: 500;
	max-width: 100px;
	text-align: right;
`;
export const CartTotalAmount = styled.h3`
	display: flex;
	font-size: 21px;
	justify-content: space-between;
	margin-bottom: 15px;
	text-transform: capitalize;
`;
export const CartTotalAmountval = styled.span`
	color: #c51c23;
`;

export const CartTotalLink = styled.div`
	text-align: center;
	position: relative;
	bottom: -45px;
`;
export const CartTotalBtn = styled.button`
	border-radius: 35px;
	letter-spacing: 0.07em;
	color: white;
	background-color: #c51c23;
	text-transform: uppercase;
	padding: 1rem 4rem;
	background-color: #e31837;
	color: #fff;
	cursor: pointer;
	transition: 0.3s ease-out;
	&:hover {
		background-color: #ffc500;
		color: #000;
	}
`;

/* EmptyShoppingCart */
export const EmptyShoppingCart = styled.div`
	padding: 30px 0;
	text-align: center;
`;

export const EmptyCartIcon = styled(MdRemoveShoppingCart)`
	font-size: 7rem;
	color: #cacaca;
`;

export const EmptyShoppingCartTitle = styled.h2`
	margin-top: 20px;
	font-size: 22px;
	text-transform: capitalize;
	line-height: 1.2em;
	color: #796468;
	font-weight: 400;
	position: relative;
`;
export const EmptyShoppingLink = styled(Link)`
	font-weight: 700;
	text-decoration: none;
	font-size: 1rem;
	padding: 0.7rem 2rem;
	background-color: #e31837;
	color: #fff;
	border-radius: 20px;
	transition: 0.3s ease-out;
	&:hover {
		background-color: #fdc500;
	}
`;
