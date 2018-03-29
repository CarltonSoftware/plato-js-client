var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function BookingPaymentitem(id) {
  this.path = 'paymentitem';
  this.createPath = 'paymentitem';
  this.id = id;

}

BookingPaymentitem.prototype = new SingleEntity();
BookingPaymentitem.prototype.toCreateArray = function() {
  var array = {
    fromdate: this.fromdate,
    todate: this.todate,
    description: this.description,
    ownerincome: this.ownerincome,
    agencyincome: this.agencyincome,
    agencyvat: this.agencyvat
  };

  return array;
};

BookingPaymentitem.validSchema = Joi.object().keys({
  fromdate: Joi.string().required().label('fromdate'),
  todate: Joi.string().optional().label('todate'),
  description: Joi.string().optional().label('description'),
  ownerincome: Joi.number().optional().label('ownerincome'),
  agencyincome: Joi.number().optional().label('agencyincome'),
  agencyvat: Joi.number().optional().label('agencyvat')
});

module.exports = BookingPaymentitem;
