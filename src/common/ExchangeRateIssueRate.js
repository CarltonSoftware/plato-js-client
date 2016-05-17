var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

function ExchangeRateIssueRate(id) {
  this.path = this.createPath = 'rate';
  this.id = id;
  this.currency = new EntityLink({ entity: 'Currency' });
}

ExchangeRateIssueRate.prototype = new SingleEntity();

ExchangeRateIssueRate.prototype.toArray = function() {
  return {
    currencyid: this.currency,
    unitsperbaseunit: this.unitsperbaseunit,
  };
};

module.exports = ExchangeRateIssueRate;
