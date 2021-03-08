import styled from "styled-components";
import bgImgURL from "../../assets/images/menu_pattern3-min.png";
import headingBgImgURL from "../../assets/images/double_heading.svg";

export const ProductsContainer = styled.div`
	width: 100vw;
	/* min-height: 100vh; */
	padding: 3rem 2rem 0 2rem;
	color: #150f0f;
	position: relative;
	background-position: center;
	background-size: cover;
	background: url(${bgImgURL});
`;

export const ProductWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 0 auto;
`;

export const ProductHeading = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 3rem;
	&:before {
		content: "";
		position: absolute;
		z-index: 1;
		width: 90px;
		height: 11px;
		bottom: 0;
		background-image: url(${headingBgImgURL});
	}
`;

export const ProductHeadTitle = styled.h1`
	/* font-size: clamp(2rem, 2.5vw, 3rem); */
	text-align: center;
	margin-bottom: 2rem;
	font-size: 2.5rem;
	font-family: "Montserrat", sans-serif;
	font-weight: 900;
	text-transform: uppercase;
`;
