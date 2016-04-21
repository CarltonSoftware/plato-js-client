var SingleEntity = require('./SingleEntity');

function ChangeDayTemplateRule(changedaytemplateid, id) {
  this.path = 'changedaytemplate/' + changedaytemplateid + '/rule';
  this.createPath = this.path;
  this.id = id;
}
ChangeDayTemplateRule.prototype = new SingleEntity();

ChangeDayTemplateRule.prototype.toArray = function() {
  return {
    ruleorder: this.ruleorder,
    everysaturday: this.everysaturday ? 'true' : 'false',
    everysunday: this.everysunday ? 'true' : 'false',
    everymonday: this.everymonday ? 'true' : 'false',
    everytuesday: this.everytuesday ? 'true' : 'false',
    everywednesday: this.everywednesday ? 'true' : 'false',
    everythursday: this.everythursday ? 'true' : 'false',
    everyfriday: this.everyfriday ? 'true' : 'false',
    fromdate: this.fromdate,
    todate: this.todate,
    isfromdate: this.isfromdate ? 'true' : 'false',
    istodate: this.istodate ? 'true' : 'false',
    isnotfromdate: this.isnotfromdate ? 'true' : 'false',
    isnottodate: this.isnottodate ? 'true' : 'false',
    withindays: this.withindays,
    unlessholidayatleast: this.unlessholidayatleast,
    showonavailability : this.showonavailability,
    description : this.description
  };

};

module.exports = ChangeDayTemplateRule;
