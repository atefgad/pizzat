import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const RegisterContainer = styled(motion.div)`
	padding: 0 50px 50px 50px;
	text-align: center;
	height: auto;
	max-width: 720px;
	border: 1px solid #ddd;
	border-top: none;
	border-radius: 20px;
	margin: auto;
`;

export const RegisterRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-right: -15px;
	margin-left: -15px;
`;
export const SignInForm = styled.div`
	display: ${({ active }) => (active === true ? "block" : "none")};
`;
export const SignupForm = styled.div`
	display: ${({ active }) => (active === true ? "block" : "none")};
`;

export const SwitcherWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
`;
export const SwitcherBtn = styled.button`
	letter-spacing: 0.175em;
	padding: 14px 25px;
	width: 10rem;
	/* border-radius: 35px; */
	color: #fff;
	background-color: ${({ active }) =>
		active === true ? "#ffc500;" : "#c51c23"};
	text-transform: uppercase;
	transition: 0.2s ease-out;
	cursor: pointer;
	&:first-child {
		border-top-left-radius: 20px;
	}
	&:last-child {
		border-top-right-radius: 20px;
	}
`;

export const SwitcherSpan = styled.span`
	width: 50px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: azure;
	font-family: "Potta One", cursive;
	font-size: 18px;
	text-transform: uppercase;
`;
