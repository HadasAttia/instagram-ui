import React, { useState } from 'react';
import { PostService } from '../../../services/post.service';

function CommentAdd({ postId, onCommentAdd }) {

    const [content, setContent] = useState('');

    async function submit(e) {
        e.preventDefault();
        const comment = await PostService.addComment(postId, content);
        onCommentAdd(comment);
        setContent('');
    }

    
    return (
        <div>
            <form onSubmit={submit}>
                <div>
                <textarea placeholder="Add a comment.."
                    onChange={(e) => setContent(e.target.value)}
                    className="form-control">
                    {content}
                </textarea>
                </div>
                <div>
                    <button>Post</button>
                </div>
            </form>
            
        </div>
    );
}

export default CommentAdd;
