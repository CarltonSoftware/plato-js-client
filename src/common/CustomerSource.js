var SingleEntity = require('./SingleEntity');
var Source = require('./Source');

function CustomerSource(id) {
  this.path = this.createPath = 'source';
  this.id = id;
  this.source = new Source();
}

CustomerSource.prototype = new SingleEntity();
CustomerSource.prototype.toArray = function() {
  return {
    sourceid: this.source.id,
    sourcedate: this.sourcedate
  };
};

module.exports = CustomerSource;
