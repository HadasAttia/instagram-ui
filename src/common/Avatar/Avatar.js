import React from 'react';
import PropTypes from 'prop-types';
import avatarDefault from './avatar.png';
import './Avatar.scss';

function Avatar(props) {

  /*  const image = props.image || avatarDefault;
    const size = props.size || 'md';
    const className = 'Avatar--' + size;
    
    return (
        <div>
            <img src= {image} className={'Avatar' + className} alt="avatar" />
        </div>
    );*/

    const image = props.image || avatarDefault;
    const size = "Avatar-"+props.size || 'Avatar-md';
    return (

        <img className={size} src={image} alt="avatar" />

    );
}

Avatar.propTypes = {
    size: PropTypes.oneOf(['sm', 'md', 'lg'])
};

export default Avatar;
