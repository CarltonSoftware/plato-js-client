var client = require('./common/platoJsClient').getInstance('http://localhost/plato/web/app_dev.php/v2');
var Unit = require('./common/Unit');
var Attribute = require('./common/Attribute');
var Collection = require('./common/Collection');

var u = new Unit(1);
u.get().then(function(unit) {
    console.log(unit);
}, function(err) {
   console.log(err.message); 
});

var a = new Attribute(1);
a.get().then(function(attribute) {
    console.log(attribute);
}, function(err) {
   console.log(err.message); 
});
//u.get().then(function(res) {
//    console.log(res);
//}, function(err) {
//    console.log(err);
//});

//var Units = new Collection('unit');
//Units.fetch().then(function(res) {
//    console.log(res.entity);
//});


