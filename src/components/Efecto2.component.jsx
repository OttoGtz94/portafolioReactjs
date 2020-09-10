import React, { Component } from "react";

export default class Efecto2 extends Component {
  render() {
    const {palabra} = this.props;
    return (
      <div class="main">
        <div class="text">{palabra}</div>
        <div class="shadow">
          <div class="viewport">
            <div class="text">{palabra}</div>
          </div>
        </div>
      </div>
    );
  }
}
