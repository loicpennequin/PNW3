import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import formatTime from './../../../resources/utils/formatTime.js';
import createMarkup from './../../../resources/utils/createMarkup.js';
import Avatar from './../../UI/Avatar/Avatar.jsx';
import TextBlockLoader from './../../loaders/TextBlockLoader/TextBlockLoader.jsx';
import CommentList from './../../comment/CommentList/CommentList.jsx';
import './Status.sass';

const LoaderTemplate = status => (
    <div styleName="wrapper">
        <div styleName="status">
            <header styleName="status_header">
                <Avatar
                    user={status?.author}
                    size="sm"
                    styleName="status_avatar"
                />
                <div>
                    <TextBlockLoader size="sm" styleName="loader" />
                </div>
            </header>
            <div styleName="status_body">
                <TextBlockLoader size="sm" styleName="loader" />
                <TextBlockLoader size="sm" styleName="loader" />
            </div>
            <footer styleName="status_footer" />
        </div>
    </div>
);
export { LoaderTemplate };

const Status = ({ status }) => {
    const [showcomments, setShowcomments] = useState(false);
    const toggleComments = () => {
        setShowcomments(!showcomments);
    };
    if (!status) {
        return <LoaderTemplate />;
    }

    return (
        <div styleName="wrapper">
            <div styleName="status">
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
                <div
                    styleName="status_body"
                    dangerouslySetInnerHTML={createMarkup(status?.body)}
                />
                <footer styleName="status_footer">
                    <button styleName="status_action" onClick={toggleComments}>
                        <FontAwesomeIcon
                            icon="comments"
                            fixedWidth
                            styleName="status_action_icon"
                        />
                        {status?.comments_count}
                    </button>
                    <button styleName="status_action">
                        <FontAwesomeIcon
                            icon="thumbs-up"
                            fixedWidth
                            styleName="status_action_icon"
                        />
                        {status?.likes_count}
                    </button>
                    <button styleName="status_action">
                        <FontAwesomeIcon
                            icon="share"
                            fixedWidth
                            styleName="status_action_icon"
                        />
                        {status?.shares_count}
                    </button>
                </footer>
            </div>
            {showcomments && <CommentList comments={status.comments} />}
        </div>
    );
};

export default Status;
