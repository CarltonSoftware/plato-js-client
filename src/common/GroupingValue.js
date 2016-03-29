var SingleEntity = require('./SingleEntity'),
  MarketingBrand = require('./MarketingBrand');

function GroupingValue(id) {
  this.path = 'value';
  this.createPath = this.path;
  this.id = (typeof id === 'undefined') ? 0 : id;
  this.parentgroupingvalue = Object.create(GroupingValue.prototype);
  this.depth = 0;
  this.children = [];

  this.hasParent = function() {
    return typeof this.parentgroupingvalue === 'object'
      && typeof this.parentgroupingvalue.id !== 'undefined'
      && this.parentgroupingvalue.id > 0;
  }.bind(this);

  this.hasChildren = function() {
    return Object.prototype.toString.call(this.children) === '[object Array]'
      && this.children.length > 0;
  };

  this.hasChildGroup = function(id) {
    if (this.hasChildren()) {
      for (i in this.children) {
        if (this.children[i].id === id) {
          return true;
        } else {
          return this.children[i].hasChildGroup(id);
        }
      }
    }

    return false;
  }.bind(this);
}
GroupingValue.prototype = new SingleEntity();

GroupingValue.prototype.toArray = function() {
  var d = {
    id: this.id,
    name: this.name,
    qualifier: this.qualifier,
    description: this.description,
    latitude: this.latitude,
    longitude: this.longitude,
    radiuskm: this.radiuskm,
    nearkm: this.nearkm,
    promote: this.promote,
    code: this.code,
    marketingbrandid: this.marketingbrand.id
  };

  if (this.hasParent()) {
    d.parentgroupingvalueid = this.parentgroupingvalue.id;
  }

  return d;
};

module.exports = GroupingValue;
