import React, { PureComponent } from 'react';

const onOutsideClick = (Wrapped) =>
    class OnOutsideClick extends PureComponent {
        el = React.createRef();
        onClick = this.onClick.bind(this);

        componentDidMount() {
            document.addEventListener('click', this.onClick);
        }

        componentWillUnmount() {
            document.removeEventListener('click', this.onClick);
        }

        onClick(e){
            if (!this.el?.current?.contains(e.target)){
                this.props.onClickOutside(e);
            }
        }

        render() {
            return (
                <div ref={this.el}>
                    <Wrapped {...this.props}/>
                </div>
            );
        }
    };

export default onOutsideClick;
