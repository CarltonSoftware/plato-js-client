var SingleEntity = require('./SingleEntity');

function PriceTypeStartDay(id) {
  this.path = 'startday';
  this.createPath = 'startday';
  this.id = id;
}

PriceTypeStartDay.prototype = new SingleEntity();
PriceTypeStartDay.prototype.toArray = function() {
  return {
    dayssincepriceanchor: this.dayssincepriceanchor,
  };
};

module.exports = PriceTypeStartDay;
