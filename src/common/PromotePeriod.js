var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function PromotePeriod(id) {
    this.path = 'promotionperiod';
    this.createPath = this.path;
    this.id = id;
}

PromotePeriod.prototype = new SingleEntity();

PromotePeriod.prototype.validSchema = function() {
    return {
        fromdate: Joi.date().optional().label('From date'),
        todate: Joi.date().required().label('To date'),
        comments: Joi.string().optional().label('Comments')
    }
};

PromotePeriod.prototype.toArray = function() {
    return {
        fromdate: this.fromdate,
        todate: this.todate,
        comments: this.comments
    }
};


module.exports = PromotePeriod;
