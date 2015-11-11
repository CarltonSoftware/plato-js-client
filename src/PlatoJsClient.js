//var client = require('./common/platoJsClient').getInstance('http://private-anon-d9986b1e4-plato.apiary-mock.com/v2');
var client = require('./common/platoJsClient').getInstance('http://docker.carltonsoftware.co.uk:49157/app_dev.php/v2');
var Unit = require('./common/Unit');
var Attribute = require('./common/Attribute');
var Collection = require('./common/Collection');
var Vatband = require('./common/Vatband');
var Customer = require('./common/Customer');
var Customers = require('./common/Customers');
var CustomerContact = require('./common/CustomerContact');
var ContactMethodType = require('./common/ContactMethodType');

/* var c = new ContactMethodType(1);
c.get().then(function(cmt) {
  console.log(cmt);
}, function(err) {
  console.log(err);
}); */

var c = new Collection({ path: 'contentmethodtype', object: ContactMethodType });
c.fetch().then(function(res) {
    res.collection.forEach(function(e) {
      console.log(e);
    //    console.log(e.options.collection);
    });
});

/*
var u = new Unit(1);
u.get().then(function(unit) {
    console.log(unit);
}, function(err) { 
   console.log(err.message); 
});
*/
/*var a = new Vatband(3);
a.get().then(function(vatband) {
    a.vatband = "Reduced";
    a.update().then(function(attribute) {
        console.log("2",attribute);
    }, function(err) {
        console.log("1",err); 
    });
}, function(err) {
   console.log("2",err.message); 
});

var b = new Vatband(3);
console.log("b",b); */


/* var a = new Vatband(3);
a.vatband = 'Reduced';
a.update().then(function(attribute) {
  console.log(attribute);
},function(err) {
   console.log("2",err.message); 
});  */
/*
var c = new CustomerContact(8,7);
c.get().then(function(attribute) {
  console.log(1,attribute);
  c.value = 123123123;
  c.update().then(function(attribute) {
      console.log("2",attribute);
      var c = new CustomerContact(8,7);
      c.get().then(function(attribute) {
        console.log(3,attribute);
      }, function(err) {});
  }, function(err) {
      console.log("1",err); 
  });
},function(err) {
   console.log("2",err.message); 
});
*/
//u.get().then(function(res) {
//    console.log(res);
//}, function(err) {
//    console.log(err);
//});
//

/* var Attributes = new Collection({ path: 'attribute', object: Attribute });
Attributes.fetch().then(function(res) {
    res.collection.forEach(function(e) {
      console.log(e);
    //    console.log(e.options.collection);
    });
});
*/

/*
var v = new Vatband(3);
v.get().then(function(vb) {
    console.log(vb.toArray());
}, function(err) {
   console.log(err.message); 
});
*/
/*
var c = new Customer(27);
c.get().then(function(cust) {
    console.log(cust);
}, function(err) {
   console.log(err.message); 
});

var c = new Customers();
c.get().then(function(cust) {
    console.log(cust);
}, function(err) {
   console.log(err.message); 
});
*/
/*
var customers = new Collection({ path: 'customer', object: Customer });
customers.fetch().then(function(res) {
    res.collection.forEach(function(e) {
      console.log(e);
    //    console.log(e.options.collection);
    });
}); */