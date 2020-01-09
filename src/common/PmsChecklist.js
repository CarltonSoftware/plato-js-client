var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

function PmsChecklist(id) {
  this.path = this.createPath = 'pmschecklist';
  this.id = id;
  this.branding = new EntityLink({
    entity: 'Branding'
  });  
  this.createdbyactor = new EntityLink({
    entity: 'Actor'
  });
  this.updatedbyactor = new EntityLink({
    entity: 'Actor'
  });  
}
PmsChecklist.prototype = new SingleEntity();

PmsChecklist.prototype.toArray = function() {
  return {
    brandingid: this.branding.id,
    name: this.name,
    json: this.json,
    createddatetime: this.createddatetime,
    createdbyactorid: this.createdbyactor.id,
    updateddatetime: this.updateddatetime,
    updatedbyactorid: this.updatedbyactor.id
  };
};

module.exports = PmsChecklist;
