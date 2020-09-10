import React, { Component } from "react";
import Header from "./Header.component";
import Articles from "./Articles.component";
import Footer from './Footer.component';



export default class Blog extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="blog">
          <Header />
          <Articles />
         
        </section>
       <Footer />
      </React.Fragment>
    );
  }
}
