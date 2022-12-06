import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button'
import Title from '../Title'
import Subtitle from '../Subtitle';
import Calendar from '../Calendar';

import css from "./index.module.scss";
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

class Pane extends Component {
  render() {
    return (
      <a href={this.props.url} target="_blank">
        <div className={`${css.pane} ${this.props.cover && css.withCover}`}>
          {
            this.props.cover && (
              <>
                <div className={css.cover} style={{ backgroundImage: "url(" + this.props.cover + ")" }}></div>
                <div className={css.overlay}></div>
              </>
            )
          }
          <div className={`${css.paneTitle} ${this.props.mainPane && css.main}`}>
            <div className={css.paneCard}>
              <div className={css.paneTitle}>
                {
                  this.props.date && (
                    <Calendar date={this.props.date} />
                  )
                }
                {this.props.mainPane ?
                  <Title type={this.props.titleType}>{this.props.title}</Title>
                  :
                  <>
                    <div className={css.cardIcon}>{this.props.cardIcon}</div>
                    <div className={css.paneCard}>
                      <Title type={this.props.titleType}>{this.props.title}</Title>
                      <Subtitle icon={faMapMarkerAlt} type={this.props.subtitleType}>{this.props.subtitle}</Subtitle>
                    </div>
                  </>
                }
              </div>
              {
                this.props.mainPane && (
                  <Subtitle icon={faMapMarkerAlt} type={this.props.subtitleType}>{this.props.subtitle}</Subtitle>
                )
              }
            </div>
            {
              this.props.button && (
                <div className={css.btn_chevron_right}>
                  <Button size="sm">
                    {this.props.buttonContent}
                  </Button>
                </div>
              )
            }
          </div>
        </div>
      </a>
    )
  }
}

Pane.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  button: PropTypes.bool,
  buttonContent: PropTypes.any
};

Pane.defaultProps = {
  title: "Default title",
};

export default Pane;
