var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function ExchangeRateIssueType(id) {
  this.path = this.createPath = 'exchangerateissuetype';
  this.id = id;

  this.validSchema = function() {
    return {
      exchangerateissuetype: Joi.string().label('type'),
      description: Joi.string().label('description')
    }
  };
}

ExchangeRateIssueType.prototype = new SingleEntity();

ExchangeRateIssueType.prototype.toArray = function() {
  return {
    exchangerateissuetype: this.exchangerateissuetype,
    description: this.description
  };
};

module.exports = ExchangeRateIssueType;
