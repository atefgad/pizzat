import React from "react";
import {
	FaFacebook,
	FaInstagram,
	FaYoutube,
	FaTwitter,
	FaLinkedin,
	FaWhatsapp,
} from "react-icons/fa";
import { SocialIcons, SocialIconLink } from "./FooterStyle";

const SocialIconsList = () => {
	return (
		<>
			<SocialIcons>
				<SocialIconLink
					href="/"
					target="_blank"
					aria-label="Facebook"
					title="Facebook"
					rel="noopener noreferrer"
				>
					<FaFacebook />
				</SocialIconLink>
				<SocialIconLink
					href="/"
					target="_blank"
					aria-label="Instagram"
					title="Instagram"
					rel="noopener noreferrer"
				>
					<FaInstagram />
				</SocialIconLink>
				<SocialIconLink
					href="/"
					target="_blank"
					aria-label="Youtube"
					title="Youtube"
					rel="noopener noreferrer"
				>
					<FaYoutube />
				</SocialIconLink>
				<SocialIconLink
					href="www.twitter.com"
					target="_blank"
					aria-label="Twitter"
					title="Twitter"
					rel="noopener noreferrer"
				>
					<FaTwitter />
				</SocialIconLink>
				<SocialIconLink
					href="/"
					target="_blank"
					aria-label="Linkedin"
					title="Linkedin"
					rel="noopener noreferrer"
				>
					<FaLinkedin />
				</SocialIconLink>
				<SocialIconLink
					href="/"
					target="_blank"
					aria-label="Whatsapp"
					title="Whatsapp"
					rel="noopener noreferrer"
				>
					<FaWhatsapp />
				</SocialIconLink>
			</SocialIcons>
		</>
	);
};

export default SocialIconsList;
