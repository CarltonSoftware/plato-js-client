var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var Collection = require('./Collection');
var OwnerPaymentSelectionBookingBrand = require('./OwnerPaymentSelectionBookingBrand');
var OwnerPaymentSelectionProgram = require('./OwnerPaymentSelectionProgram');
var OwnerPaymentTerm = require('./OwnerPaymentTerm');
var OwnerPaymentSelectionProperty = require('./OwnerPaymentSelectionProperty');
var Joi = require('joi');
var dayjs = require('dayjs');
dayjs = 'default' in dayjs ? dayjs['default'] : dayjs;

function OwnerPaymentSelection(id) {
  this.path = 'ownerpaymentselection';
  this.createPath = 'ownerpaymentselection';
  this.id = id;
  this.bookingbrand = new EntityLink({
    entity: 'BookingBrand'
  });
  this.createdby = new EntityLink({
    entity: 'TabsUser'
  });
  this.bookingbrands = new Collection({
    object: OwnerPaymentSelectionBookingBrand,
    path: 'bookingbrand',
    parent: this
  });
  this.programs = new Collection({
    object: OwnerPaymentSelectionProgram,
    path: 'program',
    parent: this
  });
  this.properties = new Collection({
    object: OwnerPaymentSelectionProperty,
    path: 'property',
    parent: this
  });
  this.terms = new Collection({
    object: OwnerPaymentTerm,
    path: 'ownerpaymentterms',
    parent: 'this'
  })
}
OwnerPaymentSelection.prototype = new SingleEntity();

OwnerPaymentSelection.prototype.toCreateArray = function() {
  var s = {
    selectbookingson: this.selectbookingson,
    paytodate: this.paytodate,
    ownerids: this.ownerids,
    programids: this.programids,
    propertyids: this.propertyids,
    createdbytabsuserid: this.createdbytabsuser.id,
    balancepaid: this.balancepaid || false,
    accidentaldamagedepositpaid: this.accidentaldamagedepositpaid || false,
    includeproperties: this.includeproperties || true,
    includeowners: this.includeowners || true,
    ownerpaymenttermsids: this.ownerpaymenttermsids
  };

  if (this.bookingbrands.getTotal() > 0) {
    s.bookingbrandids = this.bookingbrands.map(function(b) {
      return b.bookingbrand.id;
    }).join(',');
  } else if (this.bookingbrand.id) {
    s.bookingbrandid = this.bookingbrand.id;
  }

  return s;
};

OwnerPaymentSelection.prototype.toUpdateArray = function() {
  var fields = {};
  if (this.paidbytabsuser) {
    fields.paidbytabsuserid = this.paidbytabsuser.id;
  }
  if (this.owner) {
    fields.ownerid = this.owner.id;
  }
  if (this.cancelledbytabsuser) {
    fields.cancelledbytabsuserid = this.cancelledbytabsuser.id;
  }
  if (this.authorisedbytabsuser) {
    fields.authorisedbytabsuserid = this.authorisedbytabsuser.id;
    fields.authorised = this.authorised;
    fields.value = this.value;
  }

  return fields;
};

OwnerPaymentSelection.prototype.payOwner = function(owner, tabsUser) {
  return this.updatePromiseResult(
    this.path + '/' + this.id,
    { ownerid: owner.id, paidbytabsuserid: tabsUser.id }
  );
};

OwnerPaymentSelection.prototype.getLabel = function(bookingbrands) {
  var description = [];
  description.push("ID: " + this.id);

  if (bookingbrands && bookingbrands.collection.length > 1) {
    if (bookingbrands.collection.length > 1) {
      description.push('Booking Brands: ');
    } else {
      description.push('Booking Brand: ');
    }

    if (this.bookingbrands.collection.length > 3) {
      description.push(
        this.bookingbrands.collection.length + '.'
      );
    } else {
      description.push(
        this.bookingbrands.map(function(b) {
          return bookingbrands.getEntityById(b.bookingbrand.id).name;
        }).join(', ') + '.'
      );
    }
  }

  if (this.properties && this.properties.collection.length) {
    description.push('Properties: ');
    description.push(
      this.properties.map(function(p) {
        return p.property.id;
      }).join(', ')
    );
  }

  if (this.paytodate) {
    description.push('Pay to date: ');
    description.push(dayjs(this.paytodate).format('D MMM YYYY'));
  }

  if (this.owners && this.owners.length > 0) {
    var forOwners = this.owners.map(function(el) {
      return 'id: ' + el.owner.split('/')[3];
    });

    if (forOwners.length) {
      description.push('For owners - ' + forOwners.join(', '));
    }
  }

  if (this.cancelled) {
    description.push('- Cancelled');
  } else if (this.paid) {
    description.push('- Paid');
  }

  return description.join(' ');
};

OwnerPaymentSelection.prototype.toString = function() {
  return [this.bookingbrand.id, this.paytodate].join(' ');
};

OwnerPaymentSelection.validCreateSchema = Joi.object().keys({
  bookingbrand: Joi.object().optional().label('booking brand'),
  bookingbrands: Joi.any().optional().label('booking brands'),
  selectbookingson: Joi.string().valid('fromdate', 'todate').label('select bookings on'),
  paytodate: Joi.date().required().label('pay to date'),
  ownerids: Joi.string().allow("").optional().label('owner ids'),
  programids: Joi.string().allow("").optional().label('Program ids'),
  propertyids: Joi.string().allow("").optional().label('property ids'),
  balancepaid: Joi.boolean().required().label('Bookings with balance paid'),
  accidentaldamagedepositpaid: Joi.boolean().required().label('Bookings with ADD waiver paid'),
  includeowners: Joi.boolean().required().label('Include or Exclude owner selection?'),
  includeproperties: Joi.boolean().required().label('Include or Exclude property selection?'),
  createdbytabsuser: Joi.object().optional().label('created by'),
  ownerpaymenttermsids: Joi.string().allow("").optional().label('Owner Payment Terms'),
});

OwnerPaymentSelection.validUpdateSchema = Joi.object().keys({
  paidbytabsuser: Joi.object().optional().label('Paid by'),
  createdbytabsuser: Joi.object().optional().label('created by'),
  cancelledbytabsuser: Joi.object().optional().label('cancelled by'),
  authorisedbytabsuser: Joi.object().optional().label('authorised by'),
  authorised: Joi.boolean().optional().label('authorised'),
  value: Joi.number().optional().label('value')
});

module.exports = OwnerPaymentSelection;
