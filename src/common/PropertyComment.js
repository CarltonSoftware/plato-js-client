var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function PropertyComment(id) {
  this.createPath = this.path = 'comment';
  this.id = id;
}
PropertyComment.prototype = new SingleEntity();
PropertyComment.prototype.toArray = function() {
  return {
    comment: this.comment,
    visibletoowner: this.visibletoowner,
    visibleonweb: this.visibleonweb
  };
};
PropertyComment.prototype.validSchema = function() {
  return Joi.object().keys({
    comment: Joi.string().required().label('Comment'),
    visibletoowner: Joi.boolean().label('Visible to owner'),
    visibleonweb: Joi.boolean().label('Visible on web')
  });
};

module.exports = PropertyComment;
