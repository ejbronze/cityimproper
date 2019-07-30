import React, { Component } from "react";
import Navibar from "./components/navbar";
import Trending from "./components/trending";

class App extends Component {
	render() {
		return (
			<div>
				{" "}
				<Navibar />
				<Trending />
			</div>
		);
	}
}

export default App;
