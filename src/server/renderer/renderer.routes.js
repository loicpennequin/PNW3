const router = require('express').Router();
const Renderer = require('./renderer.controller.js');
const StyleGuide = require('./styleguide.controller.js');
const appPath = './../views/app.ssr.js';

if (process.env.NODE_ENV === 'development') {
    delete require.cache[appPath];
}

let { routes } = require(appPath);

routes.forEach(route => {
    router.get(route.path, Renderer);
});

if (process.env.NODE_ENV !== 'development') {
    // Temporarily enable style guide in production to show it to Jun-sempai
    router.get('/styleguide', StyleGuide);

    router.get('/*', Renderer);
} else {
    // router.get('/styleguide', StyleGuide);
}


module.exports = router;
