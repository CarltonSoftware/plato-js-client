var SingleEntity = require('./SingleEntity');
var Document = require('./Document');

function ReportRun(id) {
  var Report = require('./Report');

  this.path = 'reportrun';
  this.id = id;
  this.report = new Report();
  this.result = new Document();
}
ReportRun.prototype = new SingleEntity();

module.exports = ReportRun;
