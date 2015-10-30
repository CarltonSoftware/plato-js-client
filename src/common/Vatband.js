var SingleEntity = require('./SingleEntity');

function Vatband(id) {
    this.path = 'vatband';
    this.id = id;
}

Vatband.prototype = new SingleEntity();
Vatband.prototype.toArray = function() {
    return {
        id: this.id,
        vatband: this.vatband
    };
};

module.exports = Vatband;