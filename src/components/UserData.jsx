import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import fetchData from "./fetchData";
import styles from './App.module.css'; 

const UserData = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        const loadUserData = async () => {
            try {
                const userData = await fetchData(`https://jsonplaceholder.typicode.com/users/${id}`);
                setUser(userData);
            } catch (error) {
                console.error(error);
                navigate('/404');
            }
        };

        const loadUserAlbums = async () => {
            try {
                const albumData = await fetchData(`https://jsonplaceholder.typicode.com/albums?userId=${id}`);
                setAlbums(albumData);
            } catch (error) {
                console.error(error);
            }
        };

        const fetchUserAndAlbums = async () => {
            await Promise.all([loadUserData(), loadUserAlbums()]);
        };

        fetchUserAndAlbums();
    }, [id, navigate]);

    if (!user) return <div>Загрузка...</div>;

    return (
        <div>
            <h2>{user.name}</h2>
            <p className={styles.userInfo}><strong>Username:</strong> {user.username}</p>
            <p className={styles.userInfo}><strong>Email:</strong> {user.email}</p>
            <p className={styles.userInfo}><strong>Phone:</strong> {user.phone}</p>
            <p className={styles.userInfo}><strong>Website:</strong> {user.website}</p>
            <h3>Альбомы</h3>
            <ul>
                {albums.map(album => (
                    <li key={album.id}>
                        <Link to={`/album/${album.id}`}>{album.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserData;
