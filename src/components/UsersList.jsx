import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fetchData from "./fetchData";
import styles from './App.module.css';

const UsersList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const userData = await fetchData("https://jsonplaceholder.typicode.com/users");
                setUsers(userData);
            } catch (error) {
                console.error(error);
            }
        };

        loadUsers();
    }, []);

    const renderUsers = () => {
        return users.map(user => (
            <li key={user.id}>
                <Link className={styles.link} to={`/user/${user.id}`}>{user.name}</Link>
            </li>
        ));
    };

    return (
        <ul>
            {renderUsers()}
        </ul>
    );
};

export default UsersList;
