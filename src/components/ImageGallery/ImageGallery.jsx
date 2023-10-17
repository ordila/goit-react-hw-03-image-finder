import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
import css from './ImageGalery.module.css';
export default class ImageGallery extends Component {
  render() {
    const { posts, onModalOpen } = this.props;
    if (!Array.isArray(posts)) {
      return null;
    }

    return (
      <ul className={css.gallery}>
        {posts.map((post, id) => (
          <ImageGalleryItem onModalOpen={onModalOpen} post={post} key={id} />
        ))}
      </ul>
    );
  }
}
