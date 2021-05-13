var SingleEntity = require('./SingleEntity');
var AttributeGroup = require('./AttributeGroup');
var Collection = require('./StaticCollection');
var Option = require('./AttributeOption');
var Extra = require('./Extra');
var Unit = require('./Unit');
var Joi = require('joi');

function Attribute(id) {
  this.path = 'attribute';
  this.createPath = this.path;
  this.id = id;
  this.group = new AttributeGroup();
  this.unit = new Unit();
  this.options = new Collection({
    object: Option,
    path: 'option',
    parents: [
      this
    ]
  });
  this.extras = new Collection({ object: Extra });
  this.baseattribute = false;
  this.donotmodify = false;
  this.important = false;
  this.usedinavailabilitysearch = false;
  this.type = 'boolean';

  this.toArray = function() {
    var base = {
      type: this.type,
      name: this.name,
      description: this.description,
      group: this.group.name,
      usedinavailabilitysearch: this.usedinavailabilitysearch,
      baseattribute: this.baseattribute,
      donotmodify: this.donotmodify,
      important: this.important,
      defaultvalue: this.defaultvalue
    };

    return this.mergeInAdditionalFields(base);
  };

  this.validSchema = function() {
    var schema = {
      type: Joi.string().required().label('Type').allow(['Boolean', 'String', 'Number', 'Hybrid']),
      name: Joi.string().required().label('Name'),
      description: Joi.string().required().label('Description'),
      group: Joi.object().required().label('Group'),
      usedinavailabilitysearch: Joi.boolean().required().label('Used in availability search?'),
      baseattribute: Joi.boolean().required().label('Base Attribute'),
      donotmodify: Joi.boolean().required().label('Do not modify'),
      important: Joi.boolean().required().label('Important')
    };

    if (this.type === 'Number' || this.type === 'Hybrid') {
      schema.operator = Joi.string().allow(['=', '>', '>=', '<', '<=', '!=']).label('Operator').description(
        'Equals (=), Greater than (>), Less than (<), Greater than or equal to (>=), Less than or equal to (<=), Not equal to (!=).'
      );
      schema.minimumvalue = Joi.string().required().label('Minimum value');
      schema.maximumvalue = Joi.string().required().label('Maximum value');
      schema.unit = Joi.object().required().label('Unit');
    }

    var explainer = 'Will apply to newly created properties. Use Bulk Update Attributes to update existing properties.';
    var booldef = Joi.string().optional().label('Default Boolean value').allow(['', 'true', 'false']).description(explainer);
    var stringdef = Joi.string().optional().allow('').label('Default value').description(explainer);

    if (this.type === 'Hybrid') {
      schema.defaultnumbervalue = Joi.number().optional().label('Default Number value').description(explainer);
      schema.defaultbooleanvalue = booldef;
      schema.limitvalue = Joi.string().required().label('Limit value');
    } else if (this.type === 'Boolean') {
      schema.defaultvalue = booldef;
    } else {
      schema.defaultvalue = stringdef;
    }

    return schema;
  };

  this.toUpdateArray = function() {
    var base = {
      name: this.name,
      description: this.description,
      type: this.type,
      group: this.group.name,
      donotmodify: this.donotmodify,
      usedinavailabilitysearch: this.usedinavailabilitysearch,
      baseattribute: this.baseattribute,
      important: this.important,
      defaultvalue: this.defaultvalue
    };

    return this.mergeInAdditionalFields(base);
  };

  this.mergeInAdditionalFields = function(base) {

    if (this.type == 'Hybrid' || this.type == 'Number') {
      base.operator = this.operator;
      base.minimumvalue = this.minimumvalue;
      base.maximumvalue = this.maximumvalue;
      base.unit = this.unit.name;
    }

    if (this.type == 'Hybrid' ) {
      base.limitvalue = this.limitvalue;
      base.defaultbooleanvalue = this.defaultbooleanvalue;
      base.defaultnumbervalue = this.defaultnumbervalue;
    }

    return base;
  };

  this.toString = function() {
    return this.name + ' (' + this.code + ')';
  };
}

Attribute.prototype = new SingleEntity();

module.exports = Attribute;
