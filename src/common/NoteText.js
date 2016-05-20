var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');


function NoteText(id) {
  this.path = 'text';
  this.createPath = 'text';
  this.id = id;
  this.createdby = new EntityLink({
    entity: 'TabsUser'
  });
  this.actionedby = new EntityLink({
    entity: 'TabsUser'
  });
}

NoteText.prototype = new SingleEntity();

NoteText.prototype.toArray = function() {
    return {
        id: this.id,
        createdbyactorid: this.createdbyactorid,
        notetext: this.notetext,
        followupdatetime: this.followupdatetime,
        actioneddatetime: this.actioneddatetime,
        actionedbytabsuserid: this.actionedbytabsuserid
    };
};

NoteText.prototype.toCreateArray = function() {
    return {
        createdbyactorid: this.createdbyactorid,
        notetext: this.notetext,
        followupdatetime: this.followupdatetime,
        actioneddatetime: this.actioneddatetime,
        actionedbytabsuserid: this.actionedbytabsuserid
    };
};

module.exports = NoteText;
