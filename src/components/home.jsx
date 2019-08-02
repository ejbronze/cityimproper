import React, { Component } from "react";
import Navibar from "./navbar";
import Trending from "./trending";
import Header from "./header";
import Footer from "./footer";

class Home extends Component {
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

export default Home;
