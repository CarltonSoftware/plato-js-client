var Customer = require('./Customer');
var Collection = require('./Collection');

function Search(page, limit, category, searchterm) {
    this.path = 'search';
    this.options.path = 'search';
    this.options.object = Customer;
    
    this.page = typeof page !== 'undefined' ? page : null;
    this.limit = typeof limit !== 'undefined' ? limit : null;
    this.category = typeof category !== 'undefined' ? category : null;
    this.searchterm = typeof searchterm !== 'undefined' ? searchterm : null;
}
Search.prototype = new Collection();

module.exports = Search;
