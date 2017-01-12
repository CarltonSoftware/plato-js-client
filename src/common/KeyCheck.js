var Joi = require('joi');
var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var KeyCheckReason = require('./KeyCheckReason');

function KeyCheck(id) {
  this.path = 'check';
  this.createPath = 'check';
  this.id = id;
  this.tabsuser = new EntityLink({
    entity: 'TabsUser'
  });
  this.keycheckreason = new KeyCheckReason();
  this.actor = new EntityLink({
    entity: 'Actor'
  });
}
KeyCheck.prototype = new SingleEntity();

KeyCheck.prototype.toArray = function() {
  return {
    type: this.type,
    checkdatetime: this.checkdatetime,
    notes: this.notes,
    tabsuserid: this.tabsuser.id,
    keycheckreasonid: this.keycheckreason.id,
    expectedbackdatetime: this.expectedbackdatetime,
    actorid: this.actor && this.actor.id
  };
};

KeyCheck.prototype.validSchema = function() {
  return Joi.object().keys({
  });
};

module.exports = KeyCheck;
