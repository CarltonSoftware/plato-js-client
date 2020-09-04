var SingleEntity = require('./SingleEntity');
var Joi = require('joi');
var StaticCollection = require('./StaticCollection');
var Branding = require('./Branding');
var ExtraGroup = require('./ExtraGroup');

function Extra(id) {
  this.path = 'extra';
  this.createPath = 'extra';
  this.id = id;
  this.extragroup = new ExtraGroup();
  this.brandings = new StaticCollection({
    object: Branding
  });

  this.validSchema = function() {
    return {
      extracode: Joi.string().required().label('extra code'),
      extratype: Joi.string().required().allow(['Booking', 'Marketing']).label('extra type'),
      description: Joi.string().required().label('description'),
      extragroup: Joi.object().label('extra group'),
      petextra: Joi.boolean().required().label('is a pet extra'),
      priceasattransferdate: Joi.boolean().required().label('Price at transfer date?').description(
        'When a booking is transferred, the "booking booked date" used to determine the '
        + 'relevant configuration and pricing for the new extra can be set to either the '
        + 'booked date of the original booking, or the date of the transfer.'
      )
    }
  };
}

Extra.prototype = new SingleEntity();
Extra.prototype.toArray = function() {
  return {
    extracode: this.extracode,
    extratype: this.extratype,
    description: this.description,
    extragroupid: this.extragroup.id,
    petextra: this.petextra,
    priceasattransferdate: this.priceasattransferdate
  };
};

Extra.prototype.toString = function() {
  return this.extracode + ' - ' + this.description;
};

module.exports = Extra;
