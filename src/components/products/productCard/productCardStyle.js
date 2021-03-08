import styled from "styled-components";
import { MdAddShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
// Card Box
export const ProCardBoxWrapper = styled.div`
	background-color: #fff;
	overflow: hidden;
	/* max-width: 320px; */
	width: 400px;
	box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.2);
	padding: 0;
	text-align: center;
	margin: 0 1rem 2rem 1rem;
	width: 400px;
	/* box-shadow: 8px 8px 8px #fdc500; */
	&:hover img {
		transform: scale(1.2);
	}
`;
// Card Box Image
export const BoxImg = styled.img`
	width: 100%;
	max-height: 300px;
	transition: all 1.3s 0.3s ease;
`;

// Card Box Content
export const BoxContent = styled.div`
	position: relative;
	padding: 15px;
	z-index: 1;
	&:before {
		content: "";
		width: 200%;
		height: 100px;
		position: absolute;
		display: block;
		background-color: #fff;
		transform: rotate(-8deg);
		top: -60px;
		left: -10%;
		z-index: -1;
	}
`;
// Card Title
export const Title = styled.div`
	font-size: 1.6em;
	font-weight: 700;
	margin: 0;
`;
// Card Box Description
export const Desc = styled.div`
	font-size: 1.1rem;
	color: #6e7377;
	margin-top: 8px;
`;

// Add To Card Button
export const AddToCartBtn = styled.a`
	display: block;
	top: -90px;
	right: 30px;
	z-index: 2;
	width: 70px;
	height: 70px;
	position: absolute !important;
	background-color: transparent;
	cursor: pointer;
	transition: 0.3s linear;
`;
// Card Span
export const AddToCartSpan = styled.span`
	width: 70px;
	height: 70px;
	background-color: ${({ isAdd }) => (isAdd ? "#4CAF50" : "#e31837")};
	opacity: ${({ isAdd }) => (isAdd ? ".7" : "1")};
	display: block;
	border-radius: 50%;
	position: relative;
	font-size: 36px;
	color: #fff;
	transition: all 0.3s linear;
	display: flex;
	justify-content: center;
	align-items: center;
	&:hover {
		background-color: ${({ isAdd }) => (isAdd ? "#4CAF50" : "#ffc500")};
	}
`;
// True Mark..when added item
export const Success = styled.div`
	position: absolute;
	top: 50%;
	left: 25%;
	/* transform: translate(-50%, -50%); */
	transition: all 0.3s 0.1s;
	opacity: ${({ isAdd }) => (isAdd ? "1" : "0")};
	transform: ${({ isAdd }) => (isAdd ? "scale(1)" : "scale(0)")};
	z-index: 999;
	&:before,
	&:after {
		content: "";
		display: block;
		position: absolute;
		background-color: #fff;
	}
	&:before {
		width: 20px;
		height: 7px;
		transform: rotate(45deg);
	}
	&:after {
		width: 35px;
		height: 7px;
		transform: rotate(-45deg);
		top: -4px;
		left: 9px;
	}

	/* when clicked */
`;

// Card Icon
export const AddToCartIcon = styled(MdAddShoppingCart)`
	padding: 15px;
	font-size: 4rem;
	${({ isAdd }) => (isAdd ? "display:none" : "")};
`;

// Card AddToFav
export const AddToFav = styled.a`
	display: block;
	top: -70px;
	right: 115px;
	z-index: 2;
	width: 50px;
	height: 50px;
	background-color: #ffc500;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	position: absolute !important;
	cursor: pointer;
	transition: 0.3s linear;
	color: #fff;
	&:hover {
		background-color: ${({ isAdd }) => (isAdd ? "#ffc500" : "#e31837")};
	}
`;
export const AddToFavIcon = styled(FaRegHeart)`
	font-size: 1.6rem;
`;

// Price
export const Price = styled.span`
	font-size: 2em;
	font-weight: 400;
	width: auto;
	margin: 20px auto;
	color: #e0465d;
	display: inline-block;
	position: relative;
	&:after,
	&:before {
		content: "";
		height: 1px;
		width: 50px;
		display: block;
		position: absolute;
		background-color: #ddd;
		top: 25px;
	}
	&:before {
		left: -50px;
	}
	&:after {
		right: -50px;
	}
`;

// Card Footer
export const CardFooter = styled.div``;
export const CardFooterUl = styled.ul`
	list-style: none;
	padding: 0;
	margin: 1em 0;
`;
export const CardFooterli = styled.li`
	color: #efd829;
`;
