var SingleEntity = require('./SingleEntity'),
  DescriptionType = require('./DescriptionType');

function PropertyDescription(propertyId, marketingBrandId, descriptionId) {
    this.path = '/property/' + propertyId + '/marketingbrand/' + marketingBrandId + '/description';
    this.createPath = this.path;
    this.id = descriptionId;
    this.descriptiontype = new DescriptionType();
}
PropertyDescription.prototype = new SingleEntity();

PropertyDescription.prototype.toArray = function() {
  return {
    descriptiontype: this.descriptiontype.name,
    description: this.description,
  };
};

module.exports = PropertyDescription;
