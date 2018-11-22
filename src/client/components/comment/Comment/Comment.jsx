import React from 'react';
import Avatar from './../../UI/Avatar/Avatar.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import formatTime from './../../../resources/utils/formatTime.js';

import './Comment.sass';

const Comment = ({ comment }) => (
    <div styleName="wrapper">
        <aside styleName="comment_avatar">
            <Avatar size="sm" user={comment?.author} />
        </aside>
        <div styleName="comment_content">
            <header styleName="comment_header">
                <span styleName="comment_author">
                    {comment?.author?.username}
                </span>{' '}
                commented {formatTime(comment?.created_at)}
            </header>
            <p styleName="comment_body">{comment?.body}</p>
            <footer styleName="comment_footer">
                <FontAwesomeIcon icon="thumbs-up" size="sm" />{' '}
                {comment?.likes_count}
            </footer>
        </div>
    </div>
);

export default Comment;
