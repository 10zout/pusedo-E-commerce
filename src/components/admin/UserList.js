import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('/api/admin/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Fetch users failed:', error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div>
            <h2>User List</h2>
            {users.map(user => (
                <div key={user.id}>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
};

export default UserList;
