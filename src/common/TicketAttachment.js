var SingleEntity = require('./SingleEntity');
var File = require('./File');

function TicketAttachment(id) {
  this.path = 'attachment';
  this.createPath = 'attachment';
  this.id = id;
  this.filedata = new File();
}
TicketAttachment.prototype = new SingleEntity();
TicketAttachment.prototype.toArray = function() {
  return {
    filename: this.filename
  };
};
TicketAttachment.prototype.toFormData = function() {
  var formData = new FormData();
  formData.append('filedata', this.filedata);
  formData.append('filename', this.filename);
  return formData;
};

module.exports = TicketAttachment;
