var SingleEntity = require('./SingleEntity');
var Joi = require('joi');
var FilterCollection = require('./FilterCollection');
var SpecialOffer = require('./SpecialOffer');

function CancellationReasonGroup(id) {
  this.path = this.createPath = 'cancellationreasongroup';
  this.id = id;
  this.templatespecialoffer = new SpecialOffer();
  this.validSchema = function() {
    return {
      groupname: Joi.string().required().label('CancellationReason group'),
      templatespecialoffer: Joi.object().optional().label('Template Special Offer'),
    };
  };
}
CancellationReasonGroup.prototype = new SingleEntity();

CancellationReasonGroup.prototype.toArray = function() {
  return {
    groupname: this.groupname,
    templatespecialoffer: this.templatespecialoffer
  };
};

CancellationReasonGroup.prototype.toUpdateArray = function() {
  return {
    groupname: this.groupname,
    templatespecialofferid: this.templatespecialoffer ? this.templatespecialoffer.id : 0
  };
};

CancellationReasonGroup.prototype.getTemplateTypeCancellationsSpecialOffers = function(){
  var specialoffer = new FilterCollection({
    object: SpecialOffer,
    path: 'specialoffer'
  });
  specialoffer.addFilter('templatetype', 'Cancellation');
  console.log(specialoffer);
  return specialoffer.fetch();
};

module.exports = CancellationReasonGroup;
