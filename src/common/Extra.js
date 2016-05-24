var SingleEntity = require('./SingleEntity');
var StaticCollection = require('./StaticCollection');
var Collection = require('./Collection');
var Branding = require('./Branding');
var ExtraBranding = require('./ExtraBranding');


function Extra(id) {
  this.path = 'extra';
  this.createPath = 'extra';
  this.id = id;
  this.brandings = new StaticCollection({
    object: Branding
  });
  this.extrabrandings = new Collection({
    object: ExtraBranding,
    path: 'branding',
    parent: this
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
