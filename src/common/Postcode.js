var Collection = require('./Collection');
var Address = require('./Address');

function Postcode(postcode, house) {
  this.options.object = Address;

  this.postcode = postcode;
  this.house = house;

  this.getPath = function() {
    var path = 'postcode/' + this.postcode;
    if (this.house) {
      path += '/' + this.house;
    }
    return path;
  };
}
Postcode.prototype = new Collection();

module.exports = Postcode;
