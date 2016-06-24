var SingleEntity = require('./SingleEntity');
var ExchangeRateIssueType = require('./ExchangeRateIssueType');
var Currency = require('./Currency');

function ExchangeRateIssue(id) {
  this.path = this.createPath = 'exchangerateissue';
  this.id = id;
  this.type = new ExchangeRateIssueType();
  this.currency = new Currency();
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
