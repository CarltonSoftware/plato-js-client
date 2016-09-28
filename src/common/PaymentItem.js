var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var Collection = require('./Collection');
var VatRate = require('./VatRate');
var Joi = require('joi');

function PaymentItem(id) {
  this.path = 'item';
  this.createPath = 'item';
  this.id = id;
  this.ownercharge = new EntityLink({
    entity: 'OwnerCharge'
  });
  this.vatrate = new VatRate();
  this.extras = new Collection({
    object: Extra,
    path: 'extra',
    parents: [this]
  });
}
PaymentItem.prototype = new SingleEntity();

PaymentItem.prototype.toArray = function() {
  return {
    type: this.type,
    ownercharge: this.ownercharge,
    ownerincome: this.ownerincome,
    agencyincome: this.agencyincome,
    vatrate: this.vatrate,
    agencyvat: this.agencyvat,
    authorised: this.authorised,
    authorisedby: this.authorisedby,
    ownerpayment: this.ownerpayment,
    extras: this.extras,
  };
};

PaymentItem.prototype.validSchema = function() {
  return Joi.object().keys({
    type: Joi.string().label('type'),
    ownerincome: Joi.number().double().required().label('ownerincome'),
    agencyincome: Joi.number().double().required().label('agencyincome'),
    vatrate: Joi.object().optional().label('VatRate'),
    agencyvat: Joi.number().double().required().label('agencyvat'),
    authorised: Joi.string().label('authorised'),
    authorisedby: Joi.string().label('authorisedby'),
    ownerpayment: Joi.string().optional().allow('').label('OwnerPayment'),
  });
};

module.exports = PaymentItem;
