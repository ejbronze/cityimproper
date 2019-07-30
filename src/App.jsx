import React, { Component } from "react";
import Navibar from "./components/navbar";
import Trending from "./components/trending";

class App extends Component {
	render() {
		return (
			<div>
				{" "}
				<Navibar />
				<div className="container">
					<div className="row">
						<div className="col">
							<Trending />
						</div>
						<div className="col">
							<h1>Temp Space Holder</h1>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
