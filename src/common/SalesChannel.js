var SingleEntity = require('./SingleEntity');

function SalesChannel(id) {
    this.path = 'saleschannel';
    this.createPath = 'saleschannel';
    this.id = id;
}
SalesChannel.prototype = new SingleEntity();

SalesChannel.prototype.toArray = function() {
  return {
    //TODO: Add in the fields necessary to create a SalesChannel
    saleschannel: this.saleschannel,
    description: this.description,
  };
};

SalesChannel.prototype.toCreateArray = function() {
  return {
    //TODO: Add in the fields necessary to update a SalesChannel
    saleschannel: this.saleschannel,
    description: this.description,
  };
};

SalesChannel.prototype.toUpdateArray = function() {
  return {
    //TODO: Add in the fields necessary to update a SalesChannel
    saleschannel: this.saleschannel,
    description: this.description,
  };
};

module.exports = SalesChannel;
