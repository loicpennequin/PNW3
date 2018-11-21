import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import components from './components.js';
import Renderer from './StyleGuideRenderer.jsx';
import './StyleGuide.sass';

const Default = () => <div>Select a component on the left</div>;

class StyleGuide extends Component {
    state = {
        asyncEnabled: true,
        timeOut: 2000
    };

    navigate = link => {
        this.setState({ displayed: { ...link } });
    };

    back = () => {
        this.props.history.goBack();
    };

    toggleAsync = e => {
        this.setState({ asyncEnabled: e.target.checked });
    };

    render() {
        const { displayed, asyncEnabled, timeOut } = this.state;

        return (
            <div styleName="style-guide">
                <header styleName="header">
                    <a href="/" style={{ float: 'left' }}>
                        <FontAwesomeIcon icon="home" size="md" />
                    </a>
                    STYLE GUIDE
                </header>
                <div styleName="content">
                    <nav styleName="content_sidebar">
                        <div styleName="sidebar_options">
                            <input
                                type="checkbox"
                                checked={asyncEnabled}
                                onChange={this.toggleAsync}
                                id="enable-async"
                            />
                            <label htmlFor="enable-async">
                                Enable async props
                            </label>
                        </div>
                        <ul>
                            {components.map((link, i) => (
                                <li key={i} onClick={() => this.navigate(link)}>
                                    {link.name}
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <main styleName="content_main">
                        <div
                            styleName="content_main_component"
                            style={{ width: displayed ? 'auto' : '100%' }}
                        >
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

export default hot(module)(StyleGuide);
