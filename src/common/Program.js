var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function Program(id) {
  this.path = 'program';
  this.createPath = 'program';
  this.id = id;

  this.validSchema = function() {
    var s = {
      programname: Joi.string().required().label('Name'),
      description: Joi.string().required().label('Description'),
      fromdate: Joi.date().required().label('From date')
    };

    if (this.fromdate) {
      s.todate = Joi.date().optional().label('To date');
    }

    s.ownerapprovalrequired = Joi.boolean().required().label('owner approval required?');
    s.propertyapprovalrequired = Joi.boolean().required().label('property approval required?');

    s.actionrequiredonapproval = Joi.boolean().required().label('action required on approval?');
    if (this.actionrequiredonapproval === true) {
      s.approvalactiondescription = Joi.string().required().label('approval action description');
    }

    s.actionrequiredonrejection = Joi.boolean().required().label('action required on rejection?');
    if (this.actionrequiredonrejection === true) {
      s.rejectionactiondescription = Joi.string().required().label('rejection action description');
    }

    return s;
  }
}

Program.prototype = new SingleEntity();

Program.prototype.toArray = function() {
  return {
    programname: this.programname,
    description: this.description,
    fromdate: this.fromdate,
    todate: this.todate,
    ownerapprovalrequired: this.ownerapprovalrequired,
    propertyapprovalrequired: this.propertyapprovalrequired,
    actionrequiredonapproval: this.actionrequiredonapproval,
    actionrequiredonrejection: this.actionrequiredonrejection,
    approvalactiondescription: this.approvalactiondescription,
    rejectionactiondescription: this.rejectionactiondescription
  };
};
Program.prototype.toString = function() {
  return this.programname;
};


module.exports = Program;
