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
    everysaturday: this.everysaturday,
    everysunday: this.everysunday,
    everymonday: this.everymonday,
    everytuesday: this.everytuesday,
    everywednesday: this.everywednesday,
    everythursday: this.everythursday,
    everyfriday: this.everyfriday,
    isfromdate: this.isfromdate,
    istodate: this.istodate,
    isnotfromdate: this.isnotfromdate,
    isnottodate: this.isnottodate,
    ispriceanchor: this.ispriceanchor,
    isnotpriceanchor: this.isnotpriceanchor,
    showonavailability : this.showonavailability,
    minimumholiday: this.minimumholiday,
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

  // Set withindays to a v large value by default if one not provided
  array.withindays = this.withindays != '' ? this.withindays : 999;


  return array;
};

ChangeDayTemplateRule.prototype.validSchema = function() {
    return Joi.object().keys({
    ruleorder: Joi.number().integer().required('rule order'),
    everysaturday: Joi.boolean().label('every Saturday'),
    everysunday: Joi.boolean().label('every Sunday'),
    everymonday: Joi.boolean().label('every Monday'),
    everytuesday: Joi.boolean().label('every Tuesday'),
    everywednesday: Joi.boolean().label('every Wednesday'),
    everythursday: Joi.boolean().label('every Thursday'),
    everyfriday: Joi.boolean().label('every Friday'),
    fromdate: Joi.string().allow('').optional().label('from date'), // TODO: If present must be within the template bounds
    todate: Joi.string().allow('').optional().label('to date'), // TODO: If present must be within the template bounds
    isfromdate: Joi.boolean().label('is from date'),
    istodate: Joi.boolean().label('is to date'),
    isnotfromdate: Joi.boolean().label('is not from date'),
    isnottodate: Joi.boolean().label('is not to date'),
    ispriceanchor: Joi.boolean().label('is price anchor'),
    isnotpriceanchor: Joi.boolean().label('is not price anchor'),
    withindays: Joi.number().allow('').optional().label('within days'),
    unlessholidayatleast: Joi.string().allow('').optional().label('unless holiday at least'),
    showonavailability: Joi.boolean().label('show on availability'),
    daysbeforeeaster: Joi.number().allow('').optional().label('days before Easter'),
    daysaftereaster: Joi.number().allow('').optional().label('days after Easter'),
    minimumholiday: Joi.number().allow('').optional().label('minimum holiday')
  });
};

module.exports = ChangeDayTemplateRule;
