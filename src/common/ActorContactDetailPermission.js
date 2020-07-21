var SingleEntity = require('./SingleEntity');
var MarketingBrand = require('./MarketingBrand');
var ActorContactDetailOther = require('./ActorContactDetailOther');
var EntityLink = require('./EntityLink');
var Joi = require('joi');

function ActorContactDetailPermission(id) {
  this.path = 'contactdetailpermission';
  this.createPath = this.path;
  this.id = id;
  this.marketingbrand = new MarketingBrand();
  this.contactdetail = new ActorContactDetailOther();
  this.grantedbyactor = new EntityLink({ entity: 'Actor' });
  this.revokedbyactor = new EntityLink({ entity: 'Actor' });

  this.validSchema = function() {
    return {
      marketingbrand: Joi.object().required().label('Marketing brand'),
      contactdetail: Joi.object().required().label('Contact detail'),
      grantpermission: Joi.boolean().required().label('Grant marketing permission?').description(
        'Tick this box to grant marketing permission for this person'
      )
    };
  }
}

ActorContactDetailPermission.prototype = new SingleEntity();
ActorContactDetailPermission.prototype.toArray = function() {
  return {
    contactdetailid: this.contactdetail.id,
    marketingbrandid: this.marketingbrand.id,
    grantedbyactorid: this.grantedbyactor.id,
    revokedbyactorid: this.revokedbyactor.id
  };
};

module.exports = ActorContactDetailPermission;
