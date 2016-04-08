var SingleEntity = require('./SingleEntity');
var ExtraBranding = require('./ExtraBranding');

function Promotion(id) {
  this.path = this.createPath = 'promotion';
  this.id = id;
  this.extrabranding = new ExtraBranding();
}

Promotion.prototype = new SingleEntity();
Promotion.prototype.toArray = function() {
  return {
    promotioncode: this.promotioncode,
    extrabrandingid: this.extrabranding.id,
    limit: this.limit,
    usecount: this.usecount,
  };
};

module.exports = Promotion;
