import React from "react";
import {
	FeatureContainer,
	FeatureTitle,
	FeatureP,
	FeatureBtn,
} from "./featureStyle";

const Feature = ({ heading, subHeading }) => {
	return (
		<FeatureContainer className="top-shape">
			<FeatureTitle>{heading}</FeatureTitle>
			<FeatureP>{subHeading}</FeatureP>
			<FeatureBtn>order now</FeatureBtn>
		</FeatureContainer>
	);
};

export default Feature;
