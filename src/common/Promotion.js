var SingleEntity = require('./SingleEntity');
var Extra = require('./Extra');
var Joi = require('joi');

function Promotion(id) {
  this.path = this.createPath = 'promotion';
  this.id = id;
  this.extra = new Extra();
}

Promotion.prototype = new SingleEntity();
Promotion.prototype.toArray = function() {
  return {
    promotioncode: this.promotioncode,
    extraid: this.extra.id,
    usagelimit: this.usagelimit,
  };
};

Promotion.prototype.validSchema = function() {
  return Joi.object().keys({
    promotioncode: Joi.string().label('Promotion Code'),
    extra: Joi.object().required().label('Extra'),
    usagelimit: Joi.number().label('Usage Limit')
  });
};

module.exports = Promotion;
