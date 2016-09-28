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

module.exports = Report;
