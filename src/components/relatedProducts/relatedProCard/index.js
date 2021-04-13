import React from "react";
import { ReProCard, CardHeading, CardImg } from "./RelatedProCardStyle";

const RelatedProCard = (product) => {
	console.log("CardImg", product);
	return (
		<ReProCard>
			<CardImg />
			<CardHeading></CardHeading>
		</ReProCard>
	);
};

export default RelatedProCard;
