module.exports.client = require('./common/platoJsClient');

module.exports.common = {};
module.exports.common.Encoding = require('./common/Encoding');
module.exports.common.Unit = require('./common/Unit');
module.exports.common.Attribute = require('./common/Attribute');
module.exports.common.Vatband = require('./common/Vatband');
module.exports.common.Contact = require('./common/Contact');
module.exports.common.Agency = require('./common/Agency');
module.exports.common.AgencyCollection = require('./common/AgencyCollection');
module.exports.common.Country = require('./common/Country');
module.exports.common.ContactEntity = require('./common/ContactEntity');
module.exports.common.ContactType = require('./common/ContactType');
module.exports.common.ContactMethodType = require('./common/ContactMethodType');
module.exports.common.ContactMethodSubType = require('./common/ContactMethodSubType');
module.exports.common.Document = require('./common/Document');
module.exports.common.Mimetype = require('./common/Mimetype');
module.exports.common.Source = require('./common/Source');
module.exports.common.Setting = require('./common/Setting');

/***** Actor Related Objects *****/
module.exports.common.Actor = require('./common/Actor');
module.exports.common.Actors = require('./common/Actors');
module.exports.common.ActorAddress = require('./common/ActorAddress');
module.exports.common.ActorContactDetailOther = require('./common/ActorContactDetailOther');
module.exports.common.ActorNote = require('./common/ActorNote');

/***** Customer Releated Objects *****/
module.exports.common.Customer = require('./common/Customer');
module.exports.common.CustomerAddress = require('./common/CustomerAddress');
module.exports.common.CustomerBooking = require('./common/CustomerBooking');
module.exports.common.CustomerContactDetailOther = require('./common/CustomerContactDetailOther');
module.exports.common.CustomerDocument = require('./common/CustomerDocument');
module.exports.common.Customers = require('./common/Customers');

/***** Property Related Objects *****/
module.exports.common.Property = require('./common/Property');
module.exports.common.Properties = require('./common/Properties');
module.exports.common.PropertyOwner = require('./common/PropertyOwner');
module.exports.common.PropertyBooking = require('./common/PropertyBooking');
module.exports.common.PropertyNote = require('./common/PropertyNote');
module.exports.common.PropertyDescription = require('./common/PropertyDescription');

/***** Brand Related Objects *****/
module.exports.common.BookingBrand = require('./common/BookingBrand');
module.exports.common.MarketingBrand = require('./common/MarketingBrand');
module.exports.common.BrandingGroup = require('./common/BrandingGroup');
module.exports.common.Branding = require('./common/Branding');

/***** Note Related Objects *****/
module.exports.common.Note = require('./common/Note');
module.exports.common.NoteText = require('./common/NoteText');
module.exports.common.NoteType = require('./common/NoteType');

/***** Tabs user *****/
module.exports.common.TabsUser = require('./common/TabsUser');

/***** Search *****/
module.exports.common.Search = require('./common/Search');

module.exports.StaticCollection = require('./common/StaticCollection');
module.exports.Collection = require('./common/Collection');
