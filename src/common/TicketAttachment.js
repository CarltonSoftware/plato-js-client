var SingleEntity = require('./SingleEntity');
var File = require('./File');
var client = require('./platoJsClient').getInstance();
var statusError = require('../error/statusError');

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
  formData.append('data', this.filedata);
  formData.append('filename', this.filename);
  return formData;
};

TicketAttachment.prototype.getData = function() {
  var result = client.get({ 
    path: this.getUpdatePath() + '/data',
    mixin: { responseType: 'blob' }
  });

  return new Promise(function(resolve, reject) {
    result.then(function(res) {
      if (res.status.code === 200) {
        self.data = res.entity;
        self.url = URL.createObjectURL(res.entity);
        resolve(self);
      } else {
        reject(new statusError(res));
      }
    });
  });
};

module.exports = TicketAttachment;
