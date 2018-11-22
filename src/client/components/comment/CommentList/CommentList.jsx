import React from 'react';
import Comment, { LoaderTemplate } from './../Comment/Comment.jsx';
import './CommentList.sass';

const CommentList = ({ comments }) => {
    if (!comments) {
        return (
            <div styleName="wrapper">
                <LoaderTemplate />
                <div style={{ opacity: '0.8'}}>
                    <LoaderTemplate />
                </div>
                <div style={{ opacity: '0.5'}}>
                    <LoaderTemplate />
                </div>
            </div>
        );
    }

    return (
        <div styleName="wrapper">
            {comments?.map(comment => (
                <Comment key={'comment-' + comment?.id} comment={comment} />
            ))}
        </div>
    );
};
export default CommentList;
