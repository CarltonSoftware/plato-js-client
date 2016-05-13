var SingleEntity = require('./SingleEntity');

function TemplateSource(id) {
  this.createPath = this.path = 'templatesource';
  this.id = id;
}

TemplateSource.prototype = new SingleEntity();

TemplateSource.prototype.toArray = function() {
  return {
    templatesource: this.templatesource,
    sourcesql: this.sourcesql,
  };
};

module.exports = TemplateSource;
