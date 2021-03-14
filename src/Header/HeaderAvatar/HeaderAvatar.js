import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../common/Avatar/Avatar';
import { UserContext } from '../../user-context';
import './HeaderAvatar.scss';

function HeaderAvatar() {

    const { user } = useContext(UserContext);

    return (
        <div className="HeaderAvatar">
            <Link to={'/profile/' + user.username}>
                <Avatar size="md" />
                <span className="mx-2 HeaderAvatar__username d-none d-lg-block">{ user.username }</span>
            </Link>
        </div>
    );
}

export default HeaderAvatar;
