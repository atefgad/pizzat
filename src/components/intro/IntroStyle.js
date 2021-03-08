import styled from "styled-components";
import ImgBg from "../../assets/images/pizza-3.jpg";

export const IntroContainer = styled.section`
	background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
		url(${ImgBg});
	height: 800px;
	background-position: center;
	background-size: cover;
	padding-top: 25px;
`;

export const IntroContent = styled.div`
	height: calc(800px - 80px);
	max-height: 100%;
	width: 100vw;
	padding: 0rem calc((100vw - 1300px) / 2);
`;

export const IntroItems = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	height: 100vh;
	max-height: 100%;
	padding: 0 2rem;
	width: 650px;
	text-transform: uppercase;
	line-height: 1;
	font-weight: bold;
	color: #fff;

	@media screen and (max-width: 650px) {
		width: 100%;
	}
`;

export const IntroHeading = styled.h1`
	font-size: clamp(2.5rem, 10vw, 5rem);
	margin-bottom: 1rem;
	letter-spacing: 5px;
	padding: 0 10px 10px;
	box-shadow: 8px 8px #e9ba23;
`;

export const IntroP = styled.p`
	font-size: 1.3rem;
	margin-bottom: 2rem;
	font-weight: 400;
	text-transform: capitalize;
	line-height: 1.3;
`;

export const IntroBtn = styled.button`
	font-size: 1.4rem;
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
