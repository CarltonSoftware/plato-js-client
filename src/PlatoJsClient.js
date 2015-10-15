var client = require('./common/platoJsClient').getInstance('http://private-anon-e71b8397b-plato.apiary-mock.com/v2');
var Unit = require('./common/Unit');
var Collection = require('./common/Collection');

var u = new Unit(1);

u.get().then(function(res) {
    console.log(res.entity);
});

var Units = new Collection('unit');
Units.fetch().then(function(res) {
    console.log(res.entity);
});


