module.exports.client = require('./common/platoJsClient');

module.exports.common = {};
module.exports.common.Encoding = require('./common/Encoding');
module.exports.common.unit = require('./common/Unit');
module.exports.common.attribute = require('./common/Attribute');
module.exports.common.vatband = require('./common/Vatband');
module.exports.common.customer = require('./common/Customer');
module.exports.common.Contact = require('./common/Contact');
module.exports.common.customerAddress = require('./common/CustomerAddress');
module.exports.common.Agency = require('./common/Agency');
module.exports.common.AgencyCollection = require('./common/AgencyCollection');
module.exports.common.customers = require('./common/Customers');
module.exports.common.Country = require('./common/Country');
module.exports.common.customerContactDetailOther = require('./common/CustomerContactDetailOther');
module.exports.common.ContactEntity = require('./common/ContactEntity');
module.exports.common.ContactType = require('./common/ContactType');
module.exports.common.ContactMethodType = require('./common/ContactMethodType');
module.exports.common.ContactMethodSubType = require('./common/ContactMethodSubType');

/***** Brand Related Objects *****/
module.exports.common.BookingBrand = require('./common/BookingBrand');
module.exports.common.MarketingBrand = require('./common/MarketingBrand');
module.exports.common.BrandingGroup = require('./common/BrandingGroup');
module.exports.common.Branding = require('./common/Branding');

/***** Note Related Objects *****/
module.exports.common.Note = require('./common/Note');
module.exports.common.NoteText = require('./common/NoteText');
module.exports.common.ActorNote = require('./common/ActorNote');
module.exports.common.NoteType = require('./common/NoteType');

/***** Tabs user *****/
module.exports.common.TabsUser = require('./common/TabsUser');

module.exports.staticCollection = require('./common/StaticCollection');
module.exports.collection = require('./common/Collection');
