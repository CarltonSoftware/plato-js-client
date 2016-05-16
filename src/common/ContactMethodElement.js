var SingleEntity = require('./SingleEntity');

function ContactMethodElement(id) {
  this.createPath = this.path = 'element';
  this.id = id;
}

ContactMethodElement.prototype = new SingleEntity();

ContactMethodElement.prototype.toArray = function() {
  return {
    contactmethodelement: this.contactmethodelement,
    description: this.description,
  };
};

module.exports = ContactMethodElement;
