import React, { lazy, Suspense, useState, useEffect } from "react";
import { GlobalStyle } from "../../globalStyle";
import { useLocation } from "react-router-dom";
import Preloader from "../preloader";

const IntroSection = lazy(() => import("../intro"));
const MiniCart = lazy(() => import("../miniCart"));
const Routers = lazy(() => import("../router"));
const Footer = lazy(() => import("../footer"));

const renderLoader = () => <Preloader />;

function MiniCartView() {
	let location = useLocation();
	console.log(location.pathname);
	if (location.pathname === "/cart" || location.pathname === "/registration") {
		return null;
	}
	return <MiniCart />;
}

const AllComponents = () => (
	<Suspense fallback={renderLoader()}>
		<IntroSection />
		<MiniCartView />
		<div className="fullPageContent">
			<Routers />
		</div>
		<Footer />
	</Suspense>
);

function App() {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => setLoading(false), 2000);
	}, []);

	return (
		<React.Fragment>
			{loading === false ? (
				<>
					<GlobalStyle />
					<AllComponents />
				</>
			) : (
				<Preloader />
			)}
		</React.Fragment>
	);
}

export default App;
