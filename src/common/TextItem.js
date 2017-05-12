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
  var t = {
    name: this.name,
    text: this.text,
    header: this.header,
    footer: this.footer,
    encodingid: this.encoding.id,
    languageid: this.language.id
  };

  if (this.branding && this.branding.id) {
    t.brandingid = this.branding.id;
  }

  return t;
};

module.exports = TextItem;
