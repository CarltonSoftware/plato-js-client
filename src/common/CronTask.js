var SingleEntity = require('./SingleEntity');

function CronTask(id) {
  this.path = this.createPath = 'crontask';
  this.id = id;
}
CronTask.prototype = new SingleEntity();

CronTask.prototype.toArray = function() {
  return {
    schedule: this.schedule,
    type: this.type,
    method: this.method,
    url: this.url,
    parameters: this.parameters,
    headers: this.headers
  };
};

module.exports = CronTask;
