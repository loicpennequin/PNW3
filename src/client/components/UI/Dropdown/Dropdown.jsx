import React, { Component } from 'react';
import onOutsideClick from './../onOutsideClick/onOutsideClick.js';
import './Dropdown.sass';

class Dropdown extends Component {
    state = {
        showMenu: this.props.open === true
    };

    toggle = () => {
        this.setState(state => ({ showMenu: !state.showMenu }));
    };

    close = () => {
        this.setState({ showMenu: false });
    };

    render() {
        const { toggle: Toggle, menu: Menu } = this.props;
        const { showMenu } = this.state;
        const DropdownContent = onOutsideClick(() => (
            <>
                <div styleName="toggle" onClick={this.toggle}>
                    <Toggle />
                </div>
                {showMenu && (
                    <div styleName="menu">
                        <Menu />
                    </div>
                )}
            </>
        ));

        return (
            <div styleName="wrapper">
                <DropdownContent onClickOutside={this.close} />
            </div>
        );
    }
}

export default Dropdown;
