import mocks from './mocks.js';

import UserProfileCard from './../components/user/UserProfileCard/UserProfileCard.jsx';
import Status from './../components/status/Status/Status.jsx';
import StatusList from './../components/status/StatusList/StatusList.jsx';
import Comment from './../components/comment/Comment/Comment.jsx';
import CommentList from './../components/comment/CommentList/CommentList.jsx';
import CommentForm from './../components/comment/CommentForm/CommentForm.jsx';
import Menu from './../components/UI/Menu/Menu.jsx';
export default [
    {
        name: 'Menu',
        component: Menu,
        asyncProps: {
            menu: mocks.DEFAULT_MENU()
        }
    },
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
        props: {
            onSubmit: ({ body }) => {
                console.log('comment posted :', body);
            }
        },
        asyncProps: {
            status: mocks.DEFAULT_STATUS()
        }
    },
    {
        name: 'Status List',
        component: StatusList,
        props: {
            onSubmit: ({ body }) => {
                console.log('comment posted :', body);
            }
        },
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
        name: 'Comment Form',
        component: CommentForm,
        props: {
            user: mocks.DEFAULT_USER(),
            onSubmit: ({ body }) => {
                console.log('comment posted :', body);
            }
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
