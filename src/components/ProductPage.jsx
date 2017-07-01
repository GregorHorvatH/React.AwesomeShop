import React from "react";
import ReactDOM from "react-dom";
import {hashHistory} from "react-router";

import products from "../products.json";
import StarRow from "./StarRow.jsx";
import ProductAlert from "./ProductAlert.jsx";

import "./ProductPage.less";

class ProductPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: products,
            product: products.find(product => product.id === this.props.params.productId)
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

    handleCartClick() {
        console.log('productId:', this.props.params.productId);
        console.log('product:', this.state.product);
        ReactDOM.render(
            <ProductAlert message="Your product successfully inserted into the cart."/>,
            document.querySelector(".product-alert-wrapper")
        );
    }

    render() {
        let starRows = [];
        for (let i = 0; i < 5; i++) {
            starRows.push(<StarRow key={'s' + i} empty={i + 1 > this.state.product.stars}/>);
        }

        return (
            <div className="thumbnail product-item">
                <img className="img-responsive" src={this.state.product.image} alt=""/>
                <div className="caption-full">
                    <h4 className="pull-right">${this.state.product.price}</h4>
                    <h4>{this.state.product.title}</h4>
                    <p>{this.state.product.description}</p>
                    <p>{this.state.product.details}</p>
                </div>
                <div className="product-alert-wrapper"></div>
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