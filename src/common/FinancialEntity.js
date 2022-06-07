var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function FinancialEntity(id) {
  this.path = 'financialentity';
  this.createPath = 'financialentity';
  this.id = id;

  this.validSchema = function() {
    return {
      name: Joi.string().required().label('Name'),
      activefromdate: Joi.date().required().label('ActiveFromDate'),
      activetodate: Joi.date().required().label('ActiveToDate'),
    };
  };
}

FinancialEntity.prototype = new SingleEntity();
FinancialEntity.prototype.toArray = function() {
  return {
    activefromdate: this.activefromdate,
    activetodate: this.activetodate,
    name: this.name
  };
};

FinancialEntity.prototype.toString = function() {
  return this.name;
};

module.exports = FinancialEntity;
