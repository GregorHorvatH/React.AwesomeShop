import React from "react";
import { Link } from "react-router"

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button"
                                className="navbar-toggle"
                                data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="/">My awesome shop</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to="/products">Products</Link>
                            </li>
                            <li>
                                <Link to="/inbox">Inbox</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/cart">
                                    <span className="glyphicon glyphicon-shopping-cart">
                                    </span> Cart <span className="badge">14</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;