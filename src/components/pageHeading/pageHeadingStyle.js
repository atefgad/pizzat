import styled from "styled-components";
import headingBgImgURL from "../../assets/images/double_heading.svg";

export const PageHeadingContent = styled.div`
	text-align: center;
`;

export const PageTitle = styled.h2`
	margin-bottom: 20px;
	font-size: 60px;
	text-transform: capitalize;
	line-height: 1.2em;
	color: #e31837;
	font-weight: 700;
	position: relative;
	text-align: center;
	&:before {
		content: "";
		position: absolute;
		z-index: 1;
		width: 90px;
		height: 11px;
		bottom: -12px;
		background-image: url(${headingBgImgURL});
	}
	/* Responsive */
	@media (max-width: 768px) {
		margin-bottom: 15px;
		font-size: 45px;
	}
`;
