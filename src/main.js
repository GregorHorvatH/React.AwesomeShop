import ReactDOM from "react-dom";
import React from "react";
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import App from "./components/App.jsx";
import HomePage from "./components/HomePage.jsx";
import AboutPage from "./components/AboutPage.jsx";

import ProductListPage from "./components/ProductListPage.jsx";
import ProductPage from "./components/ProductPage.jsx";

import CartPage from "./components/CartPage.jsx";
import ContactPage from "./components/ContactPage.jsx";

import InboxPage from "./components/InboxPage.jsx";
import Message from "./components/Message.jsx";
import NotFound from "./components/NotFoundPage.jsx";

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={App}>
            <IndexRoute component={HomePage} />
			<Route path='/about' component={AboutPage}/>
			<Route path='/products' component={ProductListPage}>
                <Route path='/products/:productId' component={ProductPage}/>
            </Route>
			<Route path='/inbox' component={InboxPage}>
				<Route path='/inbox/messages/:messageId' component={Message}/>
			</Route>
            <Route path='/cart' component={CartPage}/>
            <Route path='/contact' component={ContactPage}/>
		</Route>
        <Route path='*' component={NotFound} />
	</Router>,
	document.getElementById("app")
);