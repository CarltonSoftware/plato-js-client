var Agency = require('./Agency');
var Collection = require('./Collection');


function AgencyCollection(page, limit) {
    this.path = 'agency';
    this.options.path = 'agency';
    this.options.object = Agency;

    this.page = typeof page !== 'undefined' ? page : null;
    this.limit = typeof limit !== 'undefined' ? limit : null;
}
AgencyCollection.prototype = new Collection();

module.exports = AgencyCollection;
