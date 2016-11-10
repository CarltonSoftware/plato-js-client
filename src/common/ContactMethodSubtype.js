var SingleEntity = require('./SingleEntity');

function ContactMethodSubtype(id) {
  this.path = 'contactmethodsubtype';
  this.createPath = this.path;
  this.id = id;
}

ContactMethodSubtype.prototype = new SingleEntity();
ContactMethodSubtype.prototype.toArray = function() {
    return {
        'contactmethodsubtype': this.contactmethodsubtype
    };
};

module.exports = ContactMethodSubtype;
