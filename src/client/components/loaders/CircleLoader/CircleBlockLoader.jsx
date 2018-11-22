import React from 'react';
import './CircleBlockLoader.sass';

const CircleBlockLoader = ({ size, className = '' }) => (
    <div className={`${className}`} styleName={`loader ${size} `} />
);
export default CircleBlockLoader;
