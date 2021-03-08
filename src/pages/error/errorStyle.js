import styled from "styled-components";
import { Link } from "react-router-dom";

export const ErrorPageContainer = styled.div`
	padding-bottom: 195px;
	padding-top: 40px;
	max-width: 720px;
	margin-right: auto;
	margin-left: auto;
	text-align: center;
	position: relative;
`;

export const ErrorPageHeader = styled.div``;
export const ErrorPageImg = styled.img`
	display: inline-block;
	max-width: 100%;
	width: 100%;
`;

export const ErrorPageTitle = styled.h1`
	font-size: 60px;
	font-weight: 400;
	letter-spacing: 0;
	color: #000;
`;

export const ErrorPageText = styled.div`
	font-size: 18px;
	color: #000;
	line-height: 36px;
`;

export const ErrorPageLink = styled(Link)`
	text-decoration: none;
	color: red;
	transition: 0.3s ease-in-out;
	&:hover {
		color: #fdc500;
	}
`;
