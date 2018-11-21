const User = require('./user.model.js');

const UserController = function() {
    this.findAll = async ({ filter, ...queryParams }) => {
        logger.debug('UserController | findAll');
        return {
            data: [...(await User.findAll(filter, null, queryParams))]
        };
    };

    this.findOne = async (query, options) => {
        logger.debug('UserController | findOne');
        const user = await User.findOne(query, options);
        return {
            data: {
                ...user
            }
        };
    };

    this.findById = async (id, queryParams) => {
        logger.debug('UserController | findbyId');
        const user = await User.findById(id, queryParams);

        return {
            data: {
                ...user
            }
        };
    };

    this.create = async data => {
        logger.debug('UserController | create');
        return {
            data: {
                ...(await User.create(data))
            }
        };
    };
};

module.exports = new UserController();
