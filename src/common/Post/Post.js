import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';
import './Post.scss';
import PostDate from './PostDate/PostDate';

function Post({ data }) {
    

    return (
        <div>
            <article>
                <header>
                    <div>
                        <Avatar size="sm" image={data.user.avatar} />
                    </div>
                    <div>
                        <PostDate date={data.createdAt} />
                    </div>
                </header>
                <div>
                    <Link to={'/post' + data._id}>
                    <img src={'data:; base64,' + data.image} alt='' />
                    </Link>
                </div>
                <div>
                    <h2>{data.description}</h2>
                </div>
            </article>
        </div>
    );
}

export default Post;
