var SingleEntity = require('./SingleEntity');
var Joi = require('joi');


function ChargingPeriod(id) {
      this.path = 'chargingperiod';
      this.createPath = 'chargingperiod';
      this.id = id;

      this.validSchema = function() {
            return {
                chargingperiod: Joi.string().required().label('chargingperiod'),
                description: Joi.string().label('description')
            };
      };
}

ChargingPeriod.prototype = new SingleEntity();

ChargingPeriod.prototype.toArray = function() {
    return {
            "chargingperiod": this.chargingperiod,
            "description": this.description
    };
};


module.exports = ChargingPeriod;