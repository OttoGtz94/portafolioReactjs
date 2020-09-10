import React, { Component } from "react";
import Aside from "./Aside.component";
import Footer from './Footer.component';
import axios from "axios";
import Global from "../../Global";
import Moment from "react-moment";
import "moment/locale/es";
import image from "../../assets/images/default-image.jpg";

export default class ArticlePage extends Component {
  url = Global.urlMongoDB;
  imageDefault = image;

  state = {
    article: false,
    status: null,
  };

  componentWillMount() {
    this.getArticle();
  }

  getArticle = () => {
    var id = this.props.match.params.id;
    axios
      .get(this.url + "article/" + id)
      .then((res) => {
        this.setState({
          article: res.data.article,
          status: "success",
        });
      })
      .catch((error) => {
        this.setState({
          article: false,
          status: "success",
        });
      });
  };

  render() {
    var article = this.state.article;
    return (
      <article className="articlePage">
        <div className="articleSingle">
          <header className="asImgContainer">
            <img
              src={/* Para cuando la imagen venga por url */
                article.urlImage ? article.urlImage : this.imageDefault
              /* Para cuando la imagen venga por el método upLoad */
              /*  article.image
                  ? this.url + "get-image-article/" + article.image
                  : this.imageDefaul */}
              alt={article.title}
            />
          </header>
          <div className="asContentContainer">
            <div className="asTitleContainer">
              <h1>{article.title}</h1>
              <span>
                <Moment fromNow>{article.date}</Moment>
              </span>
            </div>
            <div className="asTextContainer">
              <div className="asDescriptionContainer">
                <p>{article.description}</p>
              </div>
              <div className="asContentContainer">
                <p>{article.content}</p>
              </div>
            </div>
            <span className="articleLabelsContainer">
              <span className="articleLine"></span>
              <a href="#" className="articleLinkLabel">
                {article.mainLabel}
              </a>
            </span>
          </div>
        </div>
        {/* Aside */}
        <aside className="containerAside">
          <h3 className="csTitle">Ultimos posts</h3>
          <Aside />
        </aside>
        <Footer />
      </article>
    );
  }
}
