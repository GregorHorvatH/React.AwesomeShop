import React from "react";
import StarRow from "./StarRow.jsx";
import Masonry from "masonry-layout";

class ProductPreviewPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const grid = document.querySelector(".grid");
        this.msnry = new Masonry( grid, {
            itemSelector: '.grid-item', // use a separate class for itemSelector, other than .col-
            columnWidth: '.grid-sizer',
            percentPosition: true
        });
    }

    render() {
        const {image, price, title, description, reviews, stars} = this.props.product;

        let starRows = [];
        for (let i = 0; i < 5; i++) {
            starRows.push(<StarRow key={'s' + i} empty={i + 1 > stars}/>);
        }

        return(
            <div className="grid-item grid-sizer col-sm-6 col-lg-4 col-md-4 product-preview">
                <div className="thumbnail product-item" onClick={this.props.onClick}>
                    <img src={image} alt=""/>
                    <div className="caption">
                        <h4 className="pull-right">${price}</h4>
                        <h4>{title}</h4>
                        <p>{description}</p>
                    </div>
                    <div className="ratings">
                        <p className="pull-right">{reviews} reviews</p>
                        <p>{starRows}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductPreviewPage;