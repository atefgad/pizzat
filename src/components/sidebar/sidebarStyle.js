import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

// import PizzaBgImg from "../../images/logo.png";
//import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
	position: fixed;
	top: 0;
	right: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};
	display: grid;
	align-items: center;
	height: 100%;
	width: 350px;
	padding: 0 3rem;
	background-color: #ffc500;
	box-shadow: 6px 11px 20px 8px rgba(0, 0, 0, 0.6);
	transition: 0.3s ease-in-out;
	z-index: 9999999;

	&:before {
		content: "";
		position: absolute;
		top: -15px;
		right: 0;
		height: 150px;
		width: 150px;
		background-color: #f90;
		z-index: -1;
		opacity: 0.5;
		border-radius: 40% 60% 80% 550%;
		transition: 0.4s ease-out;
	}

	@media screen and (max-width: 400px) {
		width: 100%;
	}
`;

// export const CloseIcon = styled(FaTimes)`
// 	transition: 0.3s ease-in-out
// 	color: #000;

// 	&:hover {
// 		color: #e31837;
// 		transition: 0.3s ease-in-out;
// 	}
// `;

export const SidebarIcon = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;
	background: transparent;
	border: transparent;
	font-size: 2rem;
	cursor: pointer;
	outline: none;
`;
export const CloseIcon = styled(FaTimes)`
	position: absolute;
	top: 0.7rem;
	right: 0.7rem;
	font-size: 2.5rem;
	color: #e31837;
	transition: 0.3s ease-in-out;

	&:hover {
		color: #fff;
	}
`;

export const SidebarMenu = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-auto-rows: repeat(3, 80px);
	text-align: center;
	margin-top: 30%;

	@media screen and (max-width: 480px) {
		grid-template-rows: repeat() (3, 60px);
	}

	/* display: flex;
	justify-content: space-around;
	flex-direction: column;
	text-align: center;
	align-items: center;
	padding-top: 20%;
	height: 80%; */
`;

export const SidebarLink = styled(Link)`
	display: block;
	font-size: 2.5rem;
	text-decoration: none;
	list-style: none;
	color: #fff;
	font-family: "Potta One", cursive;
	cursor: pointer;
	padding: 7px 0;
	transition: 0.3s ease-in-out;
	&:hover {
		color: #e31837;
	}
`;

export const SideBtnWrap = styled.div`
	display: flex;
	justify-content: center;
`;

export const SidebarRout = styled(Link)`
	background-color: #e31837;
	white-space: nowrap;
	color: #fff;
	padding: 16px 64px;
	font-size: 16px;
	outline: none;
	border: none;
	cursor: pointer;
	text-decoration: none;
	transition: 0.3s ease-in-out;

	&:hover {
		background-color: #fff;
		color: #010606;
		transition: 0.3s ease-in-out;
	}
`;

// export const PizzaBgLogo = styled.div`
// 	position: absolute;
// 	top: 0;
// 	right: 5px;
// 	height: 150px;
// 	width: 150px;
// 	background-color: #f90;
// 	z-index: -1;
// 	opacity: 0.5;
// 	border-radius: 40% 60% 40% 30%;
// `;
