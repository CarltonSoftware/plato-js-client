var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var SourceCategory = require('./SourceCategory');
var SourceTopic = require('./SourceTopic');
var SourceMarketingBrand = require('./SourceMarketingBrand');
var Joi = require('joi');
var Affiliate = require('./Affiliate');

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
  this.affiliate = new Affiliate();

  this.validSchema = function() {
    var schema = {
      sourcecode: Joi.string().required().label('Source code'),
      description: Joi.string().required().label('Description'),
      sourcecategory: Joi.object().required().label('Source Category'),
      sourcetopic: Joi.object().optional().label('Source Topic'),
      showonweb: Joi.boolean().required().label('Show on web'),
    };

    if (this.id) {
      schema.affiliate = Joi.object().optional().label('Affiliate');
    }
    return schema;
  };
}
Source.prototype = new SingleEntity();
Source.prototype.toArray = function() {
  return {
    sourcecode: this.sourcecode,
    description: this.description,
    sourcecategory: this.sourcecategory.sourcecategory,
    sourcetopicid: this.sourcetopic && this.sourcetopic.id ? this.sourcetopic.id : 0,
    showonweb: this.showonweb
  };
};
Source.prototype.toUpdateArray = function() {
  return {
    sourcecode: this.sourcecode,
    description: this.description,
    sourcecategory: this.sourcecategory.sourcecategory,
    sourcetopicid: this.sourcetopic && this.sourcetopic.id ? this.sourcetopic.id : 0,
    showonweb: this.showonweb,
    affiliateid: this.affiliate ? this.affiliate.id : null
  };
};
Source.prototype.toString = function() {
  return this.sourcecode + ' (' + this.description + ')';
};

module.exports = Source;
