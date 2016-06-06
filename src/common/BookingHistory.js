var Collection = require('./Collection');
var HistoryEntry = require('./HistoryEntry');

function BookingHistory(id, page, limit) {
  this.path = 'booking/'+id+'/history';
  this.options.path = this.path;
  this.options.object = HistoryEntry;

  this.page = typeof page !== 'undefined' ? page : null;
  this.limit = typeof limit !== 'undefined' ? limit : null;
}
BookingHistory.prototype = new Collection();

BookingHistory.prototype.mutateResponse = function(entity) {
  this.collection = entity.elements.map(function (e) {
    var entity = new (Function.prototype.bind.apply(HistoryEntry, null));
    return entity.mutateResponse(e);
  });

  this.total = entity.total;
  this.page = entity.page;
  this.limit = entity.limit;
  this.time = entity.time;

  return(this);
};

module.exports = BookingHistory;
