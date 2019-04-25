var SingleEntity = require('./SingleEntity');
var OwnerChargeCode = require('./OwnerChargeCode');
var Joi = require('joi');


function AccidentalDamageDeposit(id) {
  this.path = 'accidentaldamagedeposit';
  this.createPath = this.path;
  this.id = id;

  this.ownerchargecode = new OwnerChargeCode();
}

AccidentalDamageDeposit.prototype = new SingleEntity();

AccidentalDamageDeposit.prototype.toArray = function () {
  var toArrayObject = {
    bookedfromdate: this.bookedfromdate,
    bookedtodate: this.bookedtodate,
    holidayfromdate: this.holidayfromdate,
    holidaytodate: this.holidaytodate,
    amount: this.amount,
    currencycode: this.currency.code,
    daysduein: this.daysduein,
    daysdueout: this.daysdueout,
    refundable: this.refundable,
    peradult: this.peradult,
    perchild: this.perchild,
    perinfant: this.perinfant,
    perperiod: this.perperiod,
    perpet: this.perpet,
    anypet: this.anypet,
    pricingperiod: this.pricingperiod,
    minimumdays: this.minimumdays,
    maximumdays: this.maximumdays,
    maximumdaysbeforeholiday: this.maximumdaysbeforeholiday,
    comments: this.comments,
    ownerchargecodeid: this.ownerchargecode.id,
    ownerchargeamount: this.ownerchargeamount,
    defaultforperiod: this.defaultforperiod,
    type: this.type
  };

  if(this.propertyid) {
    toArrayObject.propertyid = this.propertyid;
  }

  /* if(this.bookingid) {
    toArrayObject.propertyid = this.bookingid;
  } */

  if(this.brandingid) {
    toArrayObject.brandingid = this.brandingid;
  }
  
  if(this.noaccidentaldamagedeposit) {
    toArrayObject.noaccidentaldamagedeposit = this.noaccidentaldamagedeposit;
  }

  if(this.noaccidentaldamagedepositglobal) {
    toArrayOBject.noaccidentaldamagedepositglobal = this.noaccidentaldamagedepositglobal;
  }
  
  return toArrayObject;
}

AccidentalDamageDeposit.prototype.validSchema = function () {
  return Joi.object().keys({
    //TODO: Setup validation rules
    bookedfromdate: Joi.date().required().label('Booked From Date'),
    bookedtodate: Joi.date().required().label('Booked To Date'),
    holidayfromdate: Joi.date().required().label('Holiday From Date'),
    holidaytodate: Joi.date().required().label('Holiday To Date'),
    amount: Joi.string().required().label('Amount'),
    currency: Joi.object().required().label('Currency'),
    daysduein: Joi.string().required().label('Days Due In'),
    daysdueout: Joi.string().required().label('Days Due Out'),
    refundable: Joi.boolean().required().label('Refundable'),
    peradult: Joi.boolean().required().label('Per Adult'),
    perchild: Joi.boolean().required().label('Per Child'),
    perinfant: Joi.boolean().required().label('Per Infant'),
    perperiod: Joi.boolean().required().label('Per Period'),
    perpet: Joi.boolean().required().label('Per Pet'),
    anypet: Joi.boolean().required().label('Any Pet'),
    pricingperiod: Joi.string().required().label('Pricing Period'),
    minimumdays: Joi.string().required().label('Minimum Days'),
    maximumdays: Joi.string().required().label('Maximum Days'),
    type: Joi.string().required().label('Type'),
    maximumdaysbeforeholiday: Joi.string().required().label('Maximum Days Before Holiday'),
    comments: Joi.string().empty('').label('Comments'),
    ownerchargeamount: Joi.number().empty('').label('Owner Charge Amount'),
    // ownerchargecode is required if ownerchargeamount is specified
    ownerchargecode: Joi.object().when('ownerchargeamount', {
      is: Joi.number().required(),
      then: Joi.object().required(),
      otherwise: Joi.object().optional()
    }).label('Owner Charge Code'),
    defaultforperiod: Joi.boolean().optional().label('Default For Period'),
    noaccidentaldamagedeposit: Joi.boolean().optional().label('No accidental damage deposit'),
    noaccidentaldamagedepositglobal: Joi.boolean().optional().label('No accidental damage deposit global')
  });
};


module.exports = AccidentalDamageDeposit;