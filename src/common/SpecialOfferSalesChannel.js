var SingleEntity = require('./SingleEntity');
var SalesChannel = require('./SalesChannel');

function SpecialOfferSalesChannel(id) {
  this.path = this.createPath = 'saleschannel';
  this.id = id;
  this.saleschannel = new SalesChannel();
}

SpecialOfferSalesChannel.prototype = new SingleEntity();
SpecialOfferSalesChannel.prototype.toArray = function() {
  return {
    saleschannelid: this.saleschannel.id,
  };
};

module.exports = SpecialOfferSalesChannel;
