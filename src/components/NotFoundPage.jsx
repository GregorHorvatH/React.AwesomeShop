import React from "react";

class NotFoundPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="container not-found-page">
                <div className="row">
                    <div className="col-sm-4">
                        <h1>My awesome shop</h1>
                        <p><span className="glyphicon glyphicon-warning-sign"></span> 404 Page not found</p>
                    </div>
                    <div className="col-sm-8">
                        <img src="./images/404.png" className="img-responsive center-block" alt="404"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFoundPage;