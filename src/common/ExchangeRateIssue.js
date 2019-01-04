var SingleEntity = require('./SingleEntity');
var ExchangeRateIssueType = require('./ExchangeRateIssueType');
var Currency = require('./Currency');
var Collection = require('./Collection');
var ExchangeRate = require('./ExchangeRate');
var Joi = require('joi');

function ExchangeRateIssue(id) {
  this.path = this.createPath = 'exchangerateissue';
  this.id = id;
  this.type = new ExchangeRateIssueType();
  this.currency = new Currency();
  this.exchangerates = new Collection({
    object: ExchangeRate,
    path: 'rate',
    parent: this
  });

  this.validSchema = function() {
    return {
      type: Joi.object().required().label('Type'),
      currency: Joi.object().required().label('Currency'),
      issuenumber: Joi.number().label('issue number'),
      fromdate: Joi.date().label('from date'),
      todate: Joi.date().label('to date'),
      description: Joi.string().required().label('Description')
    }
  };
}

ExchangeRateIssue.prototype = new SingleEntity();

ExchangeRateIssue.prototype.toArray = function() {
  return {
    exchangerateissuetypeid: this.type.id,
    currencyid: this.currency.id,
    issuenumber: this.issuenumber,
    fromdate: this.fromdate,
    todate: this.todate,
    description: this.description
  };
};

module.exports = ExchangeRateIssue;
