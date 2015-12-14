var SingleEntity = require('./SingleEntity');

function PropertyDescription(propertyId, marketingBrandId, descriptionId) {
    this.path = '/property/' + propertyId + '/marketingbrand/' + marketingBrandId + '/description';
    this.createPath = this.path;
    this.id = descriptionId;
}
PropertyDescription.prototype = new SingleEntity();

PropertyDescription.prototype.toArray = function() {
  return {
    //TODO: Add in the fields necessary to create a PropertyDescription
    //descriptiontype: this.descriptiontype,
    description: this.description,
  };
};

PropertyDescription.prototype.toUpdateArray = function() {
  return {
    //TODO: Add in the fields necessary to update a PropertyDescription
    descriptiontype: this.descriptiontype,
    description: this.description,
  };
};

module.exports = PropertyDescription;
