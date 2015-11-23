var client = require('./common/platoJsClient').getInstance('http://docker.carltonsoftware.co.uk:49158/app_dev.php/v2');
var platoJsClient = require('./index');
var Encoding = platoJsClient.common.Encoding;
var Collection = platoJsClient.collection;
var coll = new Collection({path: 'encoding', object: Encoding });

//coll.fetch().then(function(col) {
//    col.forEach(function(ele) {
//        if (ele.encoding === 'Test') {
//            ele.delete();
//        }
//    });
//});
//
//var enc = new platoJsClient.common.Encoding();
//enc.encoding = 'Test';
//
//enc.create().then(function(res) {
//    console.log(res);
//});
