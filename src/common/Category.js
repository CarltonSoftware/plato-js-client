var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function Category(id) {
  this.path = 'category';
  this.createPath = 'category';
  this.id = id;
}

Category.prototype = new SingleEntity();
Category.prototype.toArray = function() {
  return {
    category: this.category,
    description: this.description,
    bookingsminimum: this.bookingsminimum,
    bookingsmaximum: this.bookingsmaximum,
    andor: this.andor,
    bookingvalueminimum: this.bookingvalueminimum,
    bookingvaluemaximum: this.bookingvaluemaximum,
    period: this.period
  };
};

Category.prototype.validSchema = function() {
  return Joi.object().keys({
    category: Joi.string().required().label('category'),
    description: Joi.string().required().label('description'),
    bookingsminimum: Joi.string().optional().allow('').label('bookingsminimum'),
    bookingsmaximum: Joi.string().optional().allow('').label('bookingsmaximum'),
    andor: Joi.string().required().allow(['or', 'and', 'either']).label('andor'),
    bookingvalueminimum: Joi.string().optional().allow('').label('bookingvalueminimum'),
    bookingvaluemaximum: Joi.string().optional().allow('').label('bookingvaluemaximum'),
    period: Joi.string().optional().allow('').label('period')
  });
};

module.exports = Category;
