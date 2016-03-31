var SingleEntity = require('./SingleEntity'),
  MarketingBrand = require('./MarketingBrand'),
  EntityLink = require('./EntityLink');

function GroupingValue(id) {
  this.path = 'value';
  this.createPath = this.path;
  this.id = (typeof id === 'undefined') ? 0 : id;
  this.depth = 0;
  this.children = [];
  this.marketingbrand = new EntityLink({
    entity: 'MarketingBrand'
  });
  this.parentgroupingvalue = new EntityLink({
    entity: 'GroupingValue',
    parent: new EntityLink({
      entity: 'Grouping'
    })
  });

  this.hasParent = function() {
    return typeof this.parentgroupingvalue === 'object'
      && typeof this.parentgroupingvalue.id !== 'undefined'
      && this.parentgroupingvalue.id > 0;
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