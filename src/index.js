module.exports.client = require('./common/platoJsClient');

module.exports.common = {};
module.exports.common.Encoding = require('./common/Encoding');
module.exports.common.Unit = require('./common/Unit');
module.exports.common.Attribute = require('./common/Attribute');
module.exports.common.AttributeGroup = require('./common/AttributeGroup');
module.exports.common.AttributeOption = require('./common/AttributeOption');
module.exports.common.Contact = require('./common/Contact');
module.exports.common.Agency = require('./common/Agency');
module.exports.common.AgencyBookingType = require('./common/AgencyBookingType');
module.exports.common.AgencyCollection = require('./common/AgencyCollection');
module.exports.common.Country = require('./common/Country');
module.exports.common.ContactEntity = require('./common/ContactEntity');
module.exports.common.ContactType = require('./common/ContactType');
module.exports.common.ContactMethodType = require('./common/ContactMethodType');
module.exports.common.ContactMethodSubType = require('./common/ContactMethodSubType');
module.exports.common.Document = require('./common/Document');
module.exports.common.Image = require('./common/Image');
module.exports.common.File = require('./common/File');
module.exports.common.Mimetype = require('./common/Mimetype');
module.exports.common.SecurityFeature = require('./common/SecurityFeature');
module.exports.common.Setting = require('./common/Setting');
module.exports.common.Source = require('./common/Source');
module.exports.common.SourceCategory = require('./common/SourceCategory');
module.exports.common.OwnerPaymentTerm = require('./common/OwnerPaymentTerm');

// Actor Related Objects
module.exports.common.Actor = require('./common/Actor');
module.exports.common.ActorInstance = require('./common/ActorInstance');
module.exports.common.Actors = require('./common/Actors');
module.exports.common.ActorAddress = require('./common/ActorAddress');
module.exports.common.ActorContactDetailAddress = require('./common/ActorContactDetailAddress');
module.exports.common.ActorContactDetailOther = require('./common/ActorContactDetailOther');
module.exports.common.ActorNote = require('./common/ActorNote');
module.exports.common.ActorDocument = require('./common/ActorDocument');
module.exports.common.BankAccount = require('./common/BankAccount');
module.exports.common.PotentialDuplicate = require('./common/PotentialDuplicate');

// Customer Releated Objects
module.exports.common.Customer = require('./common/Customer');
module.exports.common.CustomerAddress = require('./common/CustomerAddress');
module.exports.common.CustomerContactDetailOther = require('./common/CustomerContactDetailOther');
module.exports.common.CustomerDocument = require('./common/CustomerDocument');
module.exports.common.Customers = require('./common/Customers');

// Other Actors
module.exports.common.TabsUser = require('./common/TabsUser');
module.exports.common.Owner = require('./common/Owner');
module.exports.common.Office = require('./common/Office');
module.exports.common.Supplier = require('./common/Supplier');

// Property Related Objects
module.exports.common.Properties = require('./common/Properties');
module.exports.common.Property = require('./common/Property');
module.exports.common.PropertyAttribute = require('./common/PropertyAttribute');
module.exports.common.PropertyAvailability = require('./common/PropertyAvailability');
module.exports.common.PropertyBranding = require('./common/PropertyBranding');
module.exports.common.PropertyCleaner = require('./common/PropertyCleaner');
module.exports.common.PropertyKeyholder = require('./common/PropertyKeyholder');
module.exports.common.PropertyOwner = require('./common/PropertyOwner');
module.exports.common.PropertyNote = require('./common/PropertyNote');
module.exports.common.PropertyDescription = require('./common/PropertyDescription');
module.exports.common.PropertySecurityDeposit = require('./common/PropertySecurityDeposit');
module.exports.common.PropertySupplier = require('./common/PropertySupplier');
module.exports.common.PropertyOffice = require('./common/PropertyOffice');
module.exports.common.DescriptionType = require('./common/DescriptionType');
module.exports.common.PropertySecurityFeature = require('./common/PropertySecurityFeature');
module.exports.common.PropertyDocument = require('./common/PropertyDocument');
module.exports.common.PropertyRoom = require('./common/PropertyRoom');
module.exports.common.PropertyTarget = require('./common/PropertyTarget');
module.exports.common.RoomType = require('./common/RoomType');
module.exports.common.Grouping = require('./common/Grouping');
module.exports.common.GroupingValue = require('./common/GroupingValue');
module.exports.common.PropertyGroupingValue = require('./common/PropertyGroupingValue');
module.exports.common.PropertyBrochure = require('./common/PropertyBrochure');
module.exports.common.PropertyMarketingBrand = require('./common/PropertyMarketingBrand');
module.exports.common.PropertyBookingBrand = require('./common/PropertyBookingBrand');
module.exports.common.PropertyOwnerPaymentTerm = require('./common/PropertyOwnerPaymentTerm');
module.exports.common.PropertyCommission = require('./common/PropertyCommission');

// Booking Related Objects
module.exports.common.Booking = require('./common/Booking');
module.exports.common.BookingCustomer = require('./common/BookingCustomer');
module.exports.common.BookingEnquiry = require('./common/BookingEnquiry');
module.exports.common.BookingExtra = require('./common/BookingExtra');
module.exports.common.BookingDocument = require('./common/BookingDocument');
module.exports.common.BookingGuest = require('./common/BookingGuest');
module.exports.common.BookingNote = require('./common/BookingNote');
module.exports.common.Bookings = require('./common/Bookings');
module.exports.common.GuestAgeRange = require('./common/GuestAgeRange');
module.exports.common.GuestType = require('./common/GuestType');

// Brand Related Objects
module.exports.common.BookingBrand = require('./common/BookingBrand');
module.exports.common.MarketingBrand = require('./common/MarketingBrand');
module.exports.common.BrandingGroup = require('./common/BrandingGroup');
module.exports.common.Branding = require('./common/Branding');

// Brochure Related Objects
module.exports.common.Brochure = require('./common/Brochure');
module.exports.common.BrochureRequest = require('./common/BrochureRequest');

// Managed Services Related Objects
module.exports.common.ManagedActivity = require('./common/ManagedActivity');
module.exports.common.ManagedService = require('./common/ManagedService');

// Note Related Objects
module.exports.common.Note = require('./common/Note');
module.exports.common.NoteText = require('./common/NoteText');
module.exports.common.NoteType = require('./common/NoteType');
module.exports.common.NoteActor = require('./common/NoteActor');

// Search
module.exports.common.Search = require('./common/Search');

// Pricing
module.exports.common.Currency = require('./common/Currency');
module.exports.common.Extra = require('./common/Extra');
module.exports.common.ExtraBranding = require('./common/ExtraBranding');
module.exports.common.ExtraBrandingConfiguration = require('./common/ExtraBrandingConfiguration');
module.exports.common.ExtraBrandingPricing = require('./common/ExtraBrandingPricing');
module.exports.common.ExtraBrandingPricingRangeElement = require('./common/ExtraBrandingPricingRangeElement');
module.exports.common.ExtraBrandingPricingRangeElementPriceType = require('./common/ExtraBrandingPricingRangeElementPriceType');
module.exports.common.PricingMethod = require('./common/PricingMethod');
module.exports.common.PricingPeriod = require('./common/PricingPeriod');
module.exports.common.PriceType = require('./common/PriceType');
module.exports.common.PriceTypeBranding = require('./common/PriceTypeBranding');
module.exports.common.SalesChannel = require('./common/SalesChannel');
module.exports.common.VatBand = require('./common/VatBand');
module.exports.common.VatRate = require('./common/VatRate');

module.exports.common.SpecialOffer = require('./common/SpecialOffer');
module.exports.common.BookingPeriod = require('./common/BookingPeriod');
module.exports.common.HolidayPeriod = require('./common/HolidayPeriod');
module.exports.common.Promotion = require('./common/Promotion');
module.exports.common.PropertyBrochure = require('./common/PropertyBrochure');
module.exports.common.SpecialOfferBranding = require('./common/SpecialOfferBranding');
module.exports.common.SpecialOfferPropertyBranding = require('./common/SpecialOfferPropertyBranding');
module.exports.common.SpecialOfferSalesChannel = require('./common/SpecialOfferSalesChannel');
module.exports.common.SpecialOfferWebsiteSection = require('./common/SpecialOfferWebsiteSection');
module.exports.common.WebsiteSection = require('./common/WebsiteSection');

// Property Pricing
module.exports.common.PropertyBrandingPrice = require('./common/PropertyBrandingPrice');

// ChangeDayRules
module.exports.common.ChangeDayTemplate = require('./common/ChangeDayTemplate');
module.exports.common.ChangeDayTemplateDay = require('./common/ChangeDayTemplateDay');
module.exports.common.ChangeDayTemplateRule = require('./common/ChangeDayTemplateRule');

// Bookings
module.exports.common.DepositAmount = require('./common/DepositAmount');
module.exports.common.DepositAmountType = require('./common/DepositAmountType');

module.exports.StaticCollection = require('./common/StaticCollection');
module.exports.Collection = require('./common/Collection');
module.exports.MultiCollection = require('./common/MultiCollection');
module.exports.GroupingCollection = require('./common/GroupingCollection');
