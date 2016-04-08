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

module.exports = WebsiteSection;
