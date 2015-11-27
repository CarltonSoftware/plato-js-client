var SingleEntity = require('./SingleEntity');
var Encoding = require('./Encoding');

function ContactMethodType(contactMethodTypeId) {
  this.path = 'contactmethodtype';
  this.createPath = this.path;
  this.id = contactMethodTypeId;
  this.characterlimit = 0;
  this.maximumaddresslength = '';
  this.addressvalidationtype = '';
  this.addressvalidation = '';
  this.encoding = new Encoding();
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

ContactMethodType.prototype.toUpdateArray = function() {
    return {
        'encoding': this.encoding.encoding,
        'characterlimit': this.characterlimit,
        'maximumaddresslength': this.maximumaddresslength,
        'addressvalidationtype': this.addressvalidationtype,
        'addressvalidation': this.addressvalidation
    };
};

module.exports = ContactMethodType;
