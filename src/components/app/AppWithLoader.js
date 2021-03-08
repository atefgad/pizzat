import React, { lazy, Suspense } from "react";
import { GlobalStyle } from "../../globalStyle";
import Preloader from "../preloader";

const IntroSection = lazy(() => import("../intro"));
const Routers = lazy(() => import("../router"));
const Footer = lazy(() => import("../footer"));

const renderLoader = () => <Preloader />;

const AllComponents = () => (
	<Suspense fallback={renderLoader()}>
		<IntroSection />
		<Routers />
		<Footer />
	</Suspense>
);

function App() {
	return (
		<React.Fragment>
			<GlobalStyle />
			<AllComponents />
		</React.Fragment>
	);
}

export default App;
