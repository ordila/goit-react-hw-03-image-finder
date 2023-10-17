import { requestPosts } from 'services/api';
import { Triangle } from 'react-loader-spinner';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import css from './styles.module.css';
import React, { Component } from 'react';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import 'basiclightbox/dist/basicLightbox.min.css';
export default class App extends Component {
  state = {
    inputValue: '',
    page: 1,
    error: null,
    isLoading: false,
    posts: [],
    modal: {
      modalOpen: false,
      modalData: null,
    },
  };

  onModalOpen = imageUrl => {
    this.setState({ modal: { modalOpen: true, modalData: imageUrl } });
  };

  fetchPosts = async () => {
    try {
      this.setState({
        isLoading: true,
      });

      const response = await requestPosts(
        this.state.inputValue,
        this.state.page
      );
      this.setState(prevState => ({
        posts:
          this.state.page > 1
            ? [...prevState.posts, ...response.hits]
            : [...response.hits],
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };
  async componentDidUpdate(_, prevState) {
    if (
      prevState.inputValue !== this.state.inputValue ||
      prevState.page !== this.state.page
    ) {
      this.fetchPosts();
    }
  }
  onFormSubmit = inputValue => {
    this.setState({ inputValue });
  };
  onButtonClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    console.log(this.state.page);
  };
  onModalClose = () => {
    this.setState({ modal: { modalOpen: false } });
  };
  render() {
    const {
      posts,
      isLoading,
      modal: { modalData, modalOpen },
    } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onFormSubmit={this.onFormSubmit}></Searchbar>

        <ImageGallery
          onModalOpen={this.onModalOpen}
          posts={posts}
        ></ImageGallery>
        {isLoading && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
            }}
          >
            <Triangle
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="triangle-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={this.state.isLoading}
            />
          </div>
        )}
        {posts.length > 1 && (
          <Button onButtonClick={this.onButtonClick}></Button>
        )}
        {modalOpen && (
          <Modal onModalClose={this.onModalClose} modalData={modalData}></Modal>
        )}
      </div>
    );
  }
}
