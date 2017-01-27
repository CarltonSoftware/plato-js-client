var client = require('./platoJsClient').getInstance();
var SingleEntity = require('./SingleEntity');
var RoleReason = require('./RoleReason');

function TemplateRoleReason(id) {
  this.createPath = this.path = 'rolereason';
  this.id = id;
  this.rolereason = new RoleReason();
}

TemplateRoleReason.prototype = new SingleEntity();

TemplateRoleReason.prototype.toArray = function() {
  return {
    fromdate: this.fromdate,
    todate: this.todate,
    rolereasonid: this.rolereason.id
  };
};

module.exports = TemplateRoleReason;
