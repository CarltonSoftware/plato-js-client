var client = require('./platoJsClient').getInstance();
var SingleEntity = require('./SingleEntity');

function Report(id) {
  this.path = 'report';
  this.createPath = 'report';
  this.id = id;
}
Report.prototype = new SingleEntity();

Report.prototype.run = function(params) {
  return client.post({
    path: this.getUpdatePath() + '/run',
    entity: params
  });
};

Report.prototype.toFormData = function() {
  var formData = new FormData();
  formData.append('file', this.file);
  return formData;
};

module.exports = Report;
