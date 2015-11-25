var SingleEntity = require('./SingleEntity');

function ContactMethodSubType(id) {
  this.path = 'contactmethodsubtype';
  this.createPath = this.path;
  this.id = id;
}
ContactMethodSubType.prototype = new SingleEntity();

ContactMethodSubType.prototype.toArray = function() {
    return {
        'contactmethodsubtype': this.contactmethodsubtype
    };
};

module.exports = ContactMethodSubType;
