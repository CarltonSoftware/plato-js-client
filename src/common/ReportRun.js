var SingleEntity = require('./SingleEntity');
var Report = require('./Report');
var Document = require('./Document');

function ReportRun(id) {
  this.path = 'reportrun';
  this.id = id;
  // this.report = new Report();
  this.result = new Document();
}
ReportRun.prototype = new SingleEntity();

module.exports = ReportRun;
