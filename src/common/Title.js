var SingleEntity = require('./SingleEntity');

function Title(id) {
  this.path = 'title';
  this.createPath = 'title';
  this.id = id;

  this.toArray = function() {
    return {
      title: this.title
    };
  };
}
Title.prototype = new SingleEntity();

module.exports = Title;
