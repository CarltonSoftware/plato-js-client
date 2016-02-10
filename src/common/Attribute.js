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
  this.options = new Collection({ object: Option });
  this.extras = new Collection({ object: Extra });
  this.baseattribute = false;
  this.donotmodify = false;
  this.important = false;
  this.usedinavailabilitysearch = false;
  this.type = 'boolean';

  this.toArray = function() {
    var base = {
      type: this.type,
      code: this.code,
      name: this.name,
      description: this.description,
      group: this.group,
      usedinavailabilitysearch: this.usedinavailabilitysearch,
      baseattribute: this.baseattribute,
      donotmodify: this.donotmodify,
      important: this.important
    };

    if (this.type == 'boolean') {
      base.defaultvalue = this.defaultvalue;
    }

    if (this.type == 'hybrid') {
      base.operator = this.operator;
      base.defaultnumbervalue = this.defaultnumbervalue;
      base.minimumvalue = this.minimumvalue;
      base.maximumvalue = this.maximumvalue;
      base.unit = this.unit;
    }

    if (this.type == 'number') {
      base.operator = this.operator;
      base.defaultvalue = this.defaultvalue;
      base.minimumvalue = this.minimumvalue;
      base.maximumvalue = this.maximumvalue;
      base.unit = this.unit;
    }

    if (this.type == 'string') {
      base.defaultvalue = this.defaultvalue;
    }

    return base;
  };
}
Attribute.prototype = new SingleEntity();

module.exports = Attribute;
