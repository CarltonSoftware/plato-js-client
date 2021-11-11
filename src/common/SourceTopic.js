var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function SourceTopic(id) {
  this.path = 'sourcetopic';
  this.createPath = 'sourcetopic';
  this.id = id;
}
SourceTopic.prototype = new SingleEntity();
SourceTopic.prototype.toArray = function() {
  return {
    topicname: this.topicname
  };
};

SourceTopic.prototype.validSchema = function() {
  return Joi.object().keys({
    topicname: Joi.string().required().label('Topic Name')
  });
};


module.exports = SourceTopic;
