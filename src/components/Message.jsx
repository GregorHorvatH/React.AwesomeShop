import React from "react";
import "./Message.less";
import messages from "../messages.json";

class Message extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: messages.find(message => message.id === this.props.params.messageId)
        };
    }

    componentWillReceiveProps(nextProps) {
        const {messageId: prevId} = this.props.params;
        const {messageId: nextId} = nextProps.params;

        if (prevId !== nextId) {
            this.setState({
                message: messages.find(message => message.id === nextId)
            });
        }
    }

    render() {
        return(
            <div className="message">
                <p>From: {this.state.message.senderName}</p>
                <p>To: you</p>
                <p>Subject: {this.state.message.subject}</p>
                <hr/>
                <p>{this.state.message.body}</p>
            </div>
        );
    }
}

export default Message;