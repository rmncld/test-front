import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from "./index.module.scss";

class Calendar extends Component {

  // Building here a state to handle the date format and more precisely the day and the month.
  constructor() {
    super();
    this.state = {
      day: undefined,
      month: undefined
    }
  }

  // Calling date formatting function on component mount.
  componentDidMount() {
    this.formatDate(this.props.date);
  }

  // Handle date received from props to comply with our component
  formatDate = (date) => {
    const dateArray = date.split("/");
    this.setState({ day: dateArray[1] })
    this.setState({ month: dateArray[0] })
  }

  render() {
    return (
      <div className={`${css.box}`}>
        <span className={`${css.day}`}>{this.state.day}</span>
        <span className={`${css.month}`}>{this.state.month}</span>
      </div>
    )
  }
}

Date.propTypes = {
  day: PropTypes.string,
  month: PropTypes.string,
}

export default Calendar;