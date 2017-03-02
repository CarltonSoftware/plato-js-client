var SingleEntity = require('./SingleEntity');
var ExchangeRateIssueType = require('./ExchangeRateIssueType');
var Currency = require('./Currency');
var Collection = require('./Collection');
var ExchangeRate = require('./ExchangeRate');

function ExchangeRateIssue(id) {
  this.path = this.createPath = 'exchangerateissue';
  this.id = id;
  this.type = new ExchangeRateIssueType();
  this.currency = new Currency();
  this.exchangeRates = new Collection({
    object: ExchangeRate,
    path: 'rate',
    parent: this
  });
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
