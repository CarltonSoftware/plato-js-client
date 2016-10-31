var SingleEntity = require('./SingleEntity');
var TicketTerm = require('./TicketTerm');

function TicketTermValue(id) {
  this.path = 'term';
  this.createPath = 'term';
  this.id = id;
  this.term = new TicketTerm();
}
TicketTermValue.prototype = new SingleEntity();
TicketTermValue.prototype.toArray = function() {
  return {
    value: this.value,
    termid: this.term.id
  };
};

module.exports = TicketTermValue;
