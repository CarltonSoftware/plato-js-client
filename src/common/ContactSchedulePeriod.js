var SingleEntity = require('./SingleEntity');
var Joi = require('joi');


function ContactSchedulePeriod(id) {
  this.path = 'period';
  this.createPath = this.path;
  this.id = id;
}

ContactSchedulePeriod.prototype = new SingleEntity();

ContactSchedulePeriod.prototype.validSchema = function () {
  return Joi.object().keys({
    fromdate: Joi.date().required().label('from date'),
    todate: Joi.date().required().label('to date'),
    propertyid: Joi.string().optional().allow("").label('property id'),
    bookingbrandid: Joi.string().optional().allow("").label('branding id'),
    dayofweek: Joi.number().optional().allow("").label('day of week'),
    fromtime: Joi.string().optional().label('from time'),
    totime: Joi.string().optional().label('to time'),
    exclude: Joi.boolean().optional().label('exclude'),
  });
};

ContactSchedulePeriod.prototype.toArray = function () {
  var arrObj =  {
    fromdate: this.fromdate,
    todate: this.todate
  };

  if(this.exclude) {
    arrObj.exclude = this.exclude;
  } else if (this.exclude === false) {
    arrObj.exclude = false;
  }

  if(this.propertyid) {
    arrObj.propertyid = this.propertyid;
  }

  if(this.bookingbrandid) {
    arrObj.bookingbrandid = this.bookingbrandid;
  }
  
  if(this.dayofweek) {
    arrObj.dayofweek = this.dayofweek;
    arrObj.fromtime = this.fromtime;
    arrObj.totime = this.totime;
  }
    

  return arrObj;
};



module.exports = ContactSchedulePeriod;