import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button'
import Title from '../Title'

import css from "./index.module.scss";

class Pane extends Component {
  render() {
    return(
      <div className={`${css.pane} ${this.props.cover ? css.withCover : ''}`}>
        {
          this.props.cover && (
            <div className={css.cover} style={{ backgroundImage: "url(" + this.props.cover + ")" }}></div>
          )
        }
        <Title>{this.props.title}</Title>
        <Button size="sm"><i className="fa fa-arrow-right"></i></Button>
      </div>
    )
  }
}

Pane.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string
};

Pane.defaultProps = {
  title: "Default title"
};

export default Pane;
