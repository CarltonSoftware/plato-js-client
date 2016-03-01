var Entity = require('./Entity');

function BookingEnquiry(propertyid, brandingid, fromdate, todate, saleschannel, adults,
                        children, infants, pets, pricingperiod, currencycode, calculatebrochureprice,
                        calculateadditionalextras, calculateincludedextras, includepartysizepricing,
                        includespecialoffers, calculatesecuritydeposit, calculatedeposit) {
    this.path = '/bookingenquiry';
    this.createPath = this.path;
    this.params = {
      propertyid: propertyid,
      brandingid: brandingid,
      fromdate: fromdate,
      todate: todate,
      adults: adults,
      children: children,
      infants: infants,
      pets: pets,
      saleschannel: saleschannel,
      pricingperiod: pricingperiod,
      currencycode: currencycode,
      calculatebrochureprice: calculatebrochureprice,
      calculateadditionalextras: calculateadditionalextras,
      calculateincludedextras: calculateincludedextras,
      includepartysizepricing: includepartysizepricing,
      includespecialoffers: includespecialoffers,
      calculatesecuritydeposit: calculatesecuritydeposit,
      calculatedeposit: calculatedeposit
    };
}
BookingEnquiry.prototype = new Entity();

BookingEnquiry.prototype.mutateEntity = function(entity) {
    return entity;
}

module.exports = BookingEnquiry;
