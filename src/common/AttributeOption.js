var Entity = require('./Entity');

function AttributeOption(id) {
    this.id = id;
}
AttributeOption.prototype = new Entity();

module.exports = AttributeOption;