import React, { Component } from "react";
import {Link} from 'react-router-dom';
import Moment from "react-moment";
import "moment/locale/es";

export default class Article extends Component {
  render() {
    const {
      title,
      date,
      image,
      description,
      mainLabel,
      key,
      id
    } = this.props;
    return (
      <article className="article" key={key}>
        <span className="articleLabelsContainer">
          <span className="articleLine"></span>
          <a href="#" className="articleLinkLabel">
            {mainLabel}
          </a>
        </span>
        <header className="articleTitleContainer">
          <h1 className="articleTitle">{title}</h1>
          <span className="articleDate">
            <i>
              <Moment fromNow>{date}</Moment>
            </i>
          </span>
        </header>
        <div className="articleContentContainer">
          <div className="articleImageContainer">
            <img
              src={image}
              alt={title}
              className="articleImage"
            />
          </div>
          <div className="articleTextContainer">
            <p className="articleContent">{description}</p>
            <Link to={"/blog/articulo/" + id} className="articleButton">
              <span>Leer más</span>
            </Link>
            {/* <button className="articleButton">
              <Link to={"/blog/articulo/6"}>Leer más</Link>
            </button> */}
          </div>
        </div>
        {/* <span className="articleLabels">{labelsArticle}</span> */}
      </article>
    );
  }
}
