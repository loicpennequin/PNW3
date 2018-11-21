const template = require('./template.js');

module.exports = (req, res) => {
    logger.info(`StyleGuideController : ${req.url}
       ===================================`);

    res.send(template('styleguide', '', undefined));
};
