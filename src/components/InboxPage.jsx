import React, { PropTypes } from "react";
import messages from "../messages.json";
import MessagePreview from "./MessagePreview.jsx";

class InboxPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			messages: messages
		};
    }

    handlePreviewClick(messageId) {
        this.context.router.push(`/inbox/messages/${messageId}`);
    }

	render() {
	    const {messageId: selectedMessageId} = this.props.params;

		return(
			<div className="container">
				<div className="inbox-page">
					<h1>Inbox Page</h1>
					<p>lkdsjgh skljdghsdklgj hsdklgsldf g dfg.</p>
					<div className="messages">
                        {
                            this.state.messages.map(message => {
                                return(
									<MessagePreview key={message.id}
													subject={message.subject}
													senderName={message.senderName}
													selected={message.id === selectedMessageId}
													messageId={message.id}
													onClick={this.handlePreviewClick.bind(this, message.id)}/>
                                );
                            })
                        }
					</div>

					<div className="message-container">
                        {this.props.children}
					</div>
				</div>
			</div>
		);
	}
}

InboxPage.contextTypes = {
    router: PropTypes.object.isRequired
};

export default InboxPage;