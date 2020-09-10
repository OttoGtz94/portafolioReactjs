import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";

export default class Pagination extends Component {
  render() {
  
    return (
      <nav className="navigationContainer">
        <ul className="paginationContainer">
          <li className="pageItem">
            <a href="#">1</a>
          </li>
          <li className="pageItem">
            <a href="#">
              <FontAwesomeIcon icon={faTerminal} className="pageItemSelected" />
              2
            </a>
          </li>
          <li className="pageItem">
            <a href="#">3</a>
          </li>
          <li className="pageItem">
            <a href="#">4</a>
          </li>
          <li className="pageItem">
            <a href="#">5</a>
          </li>
        </ul>
      </nav>
    );
  }
}
