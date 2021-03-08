import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/home";
import About from "../../pages/about";
import Favorites from "../../pages/favorites";
import Shop from "../../pages/shop";
import ShoppingCart from "../../pages/cart";
import Dashboard from "../../pages/dashboard";
import Error404 from "../../pages/error";
import Details from "../../pages/details";
import Registration from "../../pages/user/registration";

const Routers = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/shop" component={Shop} />
			<Route path="/cart" component={ShoppingCart} />
			<Route path="/favorites" component={Favorites} />
			<Route exact path="/details/:id" component={Details} />
			<Route path="/dashboard" component={Dashboard} />
			<Route path="/registration" component={Registration} />
			<Route path="/:error" component={Error404} />
		</Switch>
	);
};

export default Routers;
