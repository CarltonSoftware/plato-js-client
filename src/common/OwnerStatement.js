var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var Owner = require('./Owner');
var Currency = require('./Currency');

function OwnerStatement(id) {
  this.path = this.createPath = 'statement';
  this.id = id;
  this.tabsuser = new EntityLink({ entity: 'TabsUser' });
  this.owner = new Owner();
  this.currency = new Currency();
}

OwnerStatement.prototype = new SingleEntity();
OwnerStatement.prototype.toArray = function() {
  return {
    id: this.id
  };
};

OwnerStatement.prototype.render = function(entity) {
  return entity.createPromiseResult(
    this.getUpdatePath() + '/render',
    {}
  );
};

OwnerStatement.prototype.email = function(subject, message, bookingbrand) {
  return this.updatePromiseResult(
    this.getUpdatePath() + '/email',
    {
      message: message,
      subject: subject,
      bookingbrandid: bookingbrand.id
    }
  );
};

module.exports = OwnerStatement;
