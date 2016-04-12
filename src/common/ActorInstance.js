var Actor = require('./Actor'),
  Customer = require('./Customer'),
  Owner = require('./Owner'),
  TabsUser = require('./TabsUser'),
  Supplier = require('./Supplier'),
  Agency = require('./Agency'),
  Office = require('./Office');

module.exports = function(actorType, id) {
  if (actorType === 'customer') {
    return Customer.bind(undefined);
  } else if (actorType === 'owner') {
    return Owner.bind(undefined);
  } else if (actorType === 'tabsuser') {
    return TabsUser.bind(undefined);
  } else if (actorType === 'supplier') {
    return Supplier.bind(undefined);
  } else if (actorType === 'agency') {
    return Agency.bind(undefined);
  } else if (actorType === 'office') {
    return Office.bind(undefined);
  } else {
    return Actor.bind(undefined);
  }
};
