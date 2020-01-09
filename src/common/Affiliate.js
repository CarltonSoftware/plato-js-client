var Joi = require('joi');
var Collection = require('./Collection');
var Actor = require('./Actor');
var AffiliateApiKey = require('./AffiliateApiKey');
var AffiliateBlockPeriod = require('./AffiliateBlockPeriod');
var Customer = require('./Customer');

function Affiliate() {
  this.path = 'affiliate';
  this.createPath = 'affiliate';

  Actor.apply(this, arguments);

  this.apikeys = new Collection({
    object: AffiliateApiKey,
    parent: this,
    path: 'apikey'
  });

  this.blockperiods = new Collection({
    object: AffiliateBlockPeriod,
    parent: this,
    path: 'blockperiod'
  });

  this.customers = new Collection({
    object: Customer,
    parent: this,
    path: 'actor'
  });
}
Affiliate.prototype = new Actor();

Affiliate.prototype.validSchema = function() {
  return Joi.object().keys({
    companyname: Joi.string().label('Company name'),
    addaccidentaldamagedeposit: Joi.boolean().label('Add accidental damage deposit'),
    accidentaldamagedepositnotetext: Joi.string().optional().allow('').label('Accidental damage deposit note text'),
    processbookingnotetext: Joi.string().optional().allow('').label('Booking process note text')

  });
};

Affiliate.prototype.toArray = function() {
  // TABS2-5192 - We don't want to post abroad & enquirer fields on create/update,
  // they are initialised in Actor constructor with a value though so get passed automatically.
  // If found let's remove them...
  var arr = Actor.prototype.toArray.call(this);
  var removeFields = ['abroad', 'enquirer'];
  removeFields.forEach(function (field) {
    if (typeof arr[field] !== 'undefined') {
      delete arr[field];
    }
  });
  return arr;
};

module.exports = Affiliate;
