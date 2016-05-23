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

NoteText.prototype.mutateResponse = function(entity) {
  var user = 'TabsUser';
  var type = entity.createdby.split('/')[2];

  switch (type) {
    case 'owner':
    case 'customer':
    case 'agency':
    case 'supplier':
    case 'office':
      user = type.charAt(0).toUpperCase() + type.slice(1);
      break;
  }

  this.createdby = new EntityLink({
    entity: user
  });

  return this.mutateEntity(entity);
};

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
