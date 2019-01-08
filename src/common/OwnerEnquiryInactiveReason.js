var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function OwnerEnquiryInactiveReason(id){
    this.id = id;
    this.path = 'ownerenquiryinactivereason';
    this.createPath = this.path;

    this.validSchema = function() {
        return {
            reason: Joi.string().required().label('reason'),
            description: Joi.string().required().label('description')
        };
    };
}

OwnerEnquiryInactiveReason.prototype = new SingleEntity();

OwnerEnquiryInactiveReason.prototype.toArray = function() {
    return {
        reason: this.reason,
        description: this.description
    }
}


module.exports = OwnerEnquiryInactiveReason;