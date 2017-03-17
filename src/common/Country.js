var SingleEntity = require('./SingleEntity');

function Country(id) {
  this.path = 'country';
  this.createPath = 'country';
  this.id = id;
}
Country.prototype = new SingleEntity();
Country.prototype.toArray = function() {
  return {
    name: this.name,
    alpha2: this.alpha2,
    alpha3: this.alpha3,
    phonecode: this.phonecode
  };
};
Country.prototype.toString = function() {
  return this.name;
};


module.exports = Country;
