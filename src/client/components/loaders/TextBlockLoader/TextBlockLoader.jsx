import React from 'react';
import './TextBlockLoader.sass';

const TextBlockLoader = ({ size, className = ''}) => (
    <div className={`${className}`} styleName={`loader ${size} `} />
);
export default TextBlockLoader;
