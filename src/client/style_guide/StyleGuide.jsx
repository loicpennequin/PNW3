import React, { Component } from 'react';
// import { hot } from 'react-hot-loader';
import { Provider } from 'react-contextual';
import { BrowserRouter as Router } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import components from './components.js';
import Renderer from './StyleGuideRenderer.jsx';
import './StyleGuide.sass';
import mocks from './mocks.js';

const store = {
    currentUser: mocks.DEFAULT_USER({
        username: 'Daria',
        contacts: [
            mocks.DEFAULT_USER(),
            mocks.DEFAULT_USER(),
            mocks.DEFAULT_USER(),
            mocks.DEFAULT_USER(),
            mocks.DEFAULT_USER()
        ]
    })
};

const Default = () => <div>Select a component on the left</div>;

class StyleGuide extends Component {
    state = {
        asyncEnabled: false,
        timeOut: 2000,
        filter: ''
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

    changeFilter = e => {
        this.setState({ filter: e.target.value });
    };

    render() {
        const { displayed, asyncEnabled, filter, timeOut } = this.state;

        const ui = <div styleName="style-guide">
            <header styleName="header">
                <a href="/" style={{ float: 'left' }}>
                    <FontAwesomeIcon icon="home" size="sm" />
                </a>
                STYLE GUIDE
            </header>
            <div styleName="content">
                <nav styleName="content_sidebar">
                    <div styleName="sidebar_options">
                        <div>
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
                        <input
                            type="text"
                            value={filter}
                            onChange={this.changeFilter}
                            placeholder="Search for a component"
                        />
                    </div>
                    <ul>
                        {components
                            .filter(c => c.name.includes(filter))
                            .map((link, i) => (
                                <li key={i}>
                                    <button
                                        styleName="content_link"
                                        onClick={() =>
                                            this.navigate(link)
                                        }
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                    </ul>
                </nav>
                <main styleName="content_main">
                    <div styleName="content_main_component">
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
        </div>;
        
        return (
            <Provider {...store}>
                <Router>
                    {ui}
                </Router>
            </Provider>
        );
    }
}

// export default hot(module)(StyleGuide);
export default StyleGuide;
