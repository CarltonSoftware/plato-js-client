var SingleEntity = require('./SingleEntity');

function SalesChannel(id) {
  this.path = 'saleschannel';
  this.createPath = 'saleschannel';
  this.id = id;
}
SalesChannel.prototype = new SingleEntity();

SalesChannel.prototype.toArray = function() {
  return {
    saleschannel: this.saleschannel,
    description: this.description
  };
};

module.exports = SalesChannel;
