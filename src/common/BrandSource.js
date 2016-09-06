var SingleEntity = require('./SingleEntity');

function BrandSource(id) {
  this.path = 'brandsource';
  this.createPath = 'brandsource';
  this.id = id;
}
BrandSource.prototype = new SingleEntity();

BrandSource.prototype.toArray = function() {
  return {
    BrandSource: this.BrandSource,
    description: this.description,
  };
};

BrandSource.prototype.validSchema = function() {
  return Joi.object().keys({
    brandsource: Joi.string().label('BrandSource'),
    description: Joi.string().required().label('description'),
  });
};

module.exports = BrandSource;
