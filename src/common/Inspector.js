var SingleEntity = require('./SingleEntity');

function Inspector(id) {
  this.path = 'inspector';
  this.createPath = 'inspector';
  this.id = id;
}
Inspector.prototype = new SingleEntity();

Inspector.prototype.toArray = function() {
  return {
    //TODO: Add in the fields necessary to create a Inspector
    name: this.name,
    schedule: this.schedule,
  };
};

Inspector.prototype.validSchema = function() {
  return Joi.object().keys({
    name: Joi.string().optional().allow('').label('Name'),
    schedule: Joi.string().optional().allow('').label('Schedule'),
  });
};

module.exports = Inspector;
