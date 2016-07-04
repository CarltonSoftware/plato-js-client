var Joi = require('joi');
var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

function OwnerPayment(id) {
  this.path = this.createPath = 'payment';
  this.id = id;
  this.tabsuser = new EntityLink({
    entity: 'TabsUser'
  });
  /*
  this.ownerstatement = new EntityLink({
    entity: 'OwnerStatement'
  });
  */
}
OwnerPayment.prototype = new SingleEntity();

OwnerPayment.prototype.toArray = function() {
  return {
    paymentdate: this.paymentdate,
    amount: this.amount,
    sortcode: this.sortcode,
    accountnumber: this.accountnumber,
    chequenumber: this.chequenumber,
    bankreference: this.bankreference,
    ownerreference: this.ownerreference,
    exchangerateid: this.exchangerate.id,
    ownerpaymenttypeid: this.ownerpaymenttype.id,
    /*
    tabsuserid: this.tabsuser.id,
    ownerstatementid: this.ownerstatement.id,
    */
  };
};

OwnerPayment.prototype.validSchema = Joi.object().keys({
  paymentdate: Joi.date().required().label('payment date'),
  amount: Joi.number().required(),
  sortcode: Joi.string().empty('').label('sort code'),
  accountnumber: Joi.string().empty('').label('account number'),
  chequenumber: Joi.string().empty('').label('cheque number'),
  bankreference: Joi.string().empty('').label('bank reference'),
  ownerreference: Joi.string().empty('').label('owner reference'),
  exchangerate: Joi.object().required().label('exchange rate'),
  ownerpaymenttype: Joi.object().required().label('owner payment type'),
  parent: Joi.object().required()
  /*
  tabsuser: Joi.object().required(),
  ownerstatement: Joi.object().required()
  */
});

module.exports = OwnerPayment;
