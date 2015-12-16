var SingleEntity = require('./SingleEntity');

function Agency(id) {
  this.path = 'agency';
  this.createPath = 'agency';
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

Agency.prototype.toCreateArray = function() {
    return {
        companyname: this.companyname
    };
};

module.exports = Agency;
