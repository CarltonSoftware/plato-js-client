var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

function TemplateElement(id) {
  this.createPath = this.path = 'element';
  this.id = id;

  this.contactmethodelement = new EntityLink({ entity: 'ContactMethodElement' });
  this.textitem = new EntityLink({ entity: 'TextItem' });
}

TemplateElement.prototype = new SingleEntity();

TemplateElement.prototype.toArray = function() {
  return {
    type: this.type,
    fromdate: this.fromdate,
    todate: this.todate,
    elementorder: this.elementorder,
    contactmethodelementid: this.contactmethodelement.id,
    textitemid: this.textitem.id,
    text: this.text,
  };
};

module.exports = TemplateElement;
