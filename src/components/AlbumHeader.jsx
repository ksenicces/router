import React from "react";
import { Link } from "react-router-dom";

const AlbumHeader = ({ album, user }) => {
  return (
    <div>
      <h2>{album.title}</h2>
      <p>
        Created by:{" "}
        <Link to={`/user/${user.id}`}>{user.name}</Link>
      </p>
    </div>
  );
};

export default AlbumHeader;