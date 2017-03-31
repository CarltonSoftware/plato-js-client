var Joi = require('joi');
var Promise = require('es6-promise').Promise;
var client = require('./platoJsClient').getInstance();
var statusError = require('./../error/statusError');
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
    return new Promise(function(resolve, reject) {
      if (res.status.code === 200) {
        var reportRun = new ReportRun(res.id);
        resolve(reportRun.mutateResponse(res.entity));
      } else {
        reject(new statusError(res));
      }
    });
  });
};

Report.prototype.toArray = function() {
  return {
    name: this.name,
    description: this.description,
    category: this.category
  };
};

Report.prototype.toFormData = function() {
  var formData = new FormData();
  formData.append('file', this.file);
  return formData;
};

Report.prototype.validParameters = function() {
  var object = {
    _recipients: Joi.string().email(),
    _format: Joi.string(),
  };
  this.parameters.forEach(function(parameter) {
    // translate a BIRT parameter type to a Joi type
    var type = parameter.type;
    if (type === 'integer') {
      type = 'number';
    }
    object[parameter.name] = Joi.alternatives().try(Joi[type](), Joi.number(), Joi.string()).label(parameter.toString());
    if (parameter.required) {
      object[parameter.name] = object[parameter.name].required();
    } else {
      object[parameter.name] = object[parameter.name].empty('');
    }
  });
  return Joi.object(object);
};

module.exports = Report;
