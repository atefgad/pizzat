import styled from "styled-components";
import { Link } from "react-router-dom";

export const FavContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

export const FavContent = styled.div`
	width: 60%;
	height: auto;
	margin: 80px 0;
	background: #ffffff;
	box-shadow: 1px 2px 8px 0px rgba(0, 0, 0, 0.1);
	border-radius: 6px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	@media (max-width: 992px) {
		width: 90%;
	}
	@media (max-width: 768px) {
		width: 100%;
	}
`;

/* EmptyShoppingCart */
export const EmptyFav = styled.div`
	padding: 30px 0;
	text-align: center;
`;

export const EmptyFavTitle = styled.h2`
	margin-top: 20px;
	font-size: 22px;
	text-transform: capitalize;
	line-height: 1.2em;
	color: #796468;
	font-weight: 400;
	position: relative;
`;
export const EmptyFavLink = styled(Link)`
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
