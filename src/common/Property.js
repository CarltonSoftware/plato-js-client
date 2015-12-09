var SingleEntity = require('./SingleEntity');

function Property(id) {
    this.path = 'property';
    this.createPath = 'property';
    this.id = id;

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
