var SingleEntity = require('./SingleEntity');
var Joi = require('joi');
var Extra = require('./Extra');

function ComplaintDiscountExtra(id) {
  this.path = 'complaintdiscountextra';
  this.createPath = 'complaintdiscountextra';
  this.id = id;

  this.extra = new Extra();
}
ComplaintDiscountExtra.prototype = new SingleEntity();

ComplaintDiscountExtra.prototype.validSchema = function() {
  return {
    type: Joi.string().valid('Agency', 'Owner').label('type'),
    fromdate: Joi.string().required().label('from date'),
    todate: Joi.string().required().label('to date'),
    extra: Joi.object().required().label('extra'),
  };
};

ComplaintDiscountExtra.prototype.toArray = function() {
  return {
    type: this.type,
    fromdate: this.fromdate,
    todate: this.todate,
    extraid: this.extra.id
  };
};

module.exports = ComplaintDiscountExtra;
