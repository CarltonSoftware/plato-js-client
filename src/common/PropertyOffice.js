var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

function PropertyOffice(id) {
  this.path = 'office';
  this.createPath = 'office';
  this.id = id;
  this.office = new EntityLink({
    entity: 'Office'
  });
}
PropertyOffice.prototype = new SingleEntity();

PropertyOffice.prototype.toArray = function() {
  return {
    officeid: this.office.id,
    fromdate: this.fromdate,
    todate: this.todate
  };
};

module.exports = PropertyOffice;
