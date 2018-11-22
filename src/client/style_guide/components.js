import mocks from './mocks.js';

import UserProfileCard from './../components/user/UserProfileCard/UserProfileCard.jsx';
import Status from './../components/status/Status/Status.jsx';
import StatusList from './../components/status/StatusList/StatusList.jsx';
import Comment from './../components/comment/Comment/Comment.jsx';
import CommentList from './../components/comment/CommentList/CommentList.jsx';

export default [
    {
        name: 'User Profile Card',
        component: UserProfileCard,
        asyncProps: {
            user: mocks.DEFAULT_USER()
        }
    },
    {
        name: 'Status',
        component: Status,
        asyncProps: {
            status: mocks.DEFAULT_STATUS()
        }
    },
    {
        name: 'Status List',
        component: StatusList,
        asyncProps: {
            statuses: mocks.DEFAULT_STATUS_LIST()
        }
    },
    {
        name: 'Comment',
        component: Comment,
        asyncProps: {
            comment: mocks.DEFAULT_COMMENT()
        }
    },
    {
        name: 'Comment List',
        component: CommentList,
        asyncProps: {
            comments: mocks.DEFAULT_COMMENT_LIST()
        }
    }
];
