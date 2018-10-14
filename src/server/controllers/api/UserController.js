/*
* User controller.
*
*/
const models = require('./../../models');

class UserController {
    async findAll(queryParams) {
        logger.debug('UserController | findAll');
        return {
            data: {
                ...await models.User.findAll(queryParams)
            }
        };
    }

    async findbyId(id, queryParams) {
        logger.debug('UserController | findbyId');
        return {
            data: {
                ...await models.User.findOne(id, queryParams)
            }
        };
    }

    async create(data) {
        logger.debug('UserController | create');
        return {
            data: {
                ...await models.User.create(data)
            }
        };
    }

    async destroy(id, queryParams) {
        logger.debug('UserController | destroy');
        return {
            data: {
                ...await models.User.destroy(id, queryParams)
            }
        };
    }

    async update(id, data) {
        logger.debug('UserController | update');
        return {
            data: {
                ...await models.User.update(id, {}, data)
            }
        };
    }
}

module.exports = new UserController();
