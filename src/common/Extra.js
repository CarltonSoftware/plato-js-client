var SingleEntity = require('./SingleEntity');
var StaticCollection = require('./StaticCollection');
var Branding = require('./Branding');

function Extra(id) {
  this.path = 'extra';
  this.createPath = 'extra';
  this.id = id;
  this.brandings = new StaticCollection({
    object: Branding
  });
}

Extra.prototype = new SingleEntity();
Extra.prototype.toArray = function() {
  return {
    //TODO: Add in the fields necessary to create a Extra
    extracode: this.extracode,
    extratype: this.extratype,
    description: this.description
  };
};

module.exports = Extra;
