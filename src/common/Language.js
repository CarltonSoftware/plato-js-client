var SingleEntity = require('./SingleEntity');

function Language(id) {
  this.path = 'language';
  this.createPath = 'language';
  this.id = id;
  this.code = 'EN';
  this.name = 'English';
}

Language.prototype = new SingleEntity();
Language.prototype.toArray = function() {
  return {
    languagecode: this.code
  };
};

module.exports = Language;
