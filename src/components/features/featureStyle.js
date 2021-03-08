import styled from "styled-components";
import FeatureImgBg from "../../assets/images/featured2.jpg";

export const FeatureContainer = styled.div`
	background: linear-gradient(to right, rgb(0 0 0 / 88%), rgb(0 0 0 / 51%)),
		url(${FeatureImgBg});
	height: 100vh;
	max-height: 500px;
	background-position: center;
	background-size: cover;
	padding: 0 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
	color: #fff;
`;

export const FeatureTitle = styled.h2`
	font-size: clamp(3rem, 5vw, 5rem);
	margin-top: 3rem;
`;

export const FeatureP = styled.p`
	font-size: clamp(1rem, 5vw, 2rem);
	margin-top: 1rem;
	margin-bottom: 2.5rem;
`;

export const FeatureBtn = styled.button`
	font-size: 1.4rem;
	padding: 0.6rem 3rem;
	border: none;
	background-color: #ffc500;
	color: #000;
	transition: 0.2s ease-out;
	margin-bottom: 1rem;

	&:hover {
		color: #fff;
		background-color: #e31837;
		cursor: pointer;
	}
`;
