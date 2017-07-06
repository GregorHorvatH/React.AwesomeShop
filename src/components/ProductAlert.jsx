import React from "react";

class ProductAlert extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="alert alert-success alert-dismissible" role="alert">
                <button type="button" className="close" onClick={this.props.onClick}>
                    <span aria-hidden="true">&times;</span></button>
                <strong>Well done!</strong> {this.props.message}
            </div>
        );
    }
}

export default ProductAlert;