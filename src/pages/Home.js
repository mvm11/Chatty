import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <Header></Header>
        <div className="">
          <section
            id="home"
            className="cover-container h-100 p-3 mx-auto text-center"
          >
            <h1 className="presentation-sentence">Welcome to Chatty ;)</h1>
          </section>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
