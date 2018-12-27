var SingleEntity = require('./SingleEntity');
var Joi = require('joi');


function ChargingPeriod(id){
      this.path = 'chargingperiod';
      this.createPath = 'chargingperiod';
      this.id = id;

      this.prototype.validSchema = function(){
            return {
                chargingperiod: Joi.string().required().label('Charging Period'),
                description: Joi.string().label('Time interval')
            }
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