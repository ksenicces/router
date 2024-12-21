import React from "react";
import styles from './App.module.css'; 

const AlbumPhotos = ({ photos }) => {
  return (
      <div className={styles.albumPhotos}>
          {photos.map((photo) => (
              <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} className={styles.photo} />
          ))}
      </div>
  );
};


export default AlbumPhotos;