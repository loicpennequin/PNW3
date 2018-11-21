require('ignore-styles');

require('@babel/register')({
    only: [/src/],
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
        '@babel/plugin-proposal-optional-chaining',
        ['@babel/plugin-proposal-decorators', {
            legacy: true
        }],
    ]
});
require('@babel/polyfill');
require('./index');
