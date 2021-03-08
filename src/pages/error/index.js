import React from "react";
import {
	ErrorPageContainer,
	ErrorPageImg,
	ErrorPageTitle,
	ErrorPageText,
	ErrorPageLink,
} from "./errorStyle";
import Img404 from "../../assets/images/404.png";

const Error404 = () => {
	return (
		<ErrorPageContainer>
			<ErrorPageImg src={Img404} alt="page not found..!" />
			<ErrorPageTitle>Oop, that link is broken.</ErrorPageTitle>
			<ErrorPageText>
				Page doesn’t exist or some other error occured. Go to{" "}
				<ErrorPageLink to="/"> Home Page</ErrorPageLink>
			</ErrorPageText>
		</ErrorPageContainer>
	);
};

export default Error404;
