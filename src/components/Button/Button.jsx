import React, { Component } from 'react';
import css from './Button.module.css';
export default class Button extends Component {
  render() {
    return (
      <>
        <button
          className={css.button}
          onClick={this.props.onButtonClick}
          type="button"
        >
          Load more
        </button>
      </>
    );
  }
}
