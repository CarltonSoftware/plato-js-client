var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var MarketingBrandEmailList = require('./MarketingBrandEmailList');
var client = require('./platoJsClient').getInstance();
var FilterCollection = require('./FilterCollection');
var Joi = require('joi');

function MarketingBrand(id) {
  this.path = 'marketingbrand';
  this.createPath = 'marketingbrand';
  this.id = id;
  this.agency = new EntityLink({
    entity: 'Agency'
  });
  this.defaultbookingbrand = new EntityLink({ entity: 'BookingBrand' });

  this.validSchema = function() {
    return {
      code: Joi.string().required().min(2).max(4).uppercase().label('Code'),
      name: Joi.string().required().label('Name'),
      email: Joi.string().empty('').label('Email'),
      website: Joi.string().empty('').label('Website'),
      agency: Joi.object().required().label('Agency'),
      defaultbookingbrand: Joi.object().required().label('Default Booking Brand')
    };
  };
}
MarketingBrand.prototype = new SingleEntity();

MarketingBrand.prototype.toArray = function() {
  return {
    marketingbrandcode: this.code,
    marketingbrand: this.name,
    website: this.website,
    email: this.email,
    agencyid: this.agency.id,
    defaultbookingbrandid: this.defaultbookingbrand.id
  };
};

MarketingBrand.prototype.toString = function() {
  return [this.name].join(' ');
};

MarketingBrand.prototype.getEmailtemplate = function(filterCollection, actor) {
  if (actor) {
    return client.get(
      this.getUpdatePath() + '/emailtemplate/' + actor.id + '?orderBy=' + filterCollection.orderBy + filterCollection.getFilterString()
    );
  } else {
    return client.get(
      this.getUpdatePath() + '/emailtemplate?orderBy=' + filterCollection.orderBy + filterCollection.getFilterString()
    );
  }
};

MarketingBrand.prototype.getEmailLists = function() {
  var emailLists = new FilterCollection({
    path: 'emaillist',
    object: MarketingBrandEmailList,
    parent: this
  });
  return emailLists.fetch();
};

module.exports = MarketingBrand;
