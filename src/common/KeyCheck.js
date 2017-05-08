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
  var arr = {
    type: this.type,
    checkdatetime: this.checkdatetime,
    notes: this.notes,
    tabsuserid: this.tabsuser.id,
    keycheckreasonid: this.keycheckreason.id,
    expectedbackdatetime: this.expectedbackdatetime,
    actorid: this.actor && this.actor.id
  };
  if (this.type === 'KeyCheckIn') {
    arr.keycheckoutid = this.parent.lastcheck.id;
  }
  return arr;
};

KeyCheck.prototype.validSchema = function() {
  return Joi.object().keys({
    type: Joi.string().valid(['KeyCheckOut', 'KeyCheckIn']).required(),
    checkdatetime: Joi.date().label('Date and time'),
    notes: Joi.string().empty('').label('Notes'),
    tabsuser: Joi.object().label('Tabs user'),
    keycheckreason: Joi.object().label('Reason'),
    expectedbackdatetime: Joi.when('type', {
      is: 'KeyCheckOut',
      then: Joi.date().empty(''),
      otherwise: Joi.forbidden()
    }).label('Expected back date and time'),
    actor: Joi.object().empty('').label('Actor'),
  });
};

module.exports = KeyCheck;
