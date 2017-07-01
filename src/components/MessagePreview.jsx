import React, { PropTypes } from "react";
import "./MessagePreview.less";
import classNames from "classnames";

class MessagePreview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {subject, senderName, onClick, selected} = this.props;
        const classes = classNames("message-preview", {selected});

        return(
            <div className={classes} onClick={onClick}>
                <div className="header">{subject}</div>
                <div className="from">from: {senderName}</div>
            </div>
        );
    }
}

MessagePreview.propTypes = {
    subject: PropTypes.string.isRequired,
    senderName: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

MessagePreview.defaultProps = {
    senderName: 'Stranger'
};

export default MessagePreview;