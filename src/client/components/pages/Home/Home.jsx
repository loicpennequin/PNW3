import React, { Component } from 'react';
import { subscribe } from 'react-contextual';
import './Home.sass';

@subscribe(mapStateToProps)
class Home extends Component {



    render() {

        return (
            <div>
                Home
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
    };
}

const homeFetch = async () => ({});

export { homeFetch };

export default Home;
