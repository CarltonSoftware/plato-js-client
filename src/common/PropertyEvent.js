var SingleEntity = require('./SingleEntity');
var PropertyEventCategory = require('./PropertyEventCategory');

function PropertyEvent(id) {
  this.path = this.createPath = 'event';
  this.id = id;
  this.propertyeventcategory = new PropertyEventCategory();
}
PropertyEvent.prototype = new SingleEntity();

PropertyEvent.prototype.toArray = function() {
console.log('hmm', {
    propertyeventcategoryid: this.propertyeventcategory.id,
    name: this.name,
    description: this.description,
    startdatetime: this.startdatetime,
    enddatetime: this.enddatetime,
    movable: this.movable,
    donotcommunicatetocustomer: this.donotcommunicatetocustomer
  });

  return {
    propertyeventcategoryid: this.propertyeventcategory.id,
    name: this.name,
    description: this.description,
    startdatetime: this.startdatetime,
    enddatetime: this.enddatetime,
    movable: this.movable,
    donotcommunicatetocustomer: this.donotcommunicatetocustomer
  };
};

module.exports = PropertyEvent;
