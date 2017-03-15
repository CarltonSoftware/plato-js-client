var SingleEntity = require('./SingleEntity');

function WebsiteSection(id) {
  this.path = this.createPath = 'websitesection';
  this.id = id;
}

WebsiteSection.prototype = new SingleEntity();
WebsiteSection.prototype.toArray = function() {
  return {
    section: this.section,
  };
};
WebsiteSection.prototype.toString = function() {
  return this.section;
};


module.exports = WebsiteSection;
