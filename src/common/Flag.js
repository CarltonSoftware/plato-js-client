var SingleEntity = require('./SingleEntity');
var FlagType = require('./FlagType');
var EntityLink = require('./EntityLink');

function Flag(id) {
  this.path = 'flag';
  this.createPath = 'flag';
  this.id = id;
  this.flagtype = new FlagType();
  this.createdBy = new EntityLink({ entity: 'TabsUser' });
  this.flaggedbybranding = new EntityLink({ entity: 'Branding' });
}

Flag.prototype = new SingleEntity();
Flag.prototype.toArray = function() {
  var flag = {
    type: this.type,
    flagtypeid: this.flagtype.id,
    // noteid: this.note.id,
  };
  if (this.flaggedbybranding) {
    flag.flaggedbybrandingid = this.flaggedbybranding.id;
  }
  if (this.flaggedbyactor) {
    flag.flaggedbyactorid = this.flaggedbyactor.id;
  }
  return flag;
};
Flag.prototype.getCreatePath = function() {
  return 'actor/' + this.parent.id + '/' + this.path;
};
Flag.prototype.getUpdatePath = function() {
  return 'actor/' + this.parent.id + '/' + this.path + '/' + this.id;
};

module.exports = Flag;
