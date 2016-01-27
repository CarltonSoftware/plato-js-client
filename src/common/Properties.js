var Property = require('./Property');
var Collection = require('./Collection');


function Properties(page, limit, filter) {
    this.path = 'property';
    this.options.path = 'property';
    this.options.object = Property;
    
    this.page = typeof page !== 'undefined' ? page : null;
    this.limit = typeof limit !== 'undefined' ? limit : null;
    this.filter = typeof filter !== 'undefined' ? filter : null;
}
Properties.prototype = new Collection();

module.exports = Properties;
