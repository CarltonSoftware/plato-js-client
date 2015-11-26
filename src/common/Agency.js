var SingleEntity = require('./SingleEntity');

function Agency(id) {
  this.path = 'agency';
  this.id = id;
}
Agency.prototype = new SingleEntity();
Agency.prototype.toArray = function() {
  return {
    id: this.id,
    title: this.title,
    firstname: this.firstname,
    surname: this.surname
  };
};

module.exports = Agency;
