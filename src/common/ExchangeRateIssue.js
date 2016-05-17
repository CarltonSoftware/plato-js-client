var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

function ExchangeRateIssue(id) {
  this.path = this.createPath = 'exchangerateissue';
  this.id = id;
  this.type = new EntityLink({ entity: 'ExchangeRateIssueType' });
  this.currency = new EntityLink({ entity: 'Currency' });
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
