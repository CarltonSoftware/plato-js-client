module.exports.client = require('./common/platoJsClient');

module.exports.common = {};
module.exports.common.Encoding = require('./common/Encoding');
module.exports.common.unit = require('./common/Unit');
module.exports.common.attribute = require('./common/Attribute');
module.exports.common.vatband = require('./common/Vatband');
module.exports.common.Contact = require('./common/Contact');
module.exports.common.Agency = require('./common/Agency');
module.exports.common.AgencyCollection = require('./common/AgencyCollection');
module.exports.common.Country = require('./common/Country');
module.exports.common.ContactEntity = require('./common/ContactEntity');
module.exports.common.ContactType = require('./common/ContactType');
module.exports.common.ContactMethodType = require('./common/ContactMethodType');
module.exports.common.ContactMethodSubType = require('./common/ContactMethodSubType');
module.exports.common.Source = require('./common/Source');

/***** Actor Related Objects *****/
module.exports.common.Actor = require('./common/Actor');
module.exports.common.Actors = require('./common/Actors');
module.exports.common.ActorAddress = require('./common/ActorAddress');
module.exports.common.ActorContactDetailOther = require('./common/ActorContactDetailOther');

/***** Customer Releated Objects *****/
module.exports.common.customer = require('./common/Customer');
module.exports.common.customerAddress = require('./common/CustomerAddress');
module.exports.common.customers = require('./common/Customers');
module.exports.common.customerContactDetailOther = require('./common/CustomerContactDetailOther');

/***** Property Related Objects *****/
module.exports.common.property = require('./common/Property');
module.exports.common.properties = require('./common/Properties');
module.exports.common.propertyOwner = require('./common/PropertyOwner');
module.exports.common.propertyBooking = require('./common/PropertyBooking');

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

/***** Search *****/
module.exports.common.Search = require('./common/Search');

module.exports.staticCollection = require('./common/StaticCollection');
module.exports.collection = require('./common/Collection');
