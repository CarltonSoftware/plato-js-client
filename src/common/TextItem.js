var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

function TextItem(id) {
  this.createPath = this.path = 'textitem';
  this.id = id;
  this.branding = new EntityLink({ entity: 'Branding' });
  this.encoding = new EntityLink({ entity: 'Encoding' });
  this.language = new EntityLink({ entity: 'Language' });
}

TextItem.prototype = new SingleEntity();

TextItem.prototype.toArray = function() {
  return {
    name: this.fieldname,
    text: this.sourceexpression,
    brandingid: this.branding.id,
    encodingid: this.encoding.id,
    languageid: this.language.id,
  };
};

module.exports = TextItem;
