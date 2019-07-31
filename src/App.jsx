import React, { Component } from "react";
import Navibar from "./components/navbar";
import Trending from "./components/trending";
import Header from "./components/header";

class App extends Component {
	render() {
		return (
			<div>
				{" "}
				<Navibar />
				<Header />
				<div className="container">
					<div className="row">
						<div className="col">
							<Trending />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
