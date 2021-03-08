import styled, { keyframes, css } from "styled-components";
import heartImgURL from "../../../assets/images/animate-heart.png";

export const ProductCard = styled.div`
	margin: 0 1rem 2rem 1rem;
	/* box-shadow: 1px 4px 10px 2px #4c48486b; */
	width: 400px;
	padding: 25px 1.5rem;
	overflow: hidden;
	text-align: center;
	position: relative;
`;

export const ProductPrice = styled.div`
	position: absolute;
	background: #fdc500;
	display: block;
	left: 15px;
	top: 20%;
	border-radius: 10px;
	font-weight: 400;
	font-size: 1.5rem;
	padding: 5px 15px;
	color: #fff;
`;

export const ProductImg = styled.img`
	height: 300px;
	min-width: 300px;
	max-width: 100%;
	box-shadow: 8px 8px #fdc500;
	/* border-radius: 50%; */
`;

export const ProductTitle = styled.h2`
	font-weight: 400;
	font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	text-align: center;
`;

export const ProductDesc = styled.p`
	margin-bottom: 1rem;
`;

export const ProductLinks = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;
`;

const keyAnimate = keyframes`
0%   { background-position: left;  }
50%  { background-position: right; }
100% { background-position: right; }
`;
export const ProductWishListIcon = styled.span`
	position: relative;
	top: 0;
	left: 15px;
	display: inline-block;
	background: url(${heartImgURL});
	width: 50px;
	height: 50px;
	background-size: 2900%;
	background-repeat: no-repeat;
	background-color: #fdc500;
	box-shadow: 8px 8px #e31837;
	/* border-radius: 50%; */
	cursor: pointer;
	${({ isActive }) =>
		isActive
			? css`
					animation-name: ${keyAnimate};
					animation-duration: 0.8s;
					animation-iteration-count: 1;
					animation-timing-function: steps(28);
					animation-fill-mode: forwards;

					background-color: #ffc500;
					box-shadow: 8px 8px 13px 0px #735b09;
					transition: 0.2s ease-out;
					cursor: pointer;
					color: #000;
			  `
			: ""};

	&:hover {
		background-color: #ffc500;
		box-shadow: 8px 8px 13px 0px #735b09;
		transition: 0.2s ease-out;
		cursor: pointer;
		color: #000;
	}
`;

export const ProductButton = styled.a`
	font-size: 1rem;
	padding: 10px;
	min-width: 190px;
	border: none;
	line-height: 2rem;

	/* border-radius: 20px 0 10px 0; */
	/* border-radius: 20px 50px 150px 50px; */
	/* box-shadow: 8px 8px 13px 0px #900e22; */
	box-shadow: 8px 8px #fdc500;
	background-color: #e31837;
	color: #fff;
	transition: 0.2s ease-out;
	${({ disabled }) =>
		disabled
			? css`
					background-color: #ffc500;
					box-shadow: 8px 8px 13px 0px #735b09;
					transition: 0.2s ease-out;
					cursor: pointer;
					color: #000;
			  `
			: ""};
	&:hover {
		background-color: #ffc500;
		box-shadow: 8px 8px 13px 0px #735b09;
		transition: 0.2s ease-out;
		cursor: pointer;
		color: #000;
	}

	&:active {
		box-shadow: ${({ disabled }) =>
			disabled ? "8px 8px 13px 0px #735b09" : "none"};
	}
`;
