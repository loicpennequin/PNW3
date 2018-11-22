import React from 'react';
import CircleLoader from './../../loaders/CircleLoader/CircleBlockLoader.jsx';
import './Avatar.sass';

const Avatar = ({ user, size, className = '' }) => {
    if (!user) {
        return <CircleLoader size={size ? size : 'md'} className={className}/>;
    }

    return (
        <div styleName={`wrapper ${size ? size : 'md'}`} className={className}>
            {user?.avatar_url ? (
                <img src={user?.avatar_url} />
            ) : (
                <div>{user?.username?.slice(0, 1)?.toUpperCase()}</div>
            )}
        </div>
    );
};

export default Avatar;
