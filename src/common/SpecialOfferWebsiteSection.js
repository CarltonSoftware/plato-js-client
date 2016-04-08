var SingleEntity = require('./SingleEntity');
var WebsiteSection = require('./WebsiteSection');

function SpecialOfferWebsiteSection(id) {
  this.path = this.createPath = 'websitesection';
  this.id = id;
  this.websitesection = new WebsiteSection();
}

SpecialOfferWebsiteSection.prototype = new SingleEntity();
SpecialOfferWebsiteSection.prototype.toArray = function() {
  return {
    websitesectionid: this.websitesectionid.id,
  };
};

module.exports = SpecialOfferWebsiteSection;
