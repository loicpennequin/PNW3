// import './../resources/utils/hot-loader-config.js';
import React from 'react';
import { render } from 'react-dom';
import './../styles/app.sass';
import './../resources/services/iconService.js';
import StyleGuide from './StyleGuide.jsx';

document.addEventListener('DOMContentLoaded', () => {
    render(<StyleGuide />, document.getElementById('app'));
});
