var Joi = require('joi');
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
  return this.createPromiseResult(this.getUpdatePath() + '/run', params).then(function(res) {
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

Report.prototype.validParameters = function() {
  var object = {
    _recipients: Joi.string().email()
  };
  this.parameters.forEach(function(parameter) {
    object[parameter.name] = Joi[parameter.type]().label(parameter.toString());
    if (parameter.required) {
      object[parameter.name] = object[parameter.name].required();
    } else {
      object[parameter.name] = object[parameter.name].empty('');
    }
  });
  return Joi.object(object);
};

module.exports = Report;
