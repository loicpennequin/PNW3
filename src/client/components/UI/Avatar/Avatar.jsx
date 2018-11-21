import React from 'react';
import './Avatar.sass';

const Avatar = ({ user, size, className }) => (
    <div styleName={`wrapper ${size ? size : 'md'}`} className={className}>
        {user?.avatar_url ? (
            <img src={user?.avatar_url} />
        ) : (
            <div>{user?.username?.slice(0, 1)?.toUpperCase()}</div>
        )}
    </div>
);

export default Avatar;
