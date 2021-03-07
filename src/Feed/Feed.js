import React, { useEffect, useState } from 'react';
import Post from '../common/Post/Post';
import { PostService } from '../services/post.service';
import './Feed.scss';


function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getPosts() {
            setPosts(await PostService.feed());
        }
        getPosts();
    }, []);

    return (
        <div>
            {posts.map(post => (
                <Post key={post._id} data={post} />
            ))}
        </div>
    );
}

export default Feed;
