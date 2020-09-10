import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./Nav.component";
import Home from './home/Home.component';
import Blog from './blog/Blog.component';
import Contactame from './contact/Contacto.component';
import Projects from './projects/Projects.component';
import ArticlePage from './blog/ArticlePage.component';
import Error404 from './Error404.component';
import Loading from './Loading.component';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exac path="/home" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contactame" component={Contactame} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/blog/articulo/:id" component={ArticlePage} />
          <Route exact path="/loading" component={Loading} />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
    );
  }
}
