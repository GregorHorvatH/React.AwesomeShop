import React, {PropTypes} from "react";
import Carousel from "./Carousel.jsx";
import ProductPreviewPage from "./ProductPreviewPage.jsx";

import "./ProductListPage.less";

import products from "../products.json";
import categories from "../categories.json";

class ProductListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products,
            categories,
            category: 0,
            search: ''
        };
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
        this.handleClearClick = this.handleClearClick.bind(this);
    }

    handleProductClick(productId) {
        this.context.router.push(`/products/${productId}`);
    }

    handleCategoryClick(index) {
        if (this.state.category === index) {
            return;
        }
        this.setState({
            category: index
        });
    }

    handleSearchSubmit(evt) {
        evt.preventDefault();
        if (!evt.target.searchInput.value && !this.state.search) {
            return;
        }
        this.setState({
            search: evt.target.searchInput.value
        });
    }

    handleClearClick() {
        let searchInput = document.querySelector(".product-search-input");
        searchInput.value = '';
        this.setState({
            search: ''
        });
    }

    render() {
        let product;
        if (this.props.children) {
            product = (
                <div className="product-item-container">
                    {this.props.children}
                </div>
            );
        } else {
            product = (
                <div className="row product_list grid">
                    {
                        this.state.products
                            .filter(product => this.state.category === 0 || product.category === this.state.category)
                            .filter(product => product.title.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1)
                            .map((product, index) => {
                                return (
                                    <ProductPreviewPage product={product}
                                                        index={index}
                                                        onClick={this.handleProductClick.bind(this, product.id)}
                                                        key={index}/>
                                );
                            })
                    }
                </div>
            );
        }

        return (
            <div className="container">
                <div className="row">

                    <div className="col-sm-3">
                        <p className="lead">Categories</p>
                        <div className="list-group">
                            {
                                this.state.categories.map((category, index) => {
                                    const className = "list-group-item" +
                                        (this.state.category === index ? " selected" : "");
                                    return (
                                        <div href="#"
                                             className={className}
                                             key={'category_' + category.id}
                                             onClick={this.handleCategoryClick.bind(this, index)}>
                                            {category.name}
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <div className="product-search-container">
                            <form className="form-inline" onSubmit={this.handleSearchSubmit}>
                                <div className="form-group product-search-form-group btn-block">
                                    <div className="input-group btn-block">
                                        <input type="text"
                                               className="form-control product-search-input"
                                               placeholder="Search"
                                               name="searchInput"/>
                                        <span className="product-search-input-clear"
                                              onClick={this.handleClearClick}>X</span>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-default product-search-button">
                                    <span className="glyphicon glyphicon-search"></span>
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="col-sm-9">
                        <Carousel/>
                        {product}
                    </div>
                </div>
            </div>
        );
    }
}

ProductListPage.contextTypes = {
    router: PropTypes.object.isRequired
};

export default ProductListPage;