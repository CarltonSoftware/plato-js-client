var SingleEntity = require('./SingleEntity');

function ChangeDayTemplateRule(changedaytemplateid, id) {
  this.path = 'changedaytemplate/' + changedaytemplateid + '/rule';
  this.createPath = this.path;
  this.id = id;
}

ChangeDayTemplateRule.prototype = new SingleEntity();

ChangeDayTemplateRule.prototype.toArray = function() {
  var array = {
    ruleorder: this.ruleorder,
    everysaturday: this.everysaturday ? 'true' : 'false',
    everysunday: this.everysunday ? 'true' : 'false',
    everymonday: this.everymonday ? 'true' : 'false',
    everytuesday: this.everytuesday ? 'true' : 'false',
    everywednesday: this.everywednesday ? 'true' : 'false',
    everythursday: this.everythursday ? 'true' : 'false',
    everyfriday: this.everyfriday ? 'true' : 'false',
    isfromdate: this.isfromdate ? 'true' : 'false',
    istodate: this.istodate ? 'true' : 'false',
    isnotfromdate: this.isnotfromdate ? 'true' : 'false',
    isnottodate: this.isnottodate ? 'true' : 'false',
    showonavailability : this.showonavailability,
    minumumholiday: this.minimumholiday,
    daysbeforeeaster: this.daysbeforeeaster,
    daysaftereaster: this.daysaftereaster,
    description: this.description
  };

  if (this.fromdate != '') {
    array.fromdate = this.fromdate;
  }
  if (this.todate != '') {
    array.todate = this.todate;
  }
  if (this.unlessholidayatleast != '') {
    array.unlessholidayatleast = this.unlessholidayatleast;
  }
  if (this.withindays != '') {
    array.withindays = this.withindays;
  }


  return array;
};

module.exports = ChangeDayTemplateRule;
