import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
	width: 100%;
	background-color: #0d0909;
	color: #fff;
`;

export const FooterWrap = styled.div`
	padding: 16px 24px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 1300px;
	margin: 0 auto;
`;

export const SocialMedia = styled.section`
	max-width: 1300px;
	width: 100%;
`;

export const SocialMediaWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1100px;
	margin: 16px auto 0 auto;

	@media screen and (max-width: 820px) {
		flex-direction: column;
	}
`;

export const SocialLogo = styled(Link)`
	color: #fff;
	justify-self: start;
	cursor: pointer;
	text-decoration: none;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	margin-bottom: 16px;
	font-weight: bold;
	letter-spacing: 2px;
`;

export const SocialIcons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	/* width: 240px; */
`;

export const SocialIconLink = styled.a`
	color: #fff;
	font-size: 24px;
	margin-right: 10px;
	transition: 0.3s ease-in;
	&:last-child {
		margin-right: 0;
	}
	&:hover {
		color: #fe7f34;
	}
`;

export const CopyRight = styled.div`
	margin-bottom: 16px;
`;
export const CopyRightLink = styled.a`
	color: #fdc500;
	font-size: 1.1rem;
	font-weight: bold;
	text-decoration: none;
	transition: 0.3s ease-in;

	&:hover {
		color: #e31837;
	}
`;
