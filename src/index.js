module.exports.client = require('./common/platoJsClient');

module.exports.common = {};
module.exports.common.Encoding = require('./common/Encoding');
module.exports.common.Feature = require('./common/Feature');
module.exports.common.ApprovalType = require('./common/ApprovalType');
module.exports.common.AvailableDay = require('./common/AvailableDay');
module.exports.common.Unit = require('./common/Unit');
module.exports.common.Title = require('./common/Title');
module.exports.common.SymfonyRoute = require('./common/SymfonyRoute');
module.exports.common.Address = require('./common/Address');
module.exports.common.Attribute = require('./common/Attribute');
module.exports.common.AttributeGroup = require('./common/AttributeGroup');
module.exports.common.Category = require('./common/Category');
module.exports.common.ActorCategory = require('./common/ActorCategory');
module.exports.common.AssessmentGrade = require('./common/AssessmentGrade');
module.exports.common.AttributeOption = require('./common/AttributeOption');
module.exports.common.Contact = require('./common/Contact');
module.exports.common.DateToUse = require('./common/DateToUse');
module.exports.common.Agency = require('./common/Agency');
module.exports.common.AgencyBookingType = require('./common/AgencyBookingType');
module.exports.common.AgencyCollection = require('./common/AgencyCollection');
module.exports.common.Country = require('./common/Country');
module.exports.common.ExchangeRate = require('./common/ExchangeRate');
module.exports.common.Language = require('./common/Language');
module.exports.common.Postcode = require('./common/Postcode');
module.exports.common.CancellationAction = require('./common/CancellationAction');
module.exports.common.CancellationReason = require('./common/CancellationReason');
module.exports.common.CancellationReasonGroup = require('./common/CancellationReasonGroup');
module.exports.common.ContactEntity = require('./common/ContactEntity');
module.exports.common.ContactDocument = require('./common/ContactDocument');
module.exports.common.ContactType = require('./common/ContactType');
module.exports.common.ContactMethodType = require('./common/ContactMethodType');
module.exports.common.ContactMethodSubtype = require('./common/ContactMethodSubtype');
module.exports.common.ContactReason = require('./common/ContactReason');
module.exports.common.ContactSend = require('./common/ContactSend');
module.exports.common.CostItemCode = require('./common/CostItemCode');
module.exports.common.CreditorPaymentMethod = require('./common/CreditorPaymentMethod');
module.exports.common.Document = require('./common/Document');
module.exports.common.DocumentTag = require('./common/DocumentTag');
module.exports.common.DocumentBaseTag = require('./common/DocumentBaseTag');
module.exports.common.Image = require('./common/Image');
module.exports.common.File = require('./common/File');
module.exports.common.Mimetype = require('./common/Mimetype');
module.exports.common.SecurityFeature = require('./common/SecurityFeature');
module.exports.common.PotentialBookingType = require('./common/PotentialBookingType');
module.exports.common.Source = require('./common/Source');
module.exports.common.Status = require('./common/Status');
module.exports.common.Setting = require('./common/Setting');
module.exports.common.SettingType = require('./common/SettingType');
module.exports.common.SettingEntity = require('./common/SettingEntity');
module.exports.common.SettingValue = require('./common/SettingValue');
module.exports.common.SettingValueType = require('./common/SettingValueType');
module.exports.common.SettingValueOption = require('./common/SettingValueOption');
module.exports.common.SourceCategory = require('./common/SourceCategory');
module.exports.common.EventType = require('./common/EventType');
module.exports.common.EventLog = require('./common/EventLog');

//Owner
module.exports.common.OwnerEnquiryActionType = require('./common/OwnerEnquiryActionType');
module.exports.common.OwnerBookingType = require('./common/OwnerBookingType');
module.exports.common.OwnerPayment = require('./common/OwnerPayment');
module.exports.common.OwnerPaymentSelection = require('./common/OwnerPaymentSelection');
module.exports.common.OwnerPaymentSelectionBookingBrand = require('./common/OwnerPaymentSelectionBookingBrand');
module.exports.common.OwnerPaymentSelectionProperty = require('./common/OwnerPaymentSelectionProperty');
module.exports.common.OwnerPaymentTerm = require('./common/OwnerPaymentTerm');
module.exports.common.OwnerPaymentTermExtra = require('./common/OwnerPaymentTermExtra');
module.exports.common.OwnerPaymentType = require('./common/OwnerPaymentType');
module.exports.common.OwnerCharge = require('./common/OwnerCharge');
module.exports.common.OwnerChargeAmountType = require('./common/OwnerChargeAmountType');
module.exports.common.OwnerChargeCode = require('./common/OwnerChargeCode');
module.exports.common.OwnerChargeImport = require('./common/OwnerChargeImport');
module.exports.common.OwnerStatement = require('./common/OwnerStatement');
module.exports.common.PaymentItem = require('./common/PaymentItem');
module.exports.common.SagePayPayment = require('./common/SagePayPayment');
module.exports.common.PersonalisedBrochure = require('./common/PersonalisedBrochure');
module.exports.common.OwnerEnquiryInactiveReason = require('./common/OwnerEnquiryInactiveReason');
module.exports.common.OwnerDocument = require('./common/OwnerDocument');

// Account Related Objects
module.exports.common.Account = require('./common/Account');
module.exports.common.AccountingDateDefinition = require('./common/AccountingDateDefinition');
module.exports.common.AccountingPeriod = require('./common/AccountingPeriod');
module.exports.common.AccountValueType = require('./common/AccountValueType');
module.exports.common.BrandSource = require('./common/BrandSource');
module.exports.common.DoubleEntryDefinition = require('./common/DoubleEntryDefinition');
module.exports.common.Entry = require('./common/Entry');
module.exports.common.EntryDefinition = require('./common/EntryDefinition');
module.exports.common.EntryDefinitionCostItemCode = require('./common/EntryDefinitionCostItemCode');
module.exports.common.EntryDefinitionExtraBranding = require('./common/EntryDefinitionExtraBranding');
module.exports.common.EntryDefinitionOwnerChargeCode = require('./common/EntryDefinitionOwnerChargeCode');
module.exports.common.EntryDefinitionPaymentMethod = require('./common/EntryDefinitionPaymentMethod');
module.exports.common.TabsEvent = require('./common/TabsEvent');
module.exports.common.TabsEventTransactionDefinition = require('./common/TabsEventTransactionDefinition');
module.exports.common.Transaction = require('./common/Transaction');
module.exports.common.TransactionDefinition = require('./common/TransactionDefinition');
module.exports.common.TransactionSource = require('./common/TransactionSource');

// Actor Related Objects
module.exports.common.Actor = require('./common/Actor');
module.exports.common.ActorInstance = require('./common/ActorInstance');
module.exports.common.Actors = require('./common/Actors');
module.exports.common.ActorContactDetailAddress = require('./common/ActorContactDetailAddress');
module.exports.common.ActorContactDetailOther = require('./common/ActorContactDetailOther');
module.exports.common.ActorContactDetailPhone = require('./common/ActorContactDetailPhone');
module.exports.common.ActorContactDetailPermission = require('./common/ActorContactDetailPermission');
module.exports.common.ContactPreference = require('./common/ContactPreference');
module.exports.common.ActorManagedActivity = require('./common/ActorManagedActivity');
module.exports.common.ActorLocation = require('./common/ActorLocation');
module.exports.common.ActorNote = require('./common/ActorNote');
module.exports.common.ActorDevice = require('./common/ActorDevice');
module.exports.common.ActorDocument = require('./common/ActorDocument');
module.exports.common.BankAccount = require('./common/BankAccount');
module.exports.common.FlagType = require('./common/FlagType');
module.exports.common.Flag = require('./common/Flag');
module.exports.common.PotentialDuplicate = require('./common/PotentialDuplicate');
module.exports.common.ActorVatRegistrationPeriod = require('./common/ActorVatRegistrationPeriod');
module.exports.common.Voucher = require('./common/Voucher');
module.exports.common.VoucherRestriction = require('./common/VoucherRestriction');
module.exports.common.VoucherHolidayPeriod = require('./common/VoucherHolidayPeriod');
module.exports.common.VoucherBookingPeriod = require('./common/VoucherBookingPeriod');
module.exports.common.VoucherSource = require('./common/VoucherSource');
module.exports.common.BookingVoucher = require('./common/BookingVoucher');

// Customer Releated Objects
module.exports.common.Customer = require('./common/Customer');
module.exports.common.CustomerDocument = require('./common/CustomerDocument');
module.exports.common.CustomerMarketingBrand = require('./common/CustomerMarketingBrand');
module.exports.common.CustomerSource = require('./common/CustomerSource');
module.exports.common.CustomerEmailList = require('./common/CustomerEmailList');

// Other Actors
module.exports.common.TabsUser = require('./common/TabsUser');
module.exports.common.TabsUserGroup = require('./common/TabsUserGroup');
module.exports.common.TabsUserGroupMember = require('./common/TabsUserGroupMember');
module.exports.common.Owner = require('./common/Owner');
module.exports.common.OwnerEnquiryAction = require('./common/OwnerEnquiryAction');
module.exports.common.Office = require('./common/Office');
module.exports.common.Supplier = require('./common/Supplier');
module.exports.common.SupplierDayPlan = require('./common/SupplierDayPlan');
module.exports.common.SupplierHoliday = require('./common/SupplierHoliday');
module.exports.common.SupplierServiceCharge = require('./common/SupplierServiceCharge');
module.exports.common.SupplierServiceEvent = require('./common/SupplierServiceEvent');
module.exports.common.SupplierInvoice = require('./common/SupplierInvoice');
module.exports.common.SupplierInvoiceItem = require('./common/SupplierInvoiceItem');
module.exports.common.SupplierInvoiceItemPayment = require('./common/SupplierInvoiceItemPayment');
module.exports.common.SupplierPayment = require('./common/SupplierPayment');
module.exports.common.SupplierWorkingDay = require('./common/SupplierWorkingDay');
module.exports.common.SupplierWorkType = require('./common/SupplierWorkType');
module.exports.common.SupplierDocument = require('./common/SupplierDocument');
module.exports.common.Affiliate = require('./common/Affiliate');
module.exports.common.AffiliateApiKey = require('./common/AffiliateApiKey');
module.exports.common.AffiliateBlockPeriod = require('./common/AffiliateBlockPeriod');
module.exports.common.AffiliatePropertyBlockPeriod = require('./common/AffiliatePropertyBlockPeriod');

// Property Related Objects
module.exports.common.Properties = require('./common/Properties');
module.exports.common.Property = require('./common/Property');
module.exports.common.PropertyAttribute = require('./common/PropertyAttribute');
module.exports.common.PropertyAvailability = require('./common/PropertyAvailability');
module.exports.common.PropertyBranding = require('./common/PropertyBranding');
module.exports.common.PropertyBrandingPricing = require('./common/PropertyBrandingPricing');
module.exports.common.PropertyBrandingPricingYear = require('./common/PropertyBrandingPricingYear');
module.exports.common.PropertyBrandingSpecialoffer = require('./common/PropertyBrandingSpecialoffer');
module.exports.common.PropertyBrandingStatus = require('./common/PropertyBrandingStatus');
module.exports.common.PropertyBrandingYearPriceband = require('./common/PropertyBrandingYearPriceband');
module.exports.common.PropertyComment = require('./common/PropertyComment');
module.exports.common.PropertyEvent = require('./common/PropertyEvent');
module.exports.common.PropertyEventCategory = require('./common/PropertyEventCategory');
module.exports.common.PropertyOwner = require('./common/PropertyOwner');
module.exports.common.PropertyNote = require('./common/PropertyNote');
module.exports.common.PropertyNoteConfirmation = require('./common/PropertyNoteConfirmation');
module.exports.common.PropertyDescription = require('./common/PropertyDescription');
module.exports.common.PropertySecurityDeposit = require('./common/PropertySecurityDeposit');
module.exports.common.PropertySupplier = require('./common/PropertySupplier');
module.exports.common.PropertySupplierDateRange = require('./common/PropertySupplierDateRange');
module.exports.common.PropertySupplierService = require('./common/PropertySupplierService');
module.exports.common.PropertyOffice = require('./common/PropertyOffice');
module.exports.common.DescriptionType = require('./common/DescriptionType');
module.exports.common.PropertySecurityFeature = require('./common/PropertySecurityFeature');
module.exports.common.PropertyDocument = require('./common/PropertyDocument');
module.exports.common.PropertyRoom = require('./common/PropertyRoom');
module.exports.common.PropertyRoomType = require('./common/PropertyRoomType');
module.exports.common.PropertyTabsUser = require('./common/PropertyTabsUser');
module.exports.common.PropertyTarget = require('./common/PropertyTarget');
module.exports.common.PartySizePricing = require('./common/PartySizePricing');
module.exports.common.PartySizePrice = require('./common/PartySizePrice');
module.exports.common.PartySizePriceType = require('./common/PartySizePriceType');
module.exports.common.PricingImportExport = require('./common/PricingImportExport');
module.exports.common.RoomType = require('./common/RoomType');
module.exports.common.BedTypeRoomType = require('./common/BedTypeRoomType');
module.exports.common.BedType = require('./common/BedType');
module.exports.common.Grouping = require('./common/Grouping');
module.exports.common.GroupingValue = require('./common/GroupingValue');
module.exports.common.PropertyGroupingValue = require('./common/PropertyGroupingValue');
module.exports.common.PropertyBrochure = require('./common/PropertyBrochure');
module.exports.common.PropertyMarketingBrand = require('./common/PropertyMarketingBrand');
module.exports.common.PropertyBookingBrand = require('./common/PropertyBookingBrand');
module.exports.common.PropertyOwnerPaymentTerm = require('./common/PropertyOwnerPaymentTerm');
module.exports.common.PropertyCommission = require('./common/PropertyCommission');
module.exports.common.Inspection = require('./common/Inspection');
module.exports.common.PropertyBookingBrandInstruction = require('./common/PropertyBookingBrandInstruction');
module.exports.common.InspectionType = require('./common/InspectionType');
module.exports.common.InstructionType = require('./common/InstructionType');
module.exports.common.StatusReason = require('./common/StatusReason');
module.exports.common.PropertyQuestionCategory = require('./common/PropertyQuestionCategory');
module.exports.common.PropertyQuestion = require('./common/PropertyQuestion');
module.exports.common.PropertyAnswer = require('./common/PropertyAnswer');
module.exports.common.PropertyAnswerDocument = require('./common/PropertyAnswerDocument');
module.exports.common.PropertyTabsUserVisit = require('./common/PropertyTabsUserVisit');
module.exports.common.AnswerOptionGroup = require('./common/AnswerOptionGroup');
module.exports.common.AnswerOption = require('./common/AnswerOption');
module.exports.common.PromotePeriod = require('./common/PromotePeriod');
module.exports.common.SpecialOfferDiscountExtra = require('./common/SpecialOfferDiscountExtra');
module.exports.common.SpecialOfferDiscountedExtra = require('./common/SpecialOfferDiscountedExtra');
module.exports.common.PropertyApproval = require('./common/PropertyApproval');
module.exports.common.PropertyLink = require('./common/PropertyLink');
module.exports.common.PropertyLinkHolidayPeriod = require('./common/PropertyLinkHolidayPeriod');
module.exports.common.ParkingPermit = require('./common/ParkingPermit');
module.exports.common.ParkingPermitHolidayPeriod = require('./common/ParkingPermitHolidayPeriod');

// Key Related Objects
module.exports.common.Keyy = require('./common/Keyy');
module.exports.common.KeyTag = require('./common/KeyTag');
module.exports.common.KeySet = require('./common/KeySet');
module.exports.common.KeyUserType = require('./common/KeyUserType');
module.exports.common.KeyCheckReason = require('./common/KeyCheckReason');
module.exports.common.KeyCheck = require('./common/KeyCheck');
module.exports.common.KeysBookingBrand = require('./common/KeysBookingBrand');

module.exports.common.AmountLimitType = require('./common/AmountLimitType');
module.exports.common.PmsChecklist = require('./common/PmsChecklist');
module.exports.common.WorkOrder = require('./common/WorkOrder');
module.exports.common.WorkOrderActor = require('./common/WorkOrderActor');
module.exports.common.WorkOrderAssociation = require('./common/WorkOrderAssociation');
module.exports.common.WorkOrderExpense = require('./common/WorkOrderExpense');
module.exports.common.WorkOrderExpenseTemplate = require('./common/WorkOrderExpenseTemplate');
module.exports.common.WorkOrderOwner = require('./common/WorkOrderOwner');
module.exports.common.WorkOrderOwnerCharge = require('./common/WorkOrderOwnerCharge');
module.exports.common.WorkOrderOwnerChargeTemplate = require('./common/WorkOrderOwnerChargeTemplate');
module.exports.common.WorkOrderPmsChecklist = require('./common/WorkOrderPmsChecklist');
module.exports.common.WorkOrderStatusHistory = require('./common/WorkOrderStatusHistory');
module.exports.common.WorkOrderStatusHistorySubStatus = require('./common/WorkOrderStatusHistorySubStatus');
module.exports.common.WorkOrderSubStatus = require('./common/WorkOrderSubStatus');
module.exports.common.WorkOrderSubStatusNext = require('./common/WorkOrderSubStatusNext');
module.exports.common.WorkOrderSubStatusTemplate = require('./common/WorkOrderSubStatusTemplate');
module.exports.common.WorkOrderSubStatusTemplateAssignee = require('./common/WorkOrderSubStatusTemplateAssignee');
module.exports.common.WorkOrderSupplier = require('./common/WorkOrderSupplier');
module.exports.common.WorkOrderNote = require('./common/WorkOrderNote');
module.exports.common.WorkOrderDocument = require('./common/WorkOrderDocument');
module.exports.common.WorkOrderInvoice = require('./common/WorkOrderInvoice');
module.exports.common.WorkType = require('./common/WorkType');

// Booking Related Objects
module.exports.common.BookingProperty = require('./common/BookingProperty');
module.exports.common.BookingCustomer = require('./common/BookingCustomer');
module.exports.common.BookingEnquiry = require('./common/BookingEnquiry');
module.exports.common.BookingEnquiryExtra = require('./common/BookingEnquiryExtra');
module.exports.common.BookingExtra = require('./common/BookingExtra');
module.exports.common.BookingEvent = require('./common/BookingEvent');
module.exports.common.BookingDocument = require('./common/BookingDocument');
module.exports.common.BookingGuest = require('./common/BookingGuest');
module.exports.common.BookingNote = require('./common/BookingNote');
module.exports.common.BookingSecurityDeposit = require('./common/BookingSecurityDeposit');
module.exports.common.BookingSecurityDepositWithhold = require('./common/BookingSecurityDepositWithhold');
module.exports.common.BookingSecurityDepositHold = require('./common/BookingSecurityDepositHold');
module.exports.common.BookingSupplier = require('./common/BookingSupplier');
module.exports.common.BookingService = require('./common/BookingService');
module.exports.common.BookingRoom = require('./common/BookingRoom');
module.exports.common.BookingServiceCharge = require('./common/BookingServiceCharge');
module.exports.common.Bookings = require('./common/Bookings');
module.exports.common.GuestAgeRange = require('./common/GuestAgeRange');
module.exports.common.GuestType = require('./common/GuestType');
module.exports.common.Booking = require('./common/Booking');
module.exports.common.BookingCancellationAction = require('./common/BookingCancellationAction');
module.exports.common.ServiceContract = require('./common/ServiceContract');
module.exports.common.ServiceContractType = require('./common/ServiceContractType');
module.exports.common.BookingReason = require('./common/BookingReason');
module.exports.common.BookingApproval = require('./common/BookingApproval');

// Complaints
module.exports.common.ComplaintReason = require('./common/ComplaintReason');
module.exports.common.ComplaintSource = require('./common/ComplaintSource');
module.exports.common.ComplaintStatus = require('./common/ComplaintStatus');
module.exports.common.Complaint = require('./common/Complaint');
module.exports.common.ComplaintAssignment = require('./common/ComplaintAssignment');
module.exports.common.ComplaintBookingExtra = require('./common/ComplaintBookingExtra');
module.exports.common.ComplaintDiscountExtra = require('./common/ComplaintDiscountExtra');

// Brand Related Objects
module.exports.common.BookingBrand = require('./common/BookingBrand');
module.exports.common.MarketingBrand = require('./common/MarketingBrand');
module.exports.common.MarketingBrandEmailList = require('./common/MarketingBrandEmailList');
module.exports.common.BrandingGroup = require('./common/BrandingGroup');
module.exports.common.Branding = require('./common/Branding');
module.exports.common.BrandingExtra = require('./common/BrandingExtra');
module.exports.common.BrandingLeadTimePeriod = require('./common/BrandingLeadTimePeriod');
module.exports.common.SourceMarketingBrand = require('./common/SourceMarketingBrand');
module.exports.common.VatRegistrationPeriod = require('./common/VatRegistrationPeriod');

// Brochure Related Objects
module.exports.common.Brochure = require('./common/Brochure');
module.exports.common.BrochureRequest = require('./common/BrochureRequest');

// Managed Services Related Objects
module.exports.common.ManagedActivity = require('./common/ManagedActivity');
module.exports.common.ManagedService = require('./common/ManagedService');
module.exports.common.ManagedActivityService = require('./common/ManagedActivityService');
module.exports.common.PmsInvoice = require('./common/PmsInvoice');
module.exports.common.PmsInvoiceOwnerCharge = require('./common/PmsInvoiceOwnerCharge');

// Note Related Objects
module.exports.common.Note = require('./common/Note');
module.exports.common.NoteText = require('./common/NoteText');
module.exports.common.NoteType = require('./common/NoteType');
module.exports.common.NoteActor = require('./common/NoteActor');
module.exports.common.PropertyNoteCategory = require('./common/PropertyNoteCategory');

// Payment Related Objects
module.exports.common.ActorPaymentRefund = require('./common/ActorPaymentRefund');
module.exports.common.BookingPayment = require('./common/BookingPayment');
module.exports.common.BookingPaymentitem = require('./common/BookingPaymentitem');
module.exports.common.BookingRefund = require('./common/BookingRefund');
module.exports.common.CustomerPayment = require('./common/CustomerPayment');
module.exports.common.PaymentMethod = require('./common/PaymentMethod');
module.exports.common.PaymentMethodType = require('./common/PaymentMethodType');

// Search
module.exports.common.GlobalSearch = require('./common/GlobalSearch');

// History
module.exports.common.ChangeHistory = require('./common/ChangeHistory');
module.exports.common.History = require('./common/HistoryEntry');

// Pricing
module.exports.common.CopyPricing = require('./common/CopyPricing');
module.exports.common.Currency = require('./common/Currency');
module.exports.common.ExchangeRateIssue = require('./common/ExchangeRateIssue');
module.exports.common.ExchangeRateIssueRate = require('./common/ExchangeRateIssueRate');
module.exports.common.ExchangeRateIssueType = require('./common/ExchangeRateIssueType');
module.exports.common.Extra = require('./common/Extra');
module.exports.common.ExtraBranding = require('./common/ExtraBranding');
module.exports.common.ExtraBrandingConfiguration = require('./common/ExtraBrandingConfiguration');
module.exports.common.ExtraBrandingConfigurationAffiliateOverride = require('./common/ExtraBrandingConfigurationAffiliateOverride');
module.exports.common.ExtraBrandingPricing = require('./common/ExtraBrandingPricing');
module.exports.common.ExtraBrandingPricingAmountPriceType = require('./common/ExtraBrandingPricingAmountPriceType');
module.exports.common.ExtraBrandingPricingRangeElement = require('./common/ExtraBrandingPricingRangeElement');
module.exports.common.ExtraBrandingPricingRangeElementPriceType = require('./common/ExtraBrandingPricingRangeElementPriceType');
module.exports.common.ExtraGroup = require('./common/ExtraGroup');
module.exports.common.ExtraBookingReason = require('./common/ExtraBookingReason');
module.exports.common.PricingGroup = require('./common/PricingGroup');
module.exports.common.PricingGroupYear = require('./common/PricingGroupYear');
module.exports.common.PricingGroupYearPriceBand = require('./common/PricingGroupYearPriceBand');
module.exports.common.PricingMethod = require('./common/PricingMethod');
module.exports.common.PricingMethodBranding = require('./common/PricingMethodBranding');
module.exports.common.PricingPeriod = require('./common/PricingPeriod');
module.exports.common.PriceBand = require('./common/PriceBand');
module.exports.common.PriceType = require('./common/PriceType');
module.exports.common.PriceTypeBranding = require('./common/PriceTypeBranding');
module.exports.common.PriceTypeStartDay = require('./common/PriceTypeStartDay');
module.exports.common.SalesChannel = require('./common/SalesChannel');
module.exports.common.UpdatePricing = require('./common/UpdatePricing');
module.exports.common.VatBand = require('./common/VatBand');
module.exports.common.VatRate = require('./common/VatRate');

module.exports.common.SpecialOffer = require('./common/SpecialOffer');
module.exports.common.SpecialOfferBookingPeriod = require('./common/SpecialOfferBookingPeriod');
module.exports.common.SpecialOfferHolidayPeriod = require('./common/SpecialOfferHolidayPeriod');
module.exports.common.Promotion = require('./common/Promotion');
module.exports.common.PropertyBrochure = require('./common/PropertyBrochure');
module.exports.common.SpecialOfferBranding = require('./common/SpecialOfferBranding');
module.exports.common.SpecialOfferMarketingBranding = require('./common/SpecialOfferMarketingBranding');
module.exports.common.SpecialOfferAttribute = require('./common/SpecialOfferAttribute');
module.exports.common.SpecialOfferPropertyBranding = require('./common/SpecialOfferPropertyBranding');
module.exports.common.SpecialOfferSalesChannel = require('./common/SpecialOfferSalesChannel');
module.exports.common.SpecialOfferWebsiteSection = require('./common/SpecialOfferWebsiteSection');
module.exports.common.WebsiteSection = require('./common/WebsiteSection');
module.exports.common.SpecialOfferLeadTimePeriod = require('./common/SpecialOfferLeadTimePeriod');
module.exports.common.SpecialOfferTemplateType = require('./common/SpecialOfferTemplateType');

module.exports.common.Role = require('./common/Role');
module.exports.common.Reason = require('./common/Reason');
module.exports.common.RoleReason = require('./common/RoleReason');
module.exports.common.Report = require('./common/Report');
module.exports.common.ReportRun = require('./common/ReportRun');
module.exports.common.ReportParameter = require('./common/ReportParameter');
module.exports.common.Bacs = require('./common/Bacs');
module.exports.common.CronTask = require('./common/CronTask');

// Property Pricing
module.exports.common.PropertyBrandingPrice = require('./common/PropertyBrandingPrice');
module.exports.common.PricePeriod = require('./common/PricePeriod');
module.exports.common.PriceOverride = require('./common/PriceOverride');
module.exports.common.ReducedOccupancyPrice = require('./common/ReducedOccupancyPrice');

// Communications
module.exports.common.ContactMethodElement = require('./common/ContactMethodElement');
module.exports.common.Template = require('./common/Template');
module.exports.common.TemplateContactMethod = require('./common/TemplateContactMethod');
module.exports.common.TemplateRoleReason = require('./common/TemplateRoleReason');
module.exports.common.TemplateContactMethodAttachment = require('./common/TemplateContactMethodAttachment');
module.exports.common.TemplateContactMethodBranding = require('./common/TemplateContactMethodBranding');
module.exports.common.TemplateContactMethodAttachmentProperty = require('./common/TemplateContactMethodAttachmentProperty');
module.exports.common.TemplateContactMethodAttachmentBranding = require('./common/TemplateContactMethodAttachmentBranding');
module.exports.common.TemplateElement = require('./common/TemplateElement');
module.exports.common.TemplateSource = require('./common/TemplateSource');
module.exports.common.TemplateTarget = require('./common/TemplateTarget');
module.exports.common.TemplateTargetSource = require('./common/TemplateTargetSource');
module.exports.common.TextItem = require('./common/TextItem');
module.exports.common.TriggerEvent = require('./common/TriggerEvent');
module.exports.common.LabelTemplate = require('./common/LabelTemplate');
module.exports.common.LabelTemplatePaperSize = require('./common/LabelTemplatePaperSize');
module.exports.common.LabelQueue = require('./common/LabelQueue');
module.exports.common.ScheduledEvent = require('./common/ScheduledEvent');
module.exports.common.ScheduledEventTemplateContactMethod = require('./common/ScheduledEventTemplateContactMethod');
module.exports.common.Job = require('./common/Job');
module.exports.common.JobItem = require('./common/JobItem');
module.exports.common.JobItemResponse = require('./common/JobItemResponse');
module.exports.common.JobType = require('./common/JobType');
module.exports.common.ContactSchedule = require('./common/ContactSchedule');
module.exports.common.ContactSchedulePeriod = require('./common/ContactSchedulePeriod');
module.exports.common.TemplateContactMethodContactSchedule = require('./common/TemplateContactMethodContactSchedule');
module.exports.common.MultiBrandTemplateBookingBrand = require('./common/MultiBrandTemplateBookingBrand');
module.exports.common.MultiBrandTemplateMarketingBrand = require('./common/MultiBrandTemplateMarketingBrand');

// ChangeDayRules
module.exports.common.ChangeDayTemplate = require('./common/ChangeDayTemplate');
module.exports.common.ChangeDayTemplateDay = require('./common/ChangeDayTemplateDay');
module.exports.common.ChangeDayTemplateRule = require('./common/ChangeDayTemplateRule');
module.exports.common.PropertyBrandingChangeDayTemplate = require('./common/PropertyBrandingChangeDayTemplate');

// Bookings
module.exports.common.DepositAmount = require('./common/DepositAmount');
module.exports.common.DepositAmountExtra = require('./common/DepositAmountExtra');
module.exports.common.DepositAmountType = require('./common/DepositAmountType');

// Tickets
module.exports.common.Ticket = require('./common/Ticket');
module.exports.common.TicketAttachment = require('./common/TicketAttachment');
module.exports.common.TicketBrand = require('./common/TicketBrand');
module.exports.common.TicketMessage = require('./common/TicketMessage');
module.exports.common.TicketNote = require('./common/TicketNote');
module.exports.common.TicketPriority = require('./common/TicketPriority');
module.exports.common.TicketStatus = require('./common/TicketStatus');
module.exports.common.TicketUser = require('./common/TicketUser');
module.exports.common.TicketTerm = require('./common/TicketTerm');
module.exports.common.TicketTermValue = require('./common/TicketTermValue');
module.exports.common.TicketTime = require('./common/TicketTime');
module.exports.common.TicketHistory = require('./common/TicketHistory');

// Users
module.exports.common.ActorSecurity = require('./common/ActorSecurity');
module.exports.common.ActorSetting = require('./common/ActorSetting');
module.exports.common.SecurityGroup = require('./common/SecurityGroup');
module.exports.common.SecurityGroupRole = require('./common/SecurityGroupRole');
module.exports.common.SecurityRole = require('./common/SecurityRole');

module.exports.StaticCollection = require('./common/StaticCollection');
module.exports.Collection = require('./common/Collection');
module.exports.MultiCollection = require('./common/MultiCollection');
module.exports.GroupingCollection = require('./common/GroupingCollection');
module.exports.FilterCollection = require('./common/FilterCollection');
module.exports.NoteFilterCollection = require('./common/NoteFilterCollection');


//Work Orders
module.exports.common.ChargingPeriod = require('./common/ChargingPeriod');
module.exports.common.CostItemCodeOwnerChargeCode = require('./common/CostItemCodeOwnerChargeCode');


//Vehicle
module.exports.common.Vehicle = require('./common/Vehicle');
module.exports.common.BookingVehicle = require('./common/BookingVehicle');


//Accidental Damage Deposit
module.exports.common.AccidentalDamageDeposit = require('./common/AccidentalDamageDeposit');

// Programs
module.exports.common.Program = require('./common/Program');
module.exports.common.ActorProgram = require('./common/ActorProgram');
module.exports.common.ZendeskTicket = require('./common/ZendeskTicket');

//ChannelManager
module.exports.common.Channel = require('./common/Channel');
module.exports.common.ChannelInformationCategory = require('./common/ChannelInformationCategory');
module.exports.common.ChannelPropertyBranding = require('./common/ChannelPropertyBranding');
module.exports.common.ChannelPropertyBrandingInformationCategory = require('./common/ChannelPropertyBrandingInformationCategory');
module.exports.common.ChannelSetting = require('./common/ChannelSetting');
module.exports.common.ChannelSettingType = require('./common/ChannelSettingType');
module.exports.common.ChannelSettingValue = require('./common/ChannelSettingValue');
module.exports.common.InformationCategory = require('./common/InformationCategory');

module.exports.error = {};
module.exports.error.statusError = require('./error/statusError');
