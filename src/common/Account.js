var SingleEntity = require('./SingleEntity');

function Account(id) {
  this.path = 'account';
  this.createPath = 'account';
  this.id = id;
}
Account.prototype = new SingleEntity();

Account.prototype.toArray = function() {
  return {
    nominalcode: this.nominalcode,
    description: this.description,
    usebranding: this.usebranding,
  };
};

Account.prototype.validSchema = function() {
  return Joi.object().keys({
    nominalcode: Joi.string().required().label('nominalcode'),
    description: Joi.string().required().label('description'),
    usebranding: Joi.boolean().required().label('usebranding'),
  });
};

module.exports = Account;
