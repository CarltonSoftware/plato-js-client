var SingleEntity = require('./SingleEntity');
var FlagType = require('./FlagType');

function Flag(id) {
  this.path = 'flag';
  this.createPath = 'flagtype';
  this.id = id;
  this.flagtype = new FlagType();

}

Flag.prototype = new SingleEntity();
Flag.prototype.toArray = function() {
  return {
    type: this.type,
    flagtypeid: this.flagtype.id,
    // createdbyactorid: this.createdby.id,
    // noteid: this.note.id,
    // flaggedbyactorid: this.flaggedbyactor.id,
    // flaggedbybrandingid: this.flaggedbybranding.id,
  };
};

module.exports = Flag;
