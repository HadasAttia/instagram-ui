import React, { useEffect, useState } from 'react';
import { UserService } from '../services/user.service';
import './Search.scss';

function Search() {

    const [query, setQuery] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (!query) {
            return;
        }
        async function getUsers() {
            try {
                setUsers(await UserService.search(query));
            } catch(err) {
                console.log(err);
            } 
        }
        getUsers();
    }, [query]);

    function hasNoResault() {
        return users.length === 0 && query.length > 0;
    }

    return (
        <div>
            <h1>Search</h1>

            <input value={query} onChange={(e) => setQuery(e.target.value)} />
            <div>
                {users.map(user => {
                    return <div key={user._id}>{user.username}</div>
                })}
            </div>
            {hasNoResault() && 'Sorry, no user'}
        </div>
    );
}

export default Search;
