var SingleEntity = require('./SingleEntity');

function HistoryEntry() {
}

HistoryEntry.prototype = new SingleEntity();
HistoryEntry.prototype.toArray = function() {
  return {
    actor: this.actor,
    client: this.client,
    datetime: this.datetime,
    description: this.description,
    parameters: this.parameters
  };
};

module.exports = HistoryEntry;
