/**var client = require('./common/platoJsClient').getInstance('http://localhost/plato/web/app_dev.php/v2');
var platoJsClient = require('./');
var PriceTypeBranding = require('./common/PriceTypeBranding');
var Collection = require('./common/Collection');
var Property = require('./common/Property');
var Customer = require('./common/Customer');
var BankAccount = require('./common/BankAccount');
var Address = require('./common/Address');
var Country = require('./common/Country');

var c = new Customer(6);
var b = new BankAccount();
b.accountnumber = 1234567;
b.sortcode = 123455;

var a = new Address();
a.line1 = 'Test';
a.town = 'Test';

b.address = a;


c.get().then(function(customer) {


  b.parent = customer;
  console.log(b.toArray());
  b.create().then(function(bNew) {
    console.log(bNew);
  }).catch(function(err) {
    console.log(err)
  });
}).catch(function(err) {
  console.log(err)
});
*/
