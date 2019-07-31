import React, { Component } from "react";
import Navibar from "./components/navbar";
import Trending from "./components/trending";
import Header from "./components/header";
import Footer from "./components/footer";

class App extends Component {
	render() {
		return (
			<div>
				{" "}
				<Navibar />
				<Header />
				<Trending />
				<Footer />
			</div>
		);
	}
}

export default App;
