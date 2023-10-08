import React, { Component } from 'react';
import css from './FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  render() {
    return (
      <div className={css.buttonsContainer}>
        {this.props.options.map((option, index) => (
          <button
            key={index}
            onClick={this.props.onLeaveFeedback}
            type="button"
            id={option}
            className="btn btn-primary"
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}
