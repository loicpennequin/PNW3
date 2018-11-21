import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import mocks from './mocks.js';
import Renderer from './StyleGuideRenderer.jsx';
import './StyleGuide.sass';

import UserProfileCard from './../components/user/UserProfileCard/UserProfileCard.jsx';
import Status from './../components/status/Status/Status.jsx';
import StatusList from './../components/status/StatusList/StatusList.jsx';

const Default = () => <div>Select a component on the left</div>;

class StyleGuide extends Component {
    state = {
        asyncEnabled: false,
        timeOut: 1500
    };

    navigate = link => {
        this.setState({ displayed: { ...link } });
    };

    toggleAsync = e => {
        this.setState({ asyncEnabled: e.target.checked });
    };

    render() {
        const { displayed, asyncEnabled, timeOut } = this.state;

        return (
            <div styleName="style-guide">
                <header styleName="header">STYLE GUIDE</header>
                <div styleName="content">
                    <nav styleName="content_sidebar">
                        <div styleName="sidebar_options">
                            <input
                                type="checkbox"
                                checked={asyncEnabled}
                                onChange={this.toggleAsync}
                            />
                            <label htmlFor="enable-async">
                                Enable async props
                            </label>
                        </div>
                        <ul>
                            {StyleGuide.links.map((link, i) => (
                                <li key={i} onClick={() => this.navigate(link)}>
                                    {link.name}
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <main styleName="content_main">
                        <div styleName="content_main_component" style={{width: displayed ? 'auto' : '100%'}}>
                            {displayed ? (
                                <Renderer
                                    {...displayed}
                                    timeOut={asyncEnabled ? timeOut : 0}
                                />
                            ) : (
                                <Default />
                            )}
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}

StyleGuide.links = [
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
    }
];

export default hot(module)(StyleGuide);
