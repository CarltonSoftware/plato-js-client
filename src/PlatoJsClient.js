var client = require('./common/platoJsClient').getInstance('http://docker.carltonsoftware.co.uk:49158/app_dev.php/v2');
var platoJsClient = require('./');
var PriceTypeBranding = require('./common/PriceTypeBranding');
var Collection = require('./common/Collection');
var Property = require('./common/Property');

var p = new Property(1);
p.get().then(function(p) {

  // PropertyBranding
  p.brandings.fetch().then(function(b) {
    b.forEach(function(br) {

      // PropertyBrandingPrice
      br.prices.fetch().then(function(pr) {
        pr.forEach(function(price) {

          // PropertyBrani
          console.log(price.getUpdatePath());
          console.log(price.pricetypebranding.getUpdatePath());
        });
      });
    });
  }).catch(function(err) {
    console.log(err);
    console.log(this);
  });
}).catch(function(err) {
  console.log(err);
});
