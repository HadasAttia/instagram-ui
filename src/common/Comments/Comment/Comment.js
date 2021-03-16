import React from 'react';
import Avatar from '../../Avatar/Avatar';

function Comment({ comment }) {
    
    return (
        <div>
            <Avatar image={comment.user.avatar} />
            <p>{comment.content}</p>
        </div>
    );
}

export default Comment;

// add createdat