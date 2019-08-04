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
  const toReturn =  {
    groupingid: this.grouping.id,
    groupingvalueid: this.groupingvalue.id
  };
  
  if(this.weight === "1" || this.weight === "0") {
    toReturn.weight = this.weight;
  }

  return toReturn;
};

module.exports = PropertyGroupingValue;
