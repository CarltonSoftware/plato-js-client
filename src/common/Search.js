var Customer = require('./Customer');
var Owner = require('./Owner');
var Supplier = require('./Supplier');
var Property = require('./Property');
var Collection = require('./Collection');

function Search(searchterm, category, page, limit) {
  this.searchterm = searchterm;
  this.category = category;
  this.page = page;
  this.limit = limit;

  this.options = {
    path: 'search',
    discriminator: 'type',
    discriminatorMap: {
      Customer: Customer,
      Owner: Owner,
      Supplier: Supplier,
      Property: Property
    }
  };
}
Search.prototype = new Collection();

Search.prototype.toArray = function() {
  return {
    searchterm: this.searchterm,
    category: this.category,
    page: this.page,
    limit: this.limit,
  };
};

module.exports = Search;
