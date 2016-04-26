var SingleEntity = require('./SingleEntity'),
  Encoding = require('./Encoding');

function DescriptionType(id) {
  this.path = 'descriptiontype';
  this.createPath = this.path;
  this.id = id;
  this.encoding = new Encoding();
}

DescriptionType.prototype = new SingleEntity();
DescriptionType.prototype.toArray = function() {
  return {
    code: this.code,
    name: this.name,
    description: this.description,
    encoding: this.encoding.ecoding,
    minimumlength: this.minimumlength,
    maximumlength: this.maximumlength
  };
};

module.exports = DescriptionType;
