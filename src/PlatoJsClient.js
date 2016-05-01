var platoJsClient = require('./');
var client = platoJsClient.client.getInstance().setInstance({
	apiRoot: 'http://docker.carltonsoftware.co.uk:49158/app_dev.php/v2',
	defaultToken: true
});

var collection = new platoJsClient.FilterCollection({
	path: 'property',
	object: platoJsClient.common.Property
});

collection.addFilter('name', '~Angler');
console.log(collection.getFilterString());

collection.fetch().then(function(c) {
	console.log(c.total);
});