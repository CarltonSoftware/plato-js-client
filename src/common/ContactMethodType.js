var SingleEntity = require('./SingleEntity');

function ContactMethodType(contactMethodTypeId) {
  this.path = 'contactmethodtype';
  this.createPath = this.path;
  this.id = contactMethodTypeId;
}
ContactMethodType.prototype = new SingleEntity();

ContactMethodType.prototype.toArray = function() {
    return {
        'method': this.method,
        'encoding': this.encoding.encoding,
        'characterlimit': this.characterlimit,
        'maximumaddresslength': this.maximumaddresslength,
        'addressvalidationtype': this.addressvalidationtype,
        'addressvalidation': this.addressvalidation
    };
};

module.exports = ContactMethodType;
