var utils = require('../src/utils.js');
var client = require('../').client.getInstance();
var data = [{ 
    entity: 'PropertyAttributeString',
    id: 2115651,
    url: 'https://toccl.api.tabs-software.co.uk/v2/property/15213/attribute',
    action: 'Insert',
    olddata: '',
    newdata: { 
      id: 2115651,
      attribute: { 
        id: 721,
        code: 'ATTR721'
      },
      value: 'XXXXXX' 
    } 
  }, {
    entity: 'PropertyAvailability',
    id: 14421,
    url: 'toccl.api.tabs-software.co.uk/v2/property/14421',
    action: 'Insert',
    time: '2018-03-13 10:42:32',
    olddata: '',
    newdata: { 
      id: 14421,
      type: 'property',
      tabspropref: '40911',
      name: 'Yr Hen Dy Coets'
    }
  }, { 
    entity: 'PropertyBranding',
    id: 22913,
    url: 'https://toccl.api.tabs-software.co.uk/v2/property/13844/branding/22913',
    action: 'Update',
    time: '2017-11-24 12:48:33',
    olddata: { 
      id: 22913,
      branding: '/v2/branding/22',
      primarybranding: true,
      brandinggroup: '/v2/brandinggroup/15',
      bookingbrand: '/v2/property/13844/bookingbrand/15880',
      primarybookingbrand: true,
      marketingbrand: '/v2/property/13844/marketingbrand/22841',
      status: { 
        id: 2,
        name: 'New',
        allowbooking: false,
        allowoverride: false,
        priority: 8,
        allowbalance: true 
      },
      statusreason: { id: 2, reason: 'New' },
      promote: false,
      allowbookingonwebuntil: '2019-01-04',
      showpricingonwebuntil: '2019-01-04'
    },
    newdata: {
      id: 22913,
      branding: '/v2/branding/22',
      primarybranding: true,
      brandinggroup: '/v2/brandinggroup/15',
      bookingbrand: '/v2/property/13844/bookingbrand/15880',
      primarybookingbrand: true,
      marketingbrand: '/v2/property/13844/marketingbrand/22841',
      status: { 
        id: 1,
        name: 'Live',
        allowbooking: true,
        allowoverride: false,
        priority: 10,
        allowbalance: true
      },
      statusreason: { id: 1, reason: 'Live' },
      promote: false,
      allowbookingonwebuntil: '2019-01-04',
      showpricingonwebuntil: '2019-01-04'
    }
  }
];

describe('Utilities test', function() {
  describe('Client', function() {
    it('utils.Client.connect is a function', function() {
      console.assert(typeof utils.Client.connect === 'function');
    });
    it('utils.Client.client returns a client instance object', function() {
      console.assert(utils.Client.client().getDomain() === client.getDomain());
    });
  });
  describe('SNS', function() {
    for (var i in data) {
      it('utils.SNS.Message.getUrl should return a url', function() {
        console.assert(utils.SNS.Message.getUrl(data[i]) === data[i].url);
      });
      it('utils.SNS.Message.getRoot should return a url', function() {
        console.assert(utils.SNS.Message.getRoot(data[i]) === 'https://toccl.api.tabs-software.co.uk');
      });
      it('utils.SNS.Message.getProperty should return a property', function() {
        console.assert(utils.SNS.Message.getPropertyFromMessage(data[i]) instanceof new require('../src/common/Property.js'));
      });
      it('utils.SNS.Message.getProperty.id should be a number', function() {
        console.assert(typeof utils.SNS.Message.getPropertyFromMessage(data[i]).id === 'number');
      });
      it('utils.SNS.Message.getProperty.id number should be greater than zero', function() {
        console.assert(utils.SNS.Message.getPropertyFromMessage(data[i]).id > 0);
      });
    }
  });
});