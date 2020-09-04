var SingleEntity = require('./SingleEntity');
var Program = require('./Program');
var ApprovalType = require('./ApprovalType');
var Joi = require('joi');

function ActorProgram(id) {
  this.path = 'program';
  this.createPath = 'program';
  this.id = id;
  this.program = new Program();
  this.approvaltype = new ApprovalType();
}

ActorProgram.prototype = new SingleEntity();

ActorProgram.prototype.toArray = function() {
  return {
    programid: this.program.id,
    approvaltypeid: this.approvaltype ? this.approvaltype.id : undefined,
    fromdate: this.fromdate,
    todate: this.todate,
    approved: this.approved,
    pending: this.pending,
    actioned: this.actioned,
    approverquestion: this.approverquestion
  };
};

ActorProgram.prototype.validSchema = function() {
  return Joi.object().keys({
    program: Joi.object().required().label('program'),
    fromdate: Joi.date().required().label('from date'),
    todate: Joi.date().required().label('to date'),
    approved: Joi.boolean().required().label('Approved'),
    actioned: Joi.boolean().required().label('Actioned'),
    pending: Joi.boolean().required().label('Pending'),
    approverquestion: Joi.string().optional().allow('').label('Approver question'),
    approvaltype: Joi.object().optional().label('Approval Type')
  });
};

module.exports = ActorProgram;
