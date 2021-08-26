var SingleEntity = require('./SingleEntity');
var Joi = require('joi');
var Property = require('./Property');
var ChannelPropertyGroup = require('./ChannelPropertyGroup');

function BlockPeriodException(id) {
  this.path = 'exception';
  this.createPath = this.path;
  this.id = id;
  this.type = 'Property';
  this.channelpropertygroup = new ChannelPropertyGroup();
  this.property = new Property();

  this.validSchema = function() {
    var s = {
      type: Joi.any().valid('Property','PropertyGroup').label('Type'),
      fromdate: Joi.date().required().label('From date').description('Starting date of the period that the block period applies too.'),
      todate: Joi.date().required().label('To date').description('End date of the period that the block period applies too.'),
      block: Joi.boolean().required().label('Block?')
    }

    if (this.type === 'Property') {
      s.property = Joi.object().required().label('Property')
    } else {
      s.channelpropertygroup = Joi.object().required().label('Property Group')
    }

    return s;
  };
}

BlockPeriodException.prototype = new SingleEntity();
BlockPeriodException.prototype.toArray = function() {
  var a = {
    type: this.type,
    block: this.block,
    fromdate: this.fromdate,
    todate: this.todate
  };

  if (this.property.id) {
    a.propertyid = this.property.id;
  } else if (this.channelpropertygroup.id) {
    a.channelpropertygroupid = this.channelpropertygroup.id;
  }

  return a;
};

module.exports = BlockPeriodException;
