import React from "react";
import {
	FaFacebook,
	FaInstagram,
	FaYoutube,
	FaTwitter,
	FaLinkedin,
	FaPizzaSlice,
} from "react-icons/fa";
import {
	FooterContainer,
	FooterWrap,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	SocialIcons,
	SocialIconLink,
	CopyRight,
	CopyRightLink,
} from "./FooterStyle";

const Footer = () => {
	return (
		<FooterContainer>
			<FooterWrap>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to="/">
							Pizzat <FaPizzaSlice color="#fd7f33" size="1.5rem" />
						</SocialLogo>
						<CopyRight>
							<p>
								©2020 developed by{" "}
								<CopyRightLink
									href="https://atef-gad.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									atef gad
								</CopyRightLink>
							</p>
						</CopyRight>
						<SocialIcons>
							<SocialIconLink
								href="/"
								target="_blank"
								aria-label="Facebook"
								rel="noopener noreferrer"
							>
								<FaFacebook />
							</SocialIconLink>
							<SocialIconLink
								href="/"
								target="_blank"
								aria-label="Instagram"
								rel="noopener noreferrer"
							>
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink
								href="/"
								target="_blank"
								aria-label="Youtube"
								rel="noopener noreferrer"
							>
								<FaYoutube />
							</SocialIconLink>
							<SocialIconLink
								href="//www.twitter.com/briandesignz"
								target="_blank"
								aria-label="Twitter"
								rel="noopener noreferrer"
							>
								<FaTwitter />
							</SocialIconLink>
							<SocialIconLink
								href="/"
								target="_blank"
								aria-label="Linkedin"
								rel="noopener noreferrer"
							>
								<FaLinkedin />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
