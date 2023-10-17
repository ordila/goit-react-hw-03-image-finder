import React, { Component } from 'react';
import css from './Searchbar.module.css';
export default class Searchbar extends Component {
  state = {
    value: '',
  };
  handleSubmitSearchForm = event => {
    event.preventDefault();
    const { onFormSubmit } = this.props;
    onFormSubmit(this.state.value);
    this.setState({ value: '' });
  };
  handleInputChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handleSubmitSearchForm}>
          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}>Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={value}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}
