import React from 'react';
import Avatar from '../../common/Avatar/Avatar';

function SearchResault({ user }) {
    
    return (
        <div>
            <div>
                <div>
                    <Avatar sise="md" image={user.avatar} />
                </div>
                <div>
                    <strong>{ user.username }</strong>
                    <p>{ user.bio }</p>
                </div>
            </div>
        </div>
    );
}

export default SearchResault;
