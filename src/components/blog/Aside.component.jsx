import React, { Component } from "react";
import axios from "axios";
import Global from "../../Global";
import Moment from "react-moment";
import { Link, Redirect } from "react-router-dom";
import "moment/locale/es";
import image from "../../assets/images/default-image.jpg";

export default class Aside extends Component {
  url = Global.urlMongoDB;
  imageDefault = image;

  state = {
    articles: [],
    status: null,
  };

  componentWillMount() {
    this.getLastArticles();
  }
  getLastArticles = () => {
    axios
      .get(this.url + "show-articles/last")
      .then((res) => {
        this.setState({
          articles: res.data.articles,
          status: "success",
        });
      })
      .catch((err) => {
        this.setState({
          articles: [],
          status: "success",
        });
      });
  };
  render() {
    if (this.state.articles.length >= 1) {
      var listLastArticles = this.state.articles.map((article) => {
        return (
          <div className="articleAside">
            <div className="containerImg">
              <img
                src={
                  /* Para cuando la imagen venga por url */
                  article.urlImage ? article.urlImage : this.imageDefault
                  /* Para cuando la imagen venga por el método upLoad */
                  /*  article.image
                    ? this.url + "get-image-article/" + article.image
                    : this.imageDefault */
                }
                alt={article.name}
              />
            </div>
            <div className="containerTitle">
              <a href={"/blog/articulo/" + article._id}>
                {<h4>{article.title}</h4>}
              </a>
            </div>
            <div className="containerDescription">
              <p>{article.description}</p>
            </div>
          </div>
        );
      });
      return <div className="asideSubContainer">{listLastArticles}</div>;
    } else {
      return <h1>no hay</h1>;
    }
  }
}

/* return (
  <aside className="containerAside">
    <h2>aside</h2>
  </aside>
); */
