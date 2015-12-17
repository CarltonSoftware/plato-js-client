var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var PropertyNote = require('./PropertyNote');
var Branding = require('./Branding');

function Property(id) {
    this.path = 'property';
    this.createPath = 'property';
    this.id = id;
    this.notes = new Collection({object: PropertyNote});
    this.brandings = new Collection({object: Branding});
}
Property.prototype = new SingleEntity();
Property.prototype.toArray = function() {
    return {
        id: this.id,
        name: this.name,
        address: this.address,
        sleeps: this.sleeps,
        namequalifier: this.namequalifier,
        bedrooms: this.bedrooms,
    };
};


module.exports = Property;
