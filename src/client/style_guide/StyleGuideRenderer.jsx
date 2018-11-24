import React, { Component } from 'react';

class StyleGuideRenderer extends Component {
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.name !== prevState.name) {
            return {
                name: nextProps.name,
                props: nextProps.props,
                asyncProps: nextProps.asyncProps,
                asyncPropsLoaded: {}
            };
        } else {
            return null;
        }
    }

    state = {
        name: '',
        props: this.props.props,
        asyncProps: {},
        asyncPropsLoaded: {}
    };

    componentDidMount() {
        this._loadAsyncProps();
    }

    componentDidUpdate() {
        this._loadAsyncProps();
    }

    _loadAsyncProps() {
        if (
            JSON.stringify(this.state.asyncProps) !==
            JSON.stringify(this.state.asyncPropsLoaded)
        ) {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                this.setState({ asyncPropsLoaded: this.props.asyncProps });
            }, this.props.timeOut);
        }
    }

    render() {
        const Component = this.props.component;
        const { props, asyncPropsLoaded } = this.state;
        return <Component {...props} {...asyncPropsLoaded} />;
    }
}

export default StyleGuideRenderer;
