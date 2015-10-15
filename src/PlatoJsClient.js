var client = require('./common/platoJsClient').getInstance('http://localhost/plato/web/app_dev.php/v2/');
var Unit = require('./common/Unit');

var u = new Unit(1);

u.get().then(function(res) {
    console.log(res.entity);
});

//var Units = new Collection('unit');
//
//Unit.fetch().then(function(res) {
//    console.log(res.entity);
//});


