import React, { useEffect, useState } from 'react';
import Avatar from '../../common/Avatar/Avatar';
import { UserService } from '../../services/user.service';
import './ProfileHeader.scss';

function ProfileHeader({ username, postNum }) {

    const [user, setUser] = useState();

    useEffect(() => {
        async function getUser() {
            const user = await UserService.getPosts(username);
            setUser(user);
        }
        getUser();
    }, [username]);

    return (
        <div>
            <h2>{user.username}</h2>
            <Avatar image={user.avatar} size="lg" />
            <p>{postNum} posts</p>
        </div>
    );
}

export default ProfileHeader;
