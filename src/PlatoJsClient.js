
var platoJsClient = require('plato-js-client');
var client = platoJsClient.client.getInstance().setInstance({
	apiRoot: 'http://docker.carltonsoftware.co.uk:49158/app_dev.php/v2',
	oAuthRedirectUrl: 'http://localhost/plato-js-client/test.html'
});
if (window.location && window.location.hash) {
	console.log(client);
	client.oAuthCallback(window.location.hash);
}

var platoJsClient = require('./');

var u  = new platoJsClient.common.Unit(1);

u.get().then(function(unit) {
	console.log(unit);
});