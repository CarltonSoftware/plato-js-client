var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function WebsiteSection(id) {
  this.path = this.createPath = 'websitesection';
  this.id = id;
}

WebsiteSection.prototype = new SingleEntity();
WebsiteSection.prototype.toArray = function() {
  return {
    section: this.section,
  };
};
WebsiteSection.prototype.toString = function() {
  return this.section;
};

WebsiteSection.prototype.validSchema = function() {
  return Joi.object().keys({
    section: Joi.string().label('Section name')
  });
};

module.exports = WebsiteSection;
