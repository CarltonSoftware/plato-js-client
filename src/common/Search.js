var Customer = require('./Customer');
var Owner = require('./Owner');
var Supplier = require('./Supplier');
var Property = require('./Property');
var Collection = require('./Collection');

function Search(page, limit, category, searchterm) {
  this.page = page;
  this.limit = limit;
  this.category = category;
  this.searchterm = searchterm;

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

module.exports = Search;
