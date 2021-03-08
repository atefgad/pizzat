import styled, { keyframes } from "styled-components";

const wavAnimate = keyframes`
0% {
	transform: translateX(-50%) skew(0deg, -8deg);
}
100% {
	transform: translateX(-30%) skew(8deg, -4deg);
}
`;

export const Container = styled.div`
	width: 80%;
	height: 100vh;
	max-height: 600px;
	display: flex;
	justify-content: center;
	position: relative;
	margin: 0 auto;
	&:before {
		content: "";
		display: block;
		position: fixed;
		width: 300%;
		height: 60%;
		top: 50%;
		left: 50%;
		border-radius: 100%;
		transform: translateX(-50%) skewY(-8deg);
		background-color: #f6c90e;
		z-index: -1;
		animation: ${wavAnimate} 8s ease-in-out infinite alternate;
	}
`;
export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	min-height: 300px;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;
export const ProductLeft = styled.div`
	flex: 0 50%;
	min-height: 150px;
	@media (max-width: 768px) {
		flex: 100%;
		margin-bottom: 30px;
	}
`;
export const ProImg = styled.img`
	width: 100%;
	max-height: 450px;
	border-radius: 50%;
	@media (max-width: 768px) {
		border-radius: 20px;
		max-height: 100%;
		max-width: 100%;
	}
`;

export const ProductRight = styled.div`
	flex: 0 50%;
	margin-left: 20px;
	@media (max-width: 768px) {
		flex: 100%;
		margin-left: 0;
	}
`;
export const ProContent = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
	flex-direction: row;
	@media (max-width: 992px) {
		flex-direction: column-reverse;
	}
`;
export const ProTitle = styled.h2`
	font-size: 2rem;
	font-weight: 400;
	letter-spacing: 1.5;
	/* font-family: "Playfair Display", serif; */
	line-height: 1.2em;
	margin-bottom: 15px;
`;
export const ProPrice = styled.span`
	font-size: 2rem;
	color: #e31837;
	margin-bottom: 15px;
	padding: 10px 25px;
	background: #eaf2f3;
	border-radius: 20px;
	margin-left: 15px;
`;
export const ProDesc = styled.div`
	margin-bottom: 15px;
	border-bottom: 1px solid #edeff2;
	padding-top: 20px;
	padding-bottom: 20px;
	color: #a3a7ad;
	font-size: 1rem;
`;

// Product Size
export const ProSize = styled.div`
	height: auto;
	margin: 17px 0 20px;
`;
export const Lable = styled.div`
	color: #333;
	font-size: 18px;
	margin: 10px 0 10px;
	/* margin-left: 10px; */
	text-align: center;
`;
// Select Size Btn
export const SQContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: row;
`;
export const SizeContainer = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
	flex-direction: row;
`;

// export const SizeContent = styled.div`
// 	/* position: relative; */
// 	border-radius: 50%;
// 	color: black;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	font-size: 1.2rem;
// 	font-weight: 400;
// 	height: 50px;
// 	width: 50px;
// 	border: 1px solid #e31837;
// 	color: #e31837;
// 	margin: 0 4px;

// 	position: relative;

// 	&:hover {
// 		background-color: #e31837;
// 		color: #fff;
// 	}
// 	lable {
// 		color: #e31837;
// 		height: 100%;
// 		width: 100%;
// 		cursor: pointer;
// 		transition: 0.3s ease-out;
// 	}
// `;
// export const SizeInput = styled.input`
// 	/* display: none;
// 	visibility: hidden;
// 	opacity: 0; */
// 	z-index: -1;
// 	position: absolute;
// 	opacity: 0;
// 	&:checked {
// 		color: #f90;
// 		opacity: 1;
// 		z-index: 999;
// 	}
// 	&:checked ~ div {
// 		background-color: #f90;
// 		opacity: 1;
// 		z-index: 999;
// 	}
// `;

// Select Size Btn
export const SizeBtn = styled.a`
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.2rem;
	font-weight: 400;
	height: 50px;
	width: 50px;
	border: 1px solid #e31837;
	color: #e31837;
	margin: 0 4px;
	cursor: pointer;
	position: relative;
	transition: 0.3s ease-out;
	${({ isActive }) =>
		isActive ? "background-color:#e31837;color: #fff;" : "#"};
	&:hover {
		background-color: #e31837;
		color: #fff;
	}
`;

// Buttons Section (addToCart, AddToFav, Share)
export const AddButtons = styled.div`
	margin-top: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const QntContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid #e31837;
	border-radius: 25px;
	height: 50px;
	width: 130px;
	margin-left: 10px;
	overflow: hidden;
`;
export const QntContentNum = styled.span`
	font-size: 1rem;
	display: block;
	margin: 0 20px;
	color: #000;
`;
export const QntPlus = styled.span`
	font-size: 1rem;
	cursor: pointer;
	display: block;
	color: #fff;
	background-color: #e31837;
	height: 100%;
	padding: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 0.3s ease-out;
	&:hover {
		color: #ddd;
		transform: scale(1.2);
	}
`;
export const QntMinus = { ...QntPlus };

// Add To Cart Btn
export const AddToCartBtn = styled.a`
	border-radius: 50%;
	color: black;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
	height: 70px;
	width: 70px;
	border: 1px solid #e31837;
	color: #e31837;
	margin: 0 4px;
	cursor: pointer;
	position: relative;
	transition: 0.3s ease-out;
	&:hover {
		background-color: #e31837;
		color: #fff;
	}
`;

// Add To Cart Fav
export const AddToFavBtn = { ...AddToCartBtn };

// Share Scoail Icons
export const ShareIconsBtn = styled.a`
	border-radius: 50%;
	color: black;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
	height: 70px;
	width: auto;
	border: 1px solid #e31837;
	color: #e31837;
	margin: 0 4px;
	cursor: pointer;
	position: relative;
	background-color: #e31837;
	color: #fff;
	width: auto;
	padding: 10px 20px;
	border-radius: 50px;
	transition: 0.3s ease-out;
	&:hover {
		background-color: #ad0d25;
		border: 1px solid #ad0d25;
	}
	&:hover > ul {
		opacity: 1;
		visibility: visible;
		top: 70px;
	}
`;

export const ShareIcons = styled.ul`
	list-style: outside none none;
	margin-bottom: 0;
	padding-left: 0;
	position: absolute;
	top: -30px;
	text-align: center;
	width: 100%;
	padding: 15px;
	opacity: 0;
	visibility: hidden;
	background-color: #f6f6f6;
	box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.2);
	border-radius: 20px;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	transition: all 0.25s;
	a {
		color: #e31837;
		display: block;
		font-size: 2rem;
		line-height: 4rem;
		&:hover {
			color: black;
		}
	}
`;
export const qnt = styled.div``;
