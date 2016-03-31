var SingleEntity = require('./SingleEntity');
var Grouping = require('./Grouping');
var GroupingValue = require('./GroupingValue');

function PropertyGroupingValue(id) {
  this.path = 'groupingvalue';
  this.createPath = this.path;
  this.id = id;

  this.grouping = new Grouping();
  this.groupingvalue = new GroupingValue();
}

PropertyGroupingValue.prototype = new SingleEntity();
PropertyGroupingValue.prototype.toArray = function() {
  return {
    id: this.id,
    groupingid: this.grouping.id,
    groupingvalueid: this.groupingvalue.id
  };
};

module.exports = PropertyGroupingValue;
