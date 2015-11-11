//var client = require('./common/platoJsClient').getInstance('http://private-anon-d9986b1e4-plato.apiary-mock.com/v2');
var client = require('./common/platoJsClient').getInstance('http://docker.carltonsoftware.co.uk:49157/app_dev.php/v2');
var Unit = require('./common/Unit');
var Attribute = require('./common/Attribute');
var Collection = require('./common/Collection');
var Vatband = require('./common/Vatband');
var Customer = require('./common/Customer');
var Country = require('./common/Country');
var CustomerContact = require('./common/CustomerContact');
var ContactMethodType = require('./common/ContactMethodType');
var Branding = require('./common/Branding');

/*
var u = new Unit(1);
u.get().then(function(unit) {
    console.log(unit);
}, function(err) {
   console.log(err.message);
});
*/
//var a = new Vatband(3);
//a.get().then(function(attribute) {
//    console.log(attribute);
//    attribute.update().then(function(attribute) {
//        console.log(attribute);
//    }, function(err) {
//        console.log(err);
//    });
//
//}, function(err) {
//   console.log(err.message);
//});

//u.get().then(function(res) {
//    console.log(res);
//}, function(err) {
//    console.log(err);
//});
//

/*var Attributes = new Collection({ path: 'attribute', object: Attribute });
Attributes.fetch().then(function(res) {
    res.collection.forEach(function(e) {
      console.log(e);
    //    console.log(e.options.collection);
    });
});*/

/*
var v = new Vatband(3);
v.get().then(function(vb) {
    console.log(vb.toArray());
}, function(err) {
   console.log(err.message);
});
*/

/*var path = 'branding';
var entities = new Collection({ path: path, object: Branding });
entities.fetch().then(function(res) {
  res.collection.forEach(function(e) {
    console.log(e);
  });
});*/

/*
var customers = new Collection({ path: 'customer', object: Customer });
customers.fetch().then(function(res) {
    res.collection.forEach(function(e) {
      console.log(e);
    //    console.log(e.options.collection);
    });
}); */
