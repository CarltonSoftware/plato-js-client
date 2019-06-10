var SingleEntity = require('./SingleEntity');

function NoteText(id) {
  this.path = 'text';
  this.createPath = 'text';
  this.id = id;
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
    var nt = {
        createdbyactorid: this.createdbyactorid,
        notetext: this.notetext,
        actioneddatetime: this.actioneddatetime,
        actionedbytabsuserid: this.actionedbytabsuserid
    };
    if (this.followupdatetime) {
        nt.followupdatetime = this.followupdatetime
    }
    return nt;
};

module.exports = NoteText;
