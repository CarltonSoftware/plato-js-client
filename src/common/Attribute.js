var SingleEntity = require('./SingleEntity');
var AttributeGroup = require('./AttributeGroup');
var Collection = require('./StaticCollection');
var Option = require('./AttributeOption');
var Unit = require('./Unit');

function Attribute(id) {
    this.path = 'attribute';
    this.createPath = this.path;
    this.id = id;
    this.group = new AttributeGroup();
    this.unit = new Unit();
    this.options = new Collection({ object: Option });
    this.baseattribute = false;

    this.toCreateArray = function() {
      return this.toArray();
    }

    this.toArray = function() {
      if (this.type == 'boolean') {
        return {
          type: 'boolean',
          code: this.code,
          name: this.name,
          description: this.description,
          group: this.group,
          usedinavailabilitysearch: this.usedinavailabilitysearch,
          baseattribute: this.baseattribute,
          defaultvalue: this.defaultvalue
        }
      }

      if (this.type == 'hybrid') {
        return {
          type: 'hybrid',
          code: this.code,
          name: this.name,
          description: this.description,
          group: this.group,
          usedinavailabilitysearch: this.usedinavailabilitysearch,
          baseattribute: this.baseattribute,
          operator: this.operator,
          defaultnumbervalue: this.defaultnumbervalue,
          minimumvalue: this.minimumvalue,
          maximumvalue: this.maximumvalue,
          unit: this.unit
        }
      }

      if (this.type == 'number') {
        return {
          type: 'number',
          code: this.code,
          name: this.name,
          description: this.description,
          group: this.group,
          usedinavailabilitysearch: this.usedinavailabilitysearch,
          baseattribute: this.baseattribute,
          operator: this.operator,
          defaultvalue: this.defaultvalue,
          minimumvalue: this.minimumvalue,
          maximumvalue: this.maximumvalue,
          unit: this.unit
        }
      }

      if (this.type == 'string') {
        return {
          type: 'string',
          code: this.code,
          name: this.name,
          description: this.description,
          group: this.group,
          usedinavailabilitysearch: this.usedinavailabilitysearch,
          baseattribute: this.baseattribute,
          defaultvalue: this.defaultvalue
        }
      }
    };
}
Attribute.prototype = new SingleEntity();

module.exports = Attribute;
