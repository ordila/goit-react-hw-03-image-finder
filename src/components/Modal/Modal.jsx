import React, { Component } from 'react';
import css from './Modal.module.css';
export default class Modal extends Component {
  onModalClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onModalClose();
    }
  };
  componentDidMount() {
    document.addEventListener('keydown', this.onEscClose);
  }
  onEscClose = () => {
    this.props.onModalClose();
  };
  componentWillUnmount() {
    document.removeEventListener('keydown', this.onEscClose);
  }
  render() {
    return (
      <div className={css.overlay} onClick={this.onModalClick}>
        <div className={css.modal}>
          <img className={css.photo} src={this.props.modalData} alt="" />
        </div>
      </div>
    );
  }
}
