import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from "./index.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Subtitle extends Component {
  render() {
    return(
      <div className={`${css.subtitle}`}>
        <FontAwesomeIcon icon={this.props.icon} className={css.icon} />
        <div className={this.props.type && `${css[this.props.type]}`}>{this.props.children}</div>
      </div>
    )
  }
}

Subtitle.propTypes = {
  type: PropTypes.string,
  children: PropTypes.any,
  icon: PropTypes.any
};

Subtitle.defaultProps = {

};

export default Subtitle;