import React, { Component } from "react";

export default class Loading extends Component {
  render() {
    const { modal, titulo, palabraEstatica } = this.props;
    return (
      <div className="loading">
        <div class="item item3">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
    );
  }
}
