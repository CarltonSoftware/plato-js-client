var SingleEntity = require('./SingleEntity');

function PersonalisedBrochure(id) {
  this.path = 'personalisedbrochure';
  this.createPath = 'personalisedbrochure';
  this.id = id;
}

PersonalisedBrochure.prototype = new SingleEntity();

module.exports = PersonalisedBrochure;
