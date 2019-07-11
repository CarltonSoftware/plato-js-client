var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function Title(id) {
  this.path = 'title';
  this.createPath = 'title';
  this.id = id;

  this.toArray = function() {
    return {
      title: this.title
    };
  };

  this.validSchema = function() {
    return {
      title: Joi.string().required().label('title')
    };
  };
}

Title.prototype = new SingleEntity();

module.exports = Title;
