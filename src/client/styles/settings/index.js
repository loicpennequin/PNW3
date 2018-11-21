const path = require('path');
const resources = [
    'colors.sass',
    'typography.sass',
    'spacing.sass',
    'layout.sass',
    'keyframes.sass',
    'mixins.sass'
];
module.exports = resources.map(file => path.resolve(__dirname, file));
