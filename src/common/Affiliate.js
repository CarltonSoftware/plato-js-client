var Joi = require('joi');
var Collection = require('./Collection');
var Actor = require('./Actor');
var AffiliateApiKey = require('./AffiliateApiKey');
var AffiliateBlockPeriod = require('./AffiliateBlockPeriod');

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
}
Affiliate.prototype = new Actor();

Affiliate.prototype.validSchema = function() {
  return Joi.object().keys({
    companyname: Joi.string().label('Company name'),
    addaccidentaldamagedeposit: Joi.boolean().label('Add accidental damage deposit'),
    accidentaldamagedepositnotetext: Joi.string().min(2).label('Accidental damage deposit note text'),
    bookingprocessnotetext: Joi.string().min(2).label('Booking process note text')

  });
};

module.exports = Affiliate;
