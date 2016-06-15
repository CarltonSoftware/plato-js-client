var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

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

ChangeDayTemplateRule.prototype.validSchema = function() {
    return Joi.object().keys({
    ruleorder: Joi.number().integer().required('ruleorder'),
    everysaturday: Joi.boolean().label('everysaturday'),
    everysunday: Joi.boolean().label('everysunday'),
    everymonday: Joi.boolean().label('everymonday'),
    everytuesday: Joi.boolean().label('everytuesday'),
    everywednesday: Joi.boolean().label('everywednesday'),
    everythursday: Joi.boolean().label('everythursday'),
    everyfriday: Joi.boolean().label('everyfriday'),
    fromdate: Joi.string().allow('').optional().label('fromdate'), // TODO: If present must be within the template bounds
    todate: Joi.string().allow('').optional().label('todate'), // TODO: If present must be within the template bounds
    isfromdate: Joi.boolean().label('isfromdate'),
    istodate: Joi.boolean().label('istodate'),
    isnotfromdate: Joi.boolean().label('isnotfromdate'),
    isnottodate: Joi.boolean().label('isnottodate'),
    withindays: Joi.number().allow('').optional().label('withindays'),
    unlessholidayatleast: Joi.string().allow('').optional().label('unlessholidayatleast'),
    showonavailability: Joi.boolean().label('showonavailability'),
    daysbeforeeaster: Joi.number().allow('').optional().label('daysbeforeeaster'),
    daysaftereaster: Joi.number().allow('').optional().label('daysaftereaster'),
    minimumholiday: Joi.number().allow('').optional().label('minimumholiday')
  });
};

module.exports = ChangeDayTemplateRule;
