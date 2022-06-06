var SingleEntity = require('./SingleEntity');
var Joi = require('joi');
var Branding = require('./Branding');

function TabsUserBranding(id) {
  this.path =  'branding';
  this.createPath = this.path;
  this.id = id;
  this.branding = new Branding();

  this.validSchema = function() {
    return {
      userid: Joi.string().required().label('Tabs user id'),
      brandingid: Joi.string().required().label('branding')
    };
  }
}

TabsUserBranding.prototype = new SingleEntity();
TabsUserBranding.prototype.toArray = function() {
  return {
    tabsuserid: this.userid,
    brandingid: this.brandingid
  }
};

module.exports = TabsUserBranding;