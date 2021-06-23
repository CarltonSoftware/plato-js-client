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
  let fromDateLabel = 'from date';
  let toDateLabel = 'to date';
  let actionedVisible = true;
  let approvalVisible = true;
  let pendingVisible = true;

  // DEV-15 - slightly alter the connotations and bevahiour of programs 
  // that are agreements/contracts
  if (this.program && this.program.id) {
    const programname = this.program.programname.toLowerCase();
    if (programname.includes('agreement') || programname.includes('contract')) {
      fromDateLabel = 'issue date';
      toDateLabel = 'expiry date';
      actionedVisible = false;
      approvalVisible = false;
      pendingVisible = !this.approved;
    }
  }

  return Joi.object().keys({
    program: Joi.object().required().label('program'),
    fromdate: Joi.date().required().label(fromDateLabel),
    todate: Joi.date().required().label(toDateLabel),
    approved: Joi.boolean().required().label('Approved'),
    actioned: Joi.boolean().required().label('Actioned').meta({ visible: actionedVisible }),
    pending: Joi.boolean().required().label('Pending').meta({ visible: pendingVisible }),
    approverquestion: Joi.string().optional().allow('').label('Approver question').meta({ visible: approvalVisible }),
    approvaltype: Joi.object().optional().label('Approval Type').meta({ visible: approvalVisible })
  });
};

module.exports = ActorProgram;
