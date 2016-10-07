var client = require('./platoJsClient').getInstance();
var SingleEntity = require('./SingleEntity');
var StaticCollection = require('./StaticCollection');
var ReportParameter = require('./ReportParameter');
var ReportRun = require('./ReportRun');

function Report(id) {
  this.path = 'report';
  this.createPath = 'report';
  this.id = id;
  this.parameters = new StaticCollection({
    object: ReportParameter
  });
}
Report.prototype = new SingleEntity();

Report.prototype.run = function(params) {
  return client.post({
    path: this.getUpdatePath() + '/run',
    entity: params
  }).then(function(res) {
    var reportRun = new ReportRun(res.id);
    reportRun.mutateResponse(res.entity);
    return reportRun;
  });
};

Report.prototype.toFormData = function() {
  var formData = new FormData();
  formData.append('file', this.file);
  return formData;
};

module.exports = Report;
