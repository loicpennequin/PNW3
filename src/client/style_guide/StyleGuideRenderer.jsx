import React, { Component } from 'react';

class StyleGuideRenderer extends Component {
    static getDerivedStateFromProps(nextProps, prevState) {
        if (
            JSON.stringify(nextProps.props) !==
                JSON.stringify(prevState.props) ||
            JSON.stringify(nextProps.asyncProps) !==
                JSON.stringify(prevState.asyncProps)
        ) {
            return { props: nextProps.props, asyncProps: nextProps.asyncProps, asyncPropsLoaded : {} };
        } else {
            return null;
        }
    }

    state = {
        props: this.props.props,
        asyncProps: {},
        asyncPropsLoaded: {},
    };

    componentDidMount(){
        this._loadAsyncProps();
    }

    componentDidUpdate() {
        this._loadAsyncProps();
    }

    _loadAsyncProps(){
        if (JSON.stringify(this.state.asyncProps) !== JSON.stringify(this.state.asyncPropsLoaded)) {
            setTimeout( () => {
                this.setState({asyncPropsLoaded: this.props.asyncProps});
            }, this.props.timeOut);
        }
    }

    render() {
        const Component = this.props.component;
        const { props, asyncPropsLoaded } = this.state;
        console.log(asyncPropsLoaded);
        return <Component {...props} {...asyncPropsLoaded} />;
    }
}

export default StyleGuideRenderer;
