import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from "./index.module.scss";

class Title extends Component {
  render() {
    return(
      <h1 className={`${css.title} ${css[this.props.type]}`}>
        {this.props.icon && this.props.icon}
          <div className={css.titleText}>
            {this.props.children}
          </div>
      </h1>
    )
  }
}

Title.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.any
};
Title.defaultProps = {};

export default Title;
