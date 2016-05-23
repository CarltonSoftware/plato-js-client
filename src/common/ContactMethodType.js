var SingleEntity = require('./SingleEntity');
var Encoding = require('./Encoding');
var Collection = require('./Collection');
var ContactMethodElement = require('./ContactMethodElement');

function ContactMethodType(id) {
  this.path = 'contactmethodtype';
  this.createPath = this.path;
  this.id = id;
  this.characterlimit = 0;
  this.maximumaddresslength = '';
  this.addressvalidationtype = '';
  this.addressvalidation = '';
  this.encoding = new Encoding();
  this.elements = new Collection({
    object: ContactMethodElement,
    parent: this,
    path: 'element'
  });
}
ContactMethodType.prototype = new SingleEntity();

ContactMethodType.prototype.toArray = function() {
  return {
    method: this.method,
    encoding: this.encoding.encoding,
    characterlimit: this.characterlimit,
    maximumaddresslength: this.maximumaddresslength,
    addressvalidationtype: this.addressvalidationtype,
    addressvalidation: this.addressvalidation
  };
};

ContactMethodType.prototype.toUpdateArray = function() {
  var array = this.toArray();
  delete array.method;
  return array;
};

module.exports = ContactMethodType;
