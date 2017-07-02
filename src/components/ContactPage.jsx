import React from "react";

class ContactPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1>My awesome shop</h1>
                    <p><span className="glyphicon glyphicon-phone-alt"></span> This is the contact page.</p>
                </div>
                <div className="col-sm-12">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci amet asperiores autem,
                        corporis debitis dignissimos dolor est exercitationem expedita facilis fuga magnam magni modi
                        molestias nesciunt numquam odit praesentium provident quae quas quasi quibusdam quidem ratione
                        reiciendis repellat reprehenderit tempora! Culpa est, illo laboriosam laborum quasi repudiandae
                        totam veniam.</p>
                </div>
            </div>
        );
    }
}

export default ContactPage;