var SingleEntity = require('./SingleEntity');

function ExchangeRateIssueType(id) {
  this.path = this.createPath = 'exchangerateissuetype';
  this.id = id;
}

ExchangeRateIssueType.prototype = new SingleEntity();

ExchangeRateIssueType.prototype.toArray = function() {
  return {
    exchangerateissuetype: this.exchangerateissuetype,
    description: this.description
  };
};

module.exports = ExchangeRateIssueType;
