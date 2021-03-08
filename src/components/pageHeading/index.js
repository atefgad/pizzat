import React from "react";
import { PageHeadingContent, PageTitle } from "./pageHeadingStyle";

const PageHeading = ({ title }) => {
	return (
		<PageHeadingContent>
			<PageTitle>{title}</PageTitle>
		</PageHeadingContent>
	);
};

export default PageHeading;
