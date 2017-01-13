var Joi = require('joi');
var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

function OwnerPayment(id) {
  this.path = this.createPath = 'payment';
  this.id = id;
  this.tabsuser = new EntityLink({
    entity: 'TabsUser'
  });
  this.owner = new EntityLink({
    entity: 'Owner'
  });
  this.ownerstatement = new EntityLink({
    entity: 'OwnerStatement'
  });

}
OwnerPayment.prototype = new SingleEntity();

OwnerPayment.prototype.toUpdateArray = function() {
  return {
    sortcode: this.sortcode,
    accountname: this.accountname,
    accountnumber: this.accountnumber,
    chequenumber: this.chequenumber,
    bankreference: this.bankreference,
    ownerreference: this.ownerreference,
    /*
    tabsuserid: this.tabsuser.id,
    ownerstatementid: this.ownerstatement.id,
    */
  };
};

OwnerPayment.prototype.validSchema = Joi.object().keys({
  sortcode: Joi.string().empty('').label('sort code'),
  accountname: Joi.string().empty('').label('account name'),
  accountnumber: Joi.string().empty('').label('account number'),
  chequenumber: Joi.string().empty('').label('cheque number'),
  bankreference: Joi.string().empty('').label('bank reference'),
  ownerreference: Joi.string().empty('').label('owner reference'),
  parent: Joi.object().required()
  /*
  tabsuser: Joi.object().required(),
  ownerstatement: Joi.object().required()
  */
});

module.exports = OwnerPayment;
