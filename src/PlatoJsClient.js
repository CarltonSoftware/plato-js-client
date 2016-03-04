var client = require('./common/platoJsClient').getInstance('http://docker.carltonsoftware.co.uk:49158/app_dev.php/v2');
var platoJsClient = require('./');
var PriceTypeBranding = require('./common/PriceTypeBranding');
var Collection = require('./common/Collection');

var pt = new platoJsClient.common.PriceType(1);
pt.get().then(function(nPt) {
  var ptb = new Collection({
    object: PriceTypeBranding,
    parent: nPt
  });

  ptb.fetch().then(function(nPtb) {
    nPtb.forEach(function(ele) {
      console.log(ele.getUpdatePath());
    });
  }).catch(function(err) {
    console.log(err);
  });
}).catch(function(err) {
  console.log(err);
});

/*

var c = new platoJsClient.common.Customer(6);
c.get().then(function(c) {
  c.bankaccounts.fetch().then(function(b) {
    console.log(b);
  });
});

var propertyAttributes = new platoJsClient.Collection({
  path: 'attribute',
  object: platoJsClient.common.PropertyAttribute,
  parents: [
    new platoJsClient.common.Property(1)
  ]
});

propertyAttributes.fetch().then(function(propertyAttributes) {
  console.log(propertyAttributes);
});

var File = platoJsClient.common.File;

// file = new File(1); // a PDF
var file = new File(2); // a text file
// file = new File(3); // a photograph
// file = new File(4); // a photograph
// file = new File(5); // a photograph

file.get().then(function(res) {
  console.dir(res);
});


file = new File(5); // a photograph

file.get().then(function(res) {
  console.dir(res);
});

*/
