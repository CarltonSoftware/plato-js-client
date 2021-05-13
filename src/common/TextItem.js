var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

function TextItem(id) {
  this.createPath = this.path = 'textitem';
  this.id = id;
  this.branding = new EntityLink({ entity: 'Branding' });
  this.encoding = new EntityLink({ entity: 'Encoding' });
  this.language = new EntityLink({ entity: 'Language' });
  this.contactmethodtype = new EntityLink({ entity: 'ContactMethodType' });
}

TextItem.prototype = new SingleEntity();

TextItem.prototype.toArray = function() {
  var t = {
    name: this.name,
    text: this.text,
    header: this.header,
    footer: this.footer,
    donotdelete: this.donotdelete,
    encodingid: this.encoding.id,
    languageid: this.language.id,
    contactmethodtypeid: this.contactmethodtype.id,
    standardheader: this.standardheader,
    standardfooter: this.standardfooter,
    disablewysiwyg: this.disablewysiwyg,
  };

  if (this.branding && this.branding.id) {
    t.brandingid = this.branding.id;
  } else {
    t.brandingid = 0;
  }

  return t;
};

module.exports = TextItem;
