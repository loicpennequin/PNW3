const fs = require('fs');
const Bookshelf = require('./../services/database.js');
const toSlice = 'Model.js'.length;

let models = {};

class Model {
    constructor(model, modelName) {
        this._model = Bookshelf.model(modelName, model);
    }

    async findAll(filter, options) {
        return (await this._model
            .forge()
            .where(Object.assign({}, filter))
            .fetchAll(options)).toJSON(options.serialize);
    }

    async findOne(query, options) {
        options = Object.assign({ require: true }, options);
        return (await this._model.forge(query).fetch(options)).toJSON(
            options.serialize
        );
    }

    async findById(id, options) {
        return (await this.findOne(
            { [this._model.prototype.idAttribute]: id },
            options
        )).toJSON(options.serialize);
    }

    async create(data, options) {
        const model = await this._model.forge(data);
        const validationErrors = model.validationErrors();
        return validationErrors
            ? { error: { ...validationErrors } }
            : (await model.save(null, options)).toJSON(options.serialize);
    }

    async destroy(options) {
        options = Object.assign({ require: true }, options);
        return (await this._model
            .forge({ [this._model.prototype.idAttribute]: options.id })
            .destroy(options)).toJSON(options.serialize);
    }

    async update(data, options) {
        options = Object.assign({ patch: true, require: true }, options);
        return (await this_model
            .forge({ [this._model.prototype.idAttribute]: options.id })
            .fetch(options)
            .then(
                model => (model ? model.save(data, options) : undefined)
            )).toJSON(options.serialize);
    }
}

fs.readdirSync(__dirname)
    .filter(file => {
        return file.indexOf('.') !== 0 && file !== 'index.js';
    })
    .forEach(file => {
        const name = file.slice(0, file.length - toSlice);
        const model = require(`./${file}`);
        models[name] = new Model(model, name);
    });

module.exports = models;
