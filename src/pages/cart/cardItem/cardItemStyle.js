import styled, { keyframes, css } from "styled-components";
import heartImgURL from "../../../assets/images/animate-heart.png";

export const CardItem = styled.div`
	padding: 20px 30px;
	height: 170px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	border-bottom: 1px solid #e1e8ee;
	&:last-child {
		border-bottom: none;
	}
	/* Responsive */
	@media (max-width: 768px) {
		height: auto;
		justify-content: center;
		flex-direction: column;
	}
`;

/* Buttons -  Delete and Like */
export const CardButtons = styled.div`
	position: relative;
	width: 15%;
	/* Responsive */
	@media (max-width: 768px) {
		margin-bottom: 20px;
	}
`;
export const DeleteBtn = styled.span`
	display: inline-block;
	cursor: pointer;
	margin-right: 20px;
	font-size: 18px;
	line-height: 18px;
	color: #8c959c;
	transition: 0.3s;
	&:hover {
		color: #e31837;
	}
`;

const keyAnimate = keyframes`
	0%   { background-position: left;  }
	50%  { background-position: right; }
	100% { background-position: right; }
  `;
export const FavBtn = styled.span`
	position: absolute;
	top: -20px;
	left: 15px;
	display: inline-block;
	background: url(${heartImgURL});
	width: 60px;
	height: 60px;
	background-size: 2900%;
	background-repeat: no-repeat;
	cursor: pointer;
	${({ isActive }) =>
		isActive
			? css`
					animation-name: ${keyAnimate};
					animation-duration: 0.8s;
					animation-iteration-count: 1;
					animation-timing-function: steps(28);
					animation-fill-mode: forwards;
			  `
			: ""};
`;

/* card image */
export const CardImg = styled.div`
	width: 20%;
	height: 100%;
	/* Responsive */
	@media (max-width: 800px) {
		width: 100px;
		text-align: center;
	}
	img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		border: 5px solid #e1e8ee;
	}
`;

/* card descraption */
export const CardDescription = styled.div`
	text-align: center;
	width: 20%;
	a span {
		display: block;
		font-size: 16px;
		color: #000 !important;
		font-weight: 400 !important;
	}
	span:last-child {
		margin-left: 5px;
		font-weight: 300;
		margin-top: 8px;
		color: #86939e;
	}
	/* Responsive */
	@media (max-width: 768px) {
		width: 100%;
	}
`;

/* quantity */
export const CardQuantity = styled.div`
	/* padding-top: 20px;
	margin-right: 60px; */
	width: 20%;
	/* Responsive */
	@media (max-width: 768px) {
		width: 100%;
		text-align: center;
		margin: 15px 0;
	}
`;
export const PlusBtn = styled.button`
	width: 40px;
	height: 40px;
	background-color: #e1e8ee;
	border-radius: 50%;
	border: none;
	font-size: 18px;
	line-height: 18px;
	cursor: pointer;
	transition: 0.3s linear;
	&:hover {
		transform: scale(1.1);
		color: red;
	}
`;
export const MinusBtn = { ...PlusBtn };
export const QntInput = styled.input`
	-webkit-appearance: none;
	border: none;
	text-align: center;
	width: 32px;
	font-size: 16px;
	color: #43484d;
	font-weight: 300;
`;
export const Price = { ...CardDescription };
