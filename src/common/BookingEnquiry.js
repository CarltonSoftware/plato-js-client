var Entity = require('./Entity');
var Branding = require('./Branding');

function BookingEnquiry(
  propertyid,
  brandingid,
  fromdate,
  todate,
  saleschannel,
  adults,
  children,
  infants,
  pets,
  pricingperiod,
  currencycode,
  currentbookingid,
  customerid,
  calculatebrochureprice,
  calculateadditionalextras,
  calculateincludedextras,
  includepartysizepricing,
  includespecialoffers,
  calculatesecuritydeposit,
  calculatedeposit
) {
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
  if (currentbookingid) {
    this.params.currentbookingid = currentbookingid;
  }
  if (customerid) {
    this.params.customerid = customerid;
  }

  this.branding = new Branding();

}
BookingEnquiry.prototype = new Entity();

module.exports = BookingEnquiry;
