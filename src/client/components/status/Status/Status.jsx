import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from './../../UI/Avatar/Avatar.jsx';
import formatTime from './../../../resources/utils/formatTime.js';
import createMarkup from './../../../resources/utils/createMarkup.js';
import './Status.sass';

const Status = ({status}) => (
    <div styleName="wrapper">
        <header styleName="status_header">
            <Avatar
                user={status?.author}
                size="sm"
                styleName="status_avatar"
            />
            <div>
                <span styleName="status_author">
                    {status?.author?.username}
                </span>{' '}
                published {formatTime(status?.created_at)} :
            </div>
        </header>
        <div styleName="status_body" dangerouslySetInnerHTML={createMarkup(status?.body)} />
        <footer styleName="status_footer">
            <div styleName="status_action">
                <FontAwesomeIcon icon="comments" fixedWidth styleName="status_action_icon"/>
                {status?.comments_count}
            </div>
            <div styleName="status_action">
                <FontAwesomeIcon icon="thumbs-up" fixedWidth styleName="status_action_icon"/>
                {status?.likes_count}
            </div>
            <div styleName="status_action">
                <FontAwesomeIcon icon="share" fixedWidth styleName="status_action_icon"/>
                {status?.shares_count}
            </div>
        </footer>
    </div>
);

export default Status;
