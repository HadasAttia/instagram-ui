import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Avatar from '../common/Avatar/Avatar';
import { PostService } from '../services/post.service';
import './PostPage.scss';
import PostDate from '../common/Post/PostDate/PostDate';
import Comments from '../common/Comments/Comments';

function PostPage() {
    
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        async function getPost() {
            try {
                const p = await PostService.get(id);
                if(p) {
                    setPost(p);
                } else {
                    console.log('Post does not exist!');
                }
            } catch(err) {
                console.log(err);
            }
        }
        getPost();
    
    }, [id]);

    return (
        <div>
            { post && <div>
                <div>
                    <div>
                        <img src={'data:; base64,' + post.image} alt='' />
                    </div>
                    <div>
                        <PostDate date={post.createdAt} />
                    </div>
                    <div>
                        <p>{post.description}</p>
                    </div>
                    <header>
                        <div>
                            <Link to={`/profile/${post.user._id}`}>
                                <Avatar size="sm" image={post.user.avatar} />
                                <h3>{post.user.username}</h3>
                            </Link>
                        </div>
                    </header>
                    <hr />
                    <Comments postId={post._id} />
                </div>
            </div>}

        </div>

    );
}

export default PostPage;
