var SingleEntity = require('./SingleEntity');

function ContactType(id) {
    this.path = 'contacttype';
    this.createPath = this.path;
    this.id = id;
}
ContactType.prototype = new SingleEntity();

ContactType.prototype.toArray = function() {
    return {
        'type': this.type
    };
};

module.exports = ContactType;
