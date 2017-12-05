var SingleEntity = require('./SingleEntity');
var AttributeGroup = require('./AttributeGroup');
var Collection = require('./StaticCollection');
var Option = require('./AttributeOption');
var Extra = require('./Extra');
var Unit = require('./Unit');

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

    if (this.type == 'hybrid' || this.type == 'number') {
      base.operator = this.operator;
      base.minimumvalue = this.minimumvalue;
      base.maximumvalue = this.maximumvalue;
      base.unit = this.unit.name;
    }

    if (this.type == 'hybrid' ) {
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
