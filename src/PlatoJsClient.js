var client = require('./common/platoJsClient').getInstance('http://docker.carltonsoftware.co.uk:49158/app_dev.php/v2');
var platoJsClient = require('./index');
var Encoding = platoJsClient.common.Encoding;
var Collection = platoJsClient.collection;
var coll = new Collection({path: 'encoding', object: Encoding });
var customers = new platoJsClient.common.customers(1, 10);

/*customers.fetch().then(function(col) {
  console.log(col.page);
  col.previousPage().fetch().then(function(col2) {
    console.log(col2.page);
  });
  col.nextPage().fetch().then(function(col2) {
    console.log(col2.page);
  });
});*/

//var enc = new platoJsClient.common.Encoding();
//enc.encoding = 'Test';
//
//enc.create().then(function(res) {
//    console.log(res);
//});
