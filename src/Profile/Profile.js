import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserService } from '../services/user.service';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import './Profile.scss';
import Post from '../common/Post/Post';

function Profile() {

    const { username } = useParams();
    const[posts, setPosts] = useState([]);

    useEffect(() => {
        async function getPosts()  {
            try {
                const posts = await UserService.getPosts(username);
                setPosts(posts);
            } catch(err) {
                console.log(err);
            }
        }
        getPosts();
    }, [username]);

    return (
        <div>
            <ProfileHeader username={username} postNum={posts.length} />
            <hr />
            <div>
                {posts.map(post => (
                    <Post key={post._id} data={post} />
                ))}
            </div>
        </div>
    );
}

export default Profile;
