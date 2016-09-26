var SingleEntity = require('./SingleEntity');

function Report(id) {
  this.path = 'report';
  this.createPath = 'report';
  this.id = id;
}
Report.prototype = new SingleEntity();

module.exports = Report;
