var SingleEntity = require('./SingleEntity');

function ContactSend(id) {
  this.path = 'contact/' + id + '/send';
  this.createPath = this.path;
  this.id = id;
}
ContactSend.prototype = new SingleEntity();

ContactSend.prototype.toArray = function() {
  return { };
};


module.exports = ContactSend;
