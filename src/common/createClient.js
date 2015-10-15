var client = require('./platoJsClient.js').getInstance('http://httpbin.org');

client.get('/get').then(function(res) {
    console.log(res.entity.url);
});

client.setHost('http://ip.carltonsoftware.co.uk');

client.get('/').then(function(res) {
    console.log(res.entity);
});