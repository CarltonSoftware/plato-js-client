var client = require('./platoJsClient').getInstance();
var SingleEntity = require('./SingleEntity');
var LabelTemplatePaperSize = require('./LabelTemplatePaperSize');

function LabelTemplate(id) {
  this.path = this.createPath = 'labeltemplate';
  this.id = id;
  this.papersize = new LabelTemplatePaperSize();
}
LabelTemplate.prototype = new SingleEntity();

LabelTemplate.prototype.toArray = function() {
  return {
    name: this.name,
    papersizeid: this.papersize.id,
    headersize: this.headersize,
    horizontalcount: this.horizontalcount,
    verticalcount: this.verticalcount,
    labelwidth: this.labelwidth,
    labelheight: this.labelheight,
    columnspacing: this.columnspacing,
    rowspacing: this.rowspacing,
    labelpadding: this.labelpadding,
    fontfamily: this.fontfamily,
    fontsize: this.fontsize,
    margintop: this.margintop,
    marginbottom: this.marginbottom,
    marginleft: this.marginleft,
    marginright: this.marinright
  };
};

LabelTemplate.prototype.render = function() {
  return client.get(this.getUpdatePath() + '/render');
};

module.exports = LabelTemplate;
