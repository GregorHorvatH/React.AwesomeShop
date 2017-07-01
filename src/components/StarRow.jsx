import React from "react";

class StarRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const classNames = "glyphicon " + (this.props.empty ? "glyphicon-star-empty" : "glyphicon-star");
        return (
            <span className={classNames}></span>
        );
    }
}

export default StarRow;