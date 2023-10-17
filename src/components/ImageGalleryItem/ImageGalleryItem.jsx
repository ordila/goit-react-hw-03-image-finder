import css from './ImageGalleryItem.module.css';
export const ImageGalleryItem = ({ post, onModalOpen }) => {
  const onPhotoClick = () => {
    onModalOpen(post.largeImageURL);
  };
  return (
    <li onClick={onPhotoClick} className={css.galleryItem}>
      <img className={css.image} src={post.webformatURL} alt="" />
    </li>
  );
};
