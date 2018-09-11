import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from "./index.module.scss";

class Title extends Component {
  render() {
    return(
      <h1 className={`${css.title}`}>{this.props.children}</h1>
    )
  }
}

Title.propTypes = {};
Title.defaultProps = {};

export default Title;
