var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var Collection = require('./Collection');
var PropertyLinkHolidayPeriod = require('./PropertyLinkHolidayPeriod');
var Joi = require('joi');

function PropertyLink(id) {
  this.path = 'link';
  this.createPath = 'link';
  this.id = id;
  this.childproperty = new EntityLink({ entity: 'Property' });
  this.parentproperty = new EntityLink({ entity: 'Property' });

  this.holidayperiods = new Collection({
    object: PropertyLinkHolidayPeriod,
    path: 'holidayperiod',
    parent: this
  })
}

PropertyLink.prototype = new SingleEntity();
PropertyLink.prototype.toArray = function() {
  return {
    childpropertyid: this.childproperty.id
  };
};

PropertyLink.prototype.validSchema = function() {
  return Joi.object().keys({
    childproperty: Joi.object().optional().label('Linked Property')
  });
};

module.exports = PropertyLink;
