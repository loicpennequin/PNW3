import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dropdown from './../../UI/Dropdown/Dropdown.jsx';
import Avatar from './../../UI/Avatar/Avatar.jsx';
import TextBlockLoader from './../../loaders/TextBlockLoader/TextBlockLoader.jsx';
import CircleBlockLoader  from './../../loaders/CircleLoader/CircleBlockLoader.jsx';
import './UserProfileCard.sass';

const LoaderTemplate = () => (
    <div styleName="wrapper">
        <header styleName="header">
            <CircleBlockLoader size="lg" styleName="avatar"/>
        </header>
        <main styleName="body">
            <TextBlockLoader size="md" className="block-center" />
            <TextBlockLoader size="sm" className="block-center" />
            <TextBlockLoader size="sm" className="block-center" />
        </main>
        <footer styleName="footer">
            <div styleName="friends-count">
                <CircleBlockLoader size="sm"/>
            </div>
            <div styleName="social-bar">
                <a styleName="link">
                    <CircleBlockLoader size="xs"/>
                </a>
                <a styleName="link">
                    <CircleBlockLoader size="xs"/>
                </a>
                <a styleName="link">
                    <CircleBlockLoader size="xs"/>
                </a>
            </div>
        </footer>
    </div>
);

export { LoaderTemplate };

const UserProfileCard = ({ user }) => {
    const OptionsToggle = () => <FontAwesomeIcon icon="ellipsis-v" size="lg" />;

    const OptionsMenu = () => (
        <ul>
            <li>Add as friend</li>
            <li>Send message</li>
            <li>Block user</li>
        </ul>
    );

    if (!user) {
        return <LoaderTemplate />;
    }

    return (
        <div styleName="wrapper">
            <header styleName="header">
                <div styleName="icon-options">
                    <Dropdown toggle={OptionsToggle} menu={OptionsMenu} />
                </div>
                <Avatar size="lg" user={user} styleName="avatar" />
            </header>
            <main styleName="body">
                <h4>{user?.username}</h4>
                <small>{user?.bio}</small>
            </main>
            <footer styleName="footer">
                <div styleName="friends-count">
                    <div styleName="count">{user?.friends_count}</div>
                    <small>friends</small>
                </div>
                <div styleName="social-bar">
                    <a styleName="link">
                        <FontAwesomeIcon
                            icon={['fab', 'github']}
                            fixedWidth
                            size="lg"
                        />
                    </a>
                    <a styleName="link">
                        <FontAwesomeIcon
                            icon={['fab', 'facebook']}
                            fixedWidth
                            size="lg"
                        />
                    </a>
                    <a styleName="link">
                        <FontAwesomeIcon
                            icon={['fab', 'twitter']}
                            fixedWidth
                            size="lg"
                        />
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default UserProfileCard;
