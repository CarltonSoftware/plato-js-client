var SingleEntity = require('./SingleEntity');

function Category(id) {
  this.path = 'category';
  this.createPath = 'category';
  this.id = id;
}

Category.prototype = new SingleEntity();
Category.prototype.toArray = function() {
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

module.exports = Category;
