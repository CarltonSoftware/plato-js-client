var SingleEntity = require('./SingleEntity');

function BrandingGroup(id) {
    this.path = 'brandinggroup';
    this.id = id;
}
BrandingGroup.prototype = new SingleEntity();

module.exports = BrandingGroup;
