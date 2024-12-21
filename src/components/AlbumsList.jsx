import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fetchData from "./fetchData";
import styles from './App.module.css'; 

const AlbumsList = () => {
  const [albums, setAlbums] = useState([]);
  
  useEffect(() => {
    fetchData("https://jsonplaceholder.typicode.com/albums")
      .then(setAlbums)
      .catch(console.error);
  }, []);
  
  return (
    <ul>
      {albums.map(album => (
        <li key={album.id}>
          <Link className={styles.link} to={`/album/${album.id}`}>{album.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default AlbumsList;