var SingleEntity = require('./SingleEntity');
var Document = require('./Document');

function PersonalisedBrochure(id) {
  this.path = 'personalisedbrochure';
  this.createPath = 'personalisedbrochure';
  this.id = id;
}

PersonalisedBrochure.prototype = new SingleEntity();

PersonalisedBrochure.prototype.print = function(customer, filterCollection, options) {
	var d = new Document();
  return d.createPromiseResult(
    [this.path, this.id, 'print'].join('/'),
    { 
      customerid: customer.id,
      filter: filterCollection.getFilterString().substring(8),
      optionids: options.join(',')
    }
  );
};

module.exports = PersonalisedBrochure;
