const template = require('./template.js');

module.exports = async (req, res) => {
    logger.info(`StyleGuideRenderer : ${req.url}
       ===================================`);
    res.send(await template('styleguide', '', 'styleguide', undefined));
};
