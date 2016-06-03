var platoJsClient = require('./');
var client = platoJsClient.client.getInstance().setInstance({
	apiRoot: 'http://docker.carltonsoftware.co.uk:49158/app_dev.php/v2',
	defaultToken: true
});

var collection = new platoJsClient.FilterCollection({
	path: 'property',
	object: platoJsClient.common.Property
});

collection.addFilter('name', '~Angler').createGroup().addFilter('sleeps', '10');

collection.fetch().then(function(c) {
  c.forEach(function(p) {
    console.log(p.sleeps);
  });
});