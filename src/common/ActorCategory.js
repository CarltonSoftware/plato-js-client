var SingleEntity = require('./SingleEntity');

function ActorCategory(id) {
  this.path = 'category';
  this.createPath = 'category';
  this.id = id;
}
ActorCategory.prototype = new SingleEntity();
ActorCategory.prototype.toArray = function() {
  return {
    category: this.category,
    description: this.description,
    bookingsminimum: this.bookingsminimum,
    bookingsmaximum: this.bookingsmaximum,
    andor: this.andor,
    bookingvalueminimum: this.bookingvalueminimum,
    bookingvaluemaximum: this.bookingvaluemaximum,
    period: this.period
  };
};

module.exports = ActorCategory;
