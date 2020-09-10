import React, { Component } from "react";
import Article from "./Article.component";
import Search from "../Search.component";
import Pagination from "./Pagination.component";
import Loading from '../Loading.component';
import axios from "axios";
import Global from "../../Global";
import image from '../../assets/images/default-image.jpg';

export default class Articles extends Component {
  url = Global.url;
  urlMongoDB = Global.urlMongoDB;
  imageDefault = image;

  state = {
    articles: [],
    status: null,
  };

  componentWillMount() {
    this.getArticles();
  }

  getArticles = () => {
    axios.get(this.urlMongoDB + "show-articles/").then((res) => {
      this.setState({
        articles: res.data.articles,
        status: "success",
      });
      console.log(this.state);
    });
  };
  render() {
    if (this.state.articles.length >= 1) {
      var listArticles = this.state.articles.map((article) => {
        var id = article._id;
        return (
          <Article
            title={article.title}
            description={article.description}
             /* Para cuando la imagen venga por url */
            image={article.urlImage ? article.urlImage : this.imageDefault}
            /* Pra cuando la imagen venga por el método upLoad */
            /* image={
              article.image
                ? this.urlMongoDB + "get-image-article/" + article.image
                : this.imageDefault
            } */
            date={article.date}
            mainLabel={article.mainLabel}
            key={id}
            id={id}
          />
        );
      });
      return (
        <section className="containerArticles">
         
          {listArticles} 
        </section>
      );
    } else if (
      this.state.articles.lenght === 0 &&
      this.state.status === "success"
    ) {
      return <span className="noElements">No hay elementos</span>;
    } else {
      return(
        <Loading />
      ); 
    }
  }
}


