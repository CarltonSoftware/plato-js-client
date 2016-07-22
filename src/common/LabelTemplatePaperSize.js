var SingleEntity = require('./SingleEntity');

function LabelTemplatePaperSize(id) {
  this.path = this.createPath = 'labeltemplatepapersize';
  this.id = id;
}
LabelTemplatePaperSize.prototype = new SingleEntity();

LabelTemplatePaperSize.prototype.toArray = function() {
  return {
    name: this.name,
  };
};

module.exports = LabelTemplatePaperSize;
