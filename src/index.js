module.exports.client = require('./common/platoJsClient');

module.exports.common = {};
module.exports.common.unit = require('./common/Unit');
module.exports.common.attribute = require('./common/Attribute');
module.exports.common.vatband = require('./common/Vatband');
module.exports.common.customer = require('./common/Customer');
module.exports.common.Contact = require('./common/Contact');
//module.exports.common.customerAddress = require('./common/CustomerAddress');
module.exports.common.customers = require('./common/Customers');
module.exports.common.country = require('./common/Country');
module.exports.common.customerContactDetailOther = require('./common/customerContactDetailOther');
module.exports.common.ContactEntity = require('./common/ContactEntity');
module.exports.common.ContactType = require('./common/ContactType');
module.exports.common.ContactMethodType = require('./common/ContactMethodType');

/***** Brand Related Objects *****/
module.exports.common.BookingBrand = require('./common/BookingBrand');
module.exports.common.MarketingBrand = require('./common/MarketingBrand');
module.exports.common.BrandingGroup = require('./common/BrandingGroup');
module.exports.common.Branding = require('./common/Branding');

/***** Note Related Objects *****/
module.exports.common.Note = require('./common/Note');
module.exports.common.NoteText = require('./common/NoteText');


module.exports.collection = require('./common/Collection');
