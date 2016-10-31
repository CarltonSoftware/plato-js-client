var Entity = require('./Entity');

function TicketTermType(id) {
  this.path = 'tickettermtype';
  this.createPath = 'tickettermtype';
  this.id = id;
}
TicketTermType.prototype = new Entity();

module.exports = TicketTermType;
