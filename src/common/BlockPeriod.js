var SingleEntity = require('./SingleEntity');
var BlockPeriodChannelBookingBrand = require('./BlockPeriodChannelBookingBrand');
var Collection = require('./Collection');
var Joi = require('joi');

function BlockPeriod(id) {
  this.path = 'blockperiod';
  this.createPath = this.path;
  this.id = id;

  this.channelbookingbrands = new Collection({
    object: BlockPeriodChannelBookingBrand,
    path: 'channelbookingbrand',
    parent: this
  });

  this.validSchema = function() {
    return {
      name: Joi.string().required().label('Name').description('Name of the block period'),
      description: Joi.string().required().label('Description').description('Description of the block period'),
      fromdate: Joi.date().required().label('From date').description('Starting date of the period that the block period applies too.'),
      todate: Joi.date().required().label('To date').description('End date of the period that the block period applies too.')
    }
  };
}

BlockPeriod.prototype = new SingleEntity();
BlockPeriod.prototype.toArray = function() {
  return {
    name: this.name,
    description: this.description,
    fromdate: this.fromdate,
    todate: this.todate
  };
};

module.exports = BlockPeriod;
