import React from "react";
import {Link} from "react-router"
import "./CartPage.less";

import products from "../products.json"

class CartPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cart: this.getCart()
        };
    }

    getCart() {
        const cart = JSON.parse(localStorage.getItem("cart")) || {};
        const cartArray = Object.keys(cart);
        let cartResult = [];
        for (let i = 0; i < cartArray.length; i++) {
            let product = products.find(p => p.id == cartArray[i]);
            if (product) {
                product.count = cart[cartArray[i]];
                cartResult.push(product);
            }
        }
        return cartResult;
    }

    handleCountChange(productId, evt) {
        const cart = this.state.cart.map(product => {
            const count = evt.target.value;
            if (product.id == productId) {
                product.count = count > 0 ? count : 1;
            }
            return product;
        });
        this.setState({cart});
        this.saveCart(cart);
    }

    handleDeleteFromCart(productId) {
        const cart = this.state.cart.filter(p => p.id != productId);
        this.setState({cart});
        this.saveCart(cart);
    }

    saveCart(cart) {
        let res = {};
        cart.forEach(p => {
            res[p.id.toString()] = parseInt(p.count);
        });
        localStorage.setItem("cart", JSON.stringify(res));
    }

    render() {
        return (
            <div className="container cart-container">

                <div className="row">
                    <div className="col-sm-9">
                        <h1 className="text-center cart-page-header">
                            <span className="glyphicon glyphicon-shopping-cart"></span> Shopping cart
                        </h1>
                        <div className="box">
                            <form method="post" action="checkout1.html">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th colSpan={2}>Product</th>
                                            <th>Quantity</th>
                                            <th>Unit price</th>
                                            <th colSpan={2}>Total</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            this.state.cart.map((product, index) => {
                                                return (
                                                    <tr key={'cart_' + index}>
                                                        <td>
                                                            <Link to={"/products/" + product.id}>
                                                                <img src={product.image}
                                                                     className="cart-image"
                                                                     alt={product.title}/>
                                                            </Link>
                                                        </td>
                                                        <td>
                                                            <Link to={"/products/" + product.id}>{product.title}</Link>
                                                        </td>
                                                        <td>
                                                            <input type="number"
                                                                   value={product.count}
                                                                   onChange={this.handleCountChange.bind(this, product.id)}
                                                                   className="form-control cart-input-count"/>
                                                        </td>
                                                        <td>${product.price}</td>
                                                        <td>${product.price * product.count}</td>
                                                        <td>
                                                            <span className="glyphicon glyphicon-trash delete-from-cart"
                                                                  onClick={this.handleDeleteFromCart.bind(this, product.id)}></span>
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                        }

                                        </tbody>
                                    </table>
                                </div>
                                <div className="box-footer clearfix">
                                    <div className="pull-left"><a href="category.html" className="btn btn-default">
                                        <span className="glyphicon glyphicon-chevron-left"></span> Continue shopping</a>
                                    </div>
                                    <div className="pull-right">
                                        <button className="btn btn-default update-cart-button">
                                            <span className="glyphicon glyphicon-refresh"></span> Update cart
                                        </button>
                                        <button type="submit" className="btn btn-primary proceed-cart-button">
                                            Proceed to checkout <span
                                            className="glyphicon glyphicon-chevron-right"></span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-sm-3">
                        <div id="order-summary" className="box">
                            <div className="box-header">
                                <h3>Order summary</h3>
                            </div>
                            <p className="text-muted">
                                Shipping and additional costs are calculated based on the values you have entered.</p>
                            <div className="table-responsive">
                                <table className="table">
                                    <tbody>
                                    <tr>
                                        <td>Order subtotal</td>
                                        <th>$446.00</th>
                                    </tr>
                                    <tr>
                                        <td>Shipping and handling</td>
                                        <th>$10.00</th>
                                    </tr>
                                    <tr>
                                        <td>Tax</td>
                                        <th>$0.00</th>
                                    </tr>
                                    <tr className="total">
                                        <td>Total</td>
                                        <th>$456.00</th>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default CartPage;