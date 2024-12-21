import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import fetchData from "./fetchData"; 
import AlbumHeader from "./AlbumHeader";
import AlbumPhotos from "./AlbumPhotos";

const AlbumData = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [album, setAlbum] = useState(null);
    const [photos, setPhotos] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchAlbumData = async () => {
            try {
                const [albumData, photoData] = await Promise.all([
                    fetchData(`https://jsonplaceholder.typicode.com/albums/${id}`),
                    fetchData(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
                ]);
                
                setAlbum(albumData);
                setPhotos(photoData);

                const userData = await fetchData(`https://jsonplaceholder.typicode.com/users/${albumData.userId}`);
                setUser(userData);
            } catch (err) {
                console.error(err);
                navigate("/404");
            }
        };

        fetchAlbumData();
    }, [id, navigate]);

    if (!album || !user) return <div>Загрузка...</div>;

    return (
        <div>
            <AlbumHeader album={album} user={user} />
            <AlbumPhotos photos={photos} />
        </div>
    );
};

export default AlbumData;