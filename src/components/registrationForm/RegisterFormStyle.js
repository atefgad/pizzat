import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const RegisterContainer = styled(motion.div)`
	padding: 0 50px 50px 50px;
	text-align: center;
	height: auto;
	max-width: 720px;
	border: 1px solid #ddd;
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

export const FormContent = styled.div`
	/* width: 70%; */
	margin-top: 2.5rem;
`;

export const FormHeading = styled.h3`
	font-size: 22px;
	text-transform: uppercase;
	font-weight: 400;
	margin-bottom: 1rem;
`;

export const Form = styled.form`
	margin: 0;
`;

export const FormGroup = styled.div`
	margin-bottom: 10px;
	${({ col }) =>
		col
			? css`
					display: flex;
					flex-direction: row;
					justify-content: flex-end;
					align-items: center;
			  `
			: null};
`;

export const FormInput = styled.input`
	border-bottom: 2px solid #dddddd;
	background: transparent;
	width: 100%;
	padding: 10px 0 5px;
	height: 50px;
	line-height: 54px;
	transition: 0.3s ease-out;
	outline: none;
	&:focus {
		box-shadow: none;
		border-color: #c51c23;
	}
`;

export const FormBtnGroup = styled.div`
	padding-top: 15px;
	display: flex;
	align-items: center;
`;

export const FormBtn = styled.button`
	letter-spacing: 0.175em;
	padding: 14px 25px;
	border-radius: 35px;
	color: white;
	background-color: #c51c23;
	text-transform: uppercase;
	transition: 0.2s ease-out;
	cursor: pointer;
	width: ${({ width }) => (width ? width : "10rem")};
	&:hover {
		background-color: #ffc500;
		color: #000;
	}
`;

export const FormForgetPass = styled.div`
	font-size: 16px;
	padding-left: 20px;
	text-align: right;
	line-height: 1.4em;
	color: #666666;
`;
export const PassLink = styled(Link)`
	color: #c51c23;
	text-decoration: none;
	transition: 0.3s;
	&:hover {
		color: #000;
	}
`;

export const FormOtherLinks = styled.div`
	margin-top: 30px;
	display: flex;
	align-items: center;
	flex-direction: column;
`;
export const OtherLinksText = styled.div`
	color: #fff;
	width: 70px;
	height: 70px;
	line-height: 70px;
	border-radius: 50%;
	font-size: 30px;
	font-weight: 400;
	margin-bottom: 20px;
	text-transform: uppercase;
	background-color: #ffc500;
	position: relative;
	box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.8);
	&:before,
	&:after {
		content: "";
		height: 1px;
		width: 100px;
		display: block;
		position: absolute;
		background-color: #ddd;
		top: 35px;
	}
	&:before {
		left: -100px;
	}
	&:after {
		right: -100px;
	}
`;

export const OtherLinksSocial = styled.div`
	margin-top: 20px;
	margin-bottom: 20px;
`;
export const SocialUl = styled.ul`
	margin-bottom: 0px;
	padding-left: 0;
	list-style: none;
`;
export const SocialLi = styled.li`
	display: inline-block;
	margin: 0 5px;
	display: flex;
	flex-direction: row;
	align-items: center;
	align-content: center;
`;
export const SocialLink = styled(Link)`
	font-size: 22px;
	height: 50px;
	line-height: 55px;
	width: 50px;
	margin: 0 10px;
	display: block;
	border-radius: 50%;
	background-color: #3b5997;
	text-align: center;
	color: white;
	&:nth-child(2) {
		background-color: #54aced;
	}
	&:nth-child(3) {
		background-color: #db4d41;
	}
`;
