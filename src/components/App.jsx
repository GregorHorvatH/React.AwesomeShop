import React from "react";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="app">
				<NavBar/>

				<div className="content">
					{this.props.children}
				</div>

                <Footer/>
			</div>
		);
	}
}

export default App;