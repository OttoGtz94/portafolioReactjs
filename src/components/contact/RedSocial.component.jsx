import React, { Component } from "react";

export default class RedSocial extends Component {
  render() {
    const {claseIcono, enlace, iconoS } = this.props;
    return (
      <a target="_blank" href={enlace} className={claseIcono}>
        {iconoS}
      </a>
    );
  }
}
