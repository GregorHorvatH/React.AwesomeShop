import React from "react";

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="container">
                <hr/>
                    <footer>
                        <div className="row">
                            <div className="col-lg-12">
                                <p>Copyright &copy; My awesome shop 2017</p>
                            </div>
                        </div>
                    </footer>

            </div>
        );
    }
}

export default Footer;