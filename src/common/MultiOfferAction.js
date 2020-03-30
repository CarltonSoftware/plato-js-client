var SingleEntity = require('./SingleEntity');

function MultiOfferAction(id) {
  this.path = 'multiofferaction';
  this.id = id;
}

MultiOfferAction.prototype = new SingleEntity();

module.exports = MultiOfferAction;
