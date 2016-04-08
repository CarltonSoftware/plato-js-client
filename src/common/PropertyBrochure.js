var SingleEntity = require('./SingleEntity');
var Brochure = require('./Brochure');

function PropertyBrochure(id) {
  this.path = 'brochure';
  this.createPath = this.path;
  this.id = id;
  this.brochure = new Brochure;
}

PropertyBrochure.prototype = new SingleEntity();
PropertyBrochure.prototype.toArray = function() {
  return {
    brochureid: this.brochure.id,
    page: this.page,
    sequence: this.sequence,
    prominence: this.prominence,
  };
};

module.exports = PropertyBrochure;
