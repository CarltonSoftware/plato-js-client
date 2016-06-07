var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

function ExchangeRateIssueRate(issueId, id) {
  this.path = this.createPath = 'exchangerateissue/'+ issueId +'/rate';
  this.id = id;
  this.currency = new EntityLink({ entity: 'Currency' });
}

ExchangeRateIssueRate.prototype = new SingleEntity();

ExchangeRateIssueRate.prototype.toArray = function() {
  return {
    currencyid: this.currencyid,
    unitsperbaseunit: this.unitsperbaseunit,
  };
};

module.exports = ExchangeRateIssueRate;
