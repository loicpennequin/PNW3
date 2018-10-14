const path = require('path');
const models = require(path.join(__dirname, '../../src/server/models'));
const Chance = require('chance');
const chance = new Chance();
const logger = require(path.join(__dirname, '../../src/server/logger/logger.js'));
const slugify = require('slugify');
const cfg = require(path.join(__dirname, '../../knexfile.js'));
const knex = require('knex')(cfg);

(async function() {
	const _populate = async (model, seed, amount) => {
		let promises = [];
		for (let i = 1; i <= amount; i++) {
			promises.push(model.forge(seed()).save());
		}
		return await Promise.all(promises);
	};

	process.exit();
})();
