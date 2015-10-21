var client = require('./common/platoJsClient').getInstance('http://localhost/plato/web/app_dev.php/v2');
var Unit = require('./common/Unit');
var Collection = require('./common/Collection');

var u = new Unit(5);

u.get().then(function(res) {
    console.log(res.entity);
}, function(err) {
    console.log(err);
});

var Units = new Collection('unit');
Units.fetch().then(function(res) {
    console.log(res.entity);
});


