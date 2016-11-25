var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var Owner = require('./Owner');

function OwnerStatement(id) {
  this.path = this.createPath = 'statement';
  this.id = id;
  this.tabsuser = new EntityLink({ entity: 'TabsUser' });
  this.owner = new Owner();
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

module.exports = OwnerStatement;
