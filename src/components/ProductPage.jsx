import React from "react";
import ReactDOM from "react-dom";
import {hashHistory} from "react-router";

import products from "../products.json";
import ProductAlert from "./ProductAlert.jsx";

import "./ProductPage.less";

class ProductPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: products,
            product: products.find(product => product.id === this.props.params.productId),
            productAlert: ''
        };

        this.handleCartClick = this.handleCartClick.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const {productId: prevId} = this.props.params;
        const {productId: nextId} = nextProps.params;
        if (prevId !== nextId) {
            this.setState({
                product: products.find(product => product.id === nextId)
            });
        }
    }

    handleCloseProductLick() {
        hashHistory.push(`/products`);
    }

    handleAlertClick() {
        this.setState({
            productAlert: ''
        });
    }

    handleCartClick() {
        this.setState({
            productAlert: <ProductAlert message="Your product successfully inserted into the cart."
                                        onClick={this.handleAlertClick.bind(this)}/>
        });

        let cart = JSON.parse(localStorage.getItem("cart")) || {};
        cart[this.props.params.productId] = cart[this.props.params.productId] ? cart[this.props.params.productId] + 1 : 1;
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    render() {
        let starRows = [];
        for (let i = 0; i < 5; i++) {
            const classNames = "glyphicon " + (i + 1 > this.state.product.stars ? "glyphicon-star-empty" : "glyphicon-star");
            starRows.push(<span className={classNames} key={'star_' + i}></span>);
        }

        return (
            <div className="thumbnail product-item">
                <span className="close-product-page"
                      onClick={this.handleCloseProductLick}>X</span>
                <img className="img-responsive" src={this.state.product.image} alt=""/>
                <div className="caption-full">
                    <h4 className="pull-right">${this.state.product.price}</h4>
                    <h4>{this.state.product.title}</h4>
                    <p>{this.state.product.description}</p>
                    <p>{this.state.product.details}</p>
                </div>
                <div className="product-alert-wrapper">{this.state.productAlert}</div>
                <div className="product-controls">
                    <button type="button"
                            className="btn cart-button"
                            onClick={this.handleCartClick}>
                        <span className="glyphicon glyphicon-shopping-cart"></span> Add to cart
                    </button>
                    <button type="button"
                            className="btn btn-primary"
                            onClick={this.handleCloseProductLick}>Close</button>
                </div>
                <div className="ratings">
                    <p className="pull-right">{this.state.product.reviews} reviews</p>
                    <p>{starRows} {this.state.product.stars} stars</p>
                </div>
            </div>
        );
    }
}

export default ProductPage;