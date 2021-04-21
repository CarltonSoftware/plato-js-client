var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var SourceCategory = require('./SourceCategory');
var SourceTopic = require('./SourceTopic');
var SourceMarketingBrand = require('./SourceMarketingBrand');
var Joi = require('joi');

function Source(id) {
  this.path = 'source';
  this.createPath = 'source';
  this.id = id;
  this.sourcecategory = new SourceCategory();
  this.sourcetopic = new SourceTopic();
  this.sourcemarketingbrands = new Collection({
    object: SourceMarketingBrand,
    path: 'marketingbrand',
    parent: this
  });

  this.validSchema = function() {
    return {
      sourcecode: Joi.string().required().label('Source code'),
      description: Joi.string().required().label('Description'),
      sourcecategory: Joi.object().required().label('Source Category'),
      showonweb: Joi.boolean().required().label('Show on web')
    };
  };
}
Source.prototype = new SingleEntity();
Source.prototype.toArray = function() {
  return {
    sourcecode: this.sourcecode,
    description: this.description,
    sourcecategory: this.sourcecategory.sourcecategory,
    showonweb: this.showonweb
  };
};
Source.prototype.toString = function() {
  return this.sourcecode + ' (' + this.description + ')';
};

module.exports = Source;
