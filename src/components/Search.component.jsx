import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


export default class Search extends Component {

  render() {
    
    return (
      <div className="buscador">
        <div className="containerInputs">
          <input className="buscar" type="text" placeholder="Buscar" />
          <button type="submit" className="submitSearch">
            <FontAwesomeIcon icon={faSearch} className="iconSearch" />
          </button>
        </div>
      
      </div>
    );
  }
}
