// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app/App";

import { Provider } from "react-redux";
import store from "./redux/store";

ReactDom.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
