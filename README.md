# Tabs2 Javascript Client

## Getting started

Contact tabs support for a client identifier (5 letter key code), client id, secret key, username and password.  You will need these for

Install the repo using `npm i github:carltonsoftware/plato-js-client`

## Using the client

### Creating a new connection

You will need to provide authentication credentials to use the tabs2 api.  The following snippet is telling the client to use the correct api url, prefix and the client id which tabs support will give you.

```
var platoJsClient = require('plato-js-client');

platoJsClient.client.getInstance().setInstance({
  apiRoot: 'https://#YOURCLIENTIDENTIFIER#.api.tabs-software.co.uk',
  apiPrefix: '/v2',
  clientId: '#YOURCLIENTID#'
});

```
You can connect to tabs two ways, either via a POST request which the `_authenticate` method will do:

```
platoJsClient.client.getInstance()._authenticate(
  #YOURUSRNAME#,
  #YOURPASSWORD#,
  #YOURSECRET#
);

```
Or via an oauth redirect:
```

client.getInstance().setInstance({
  apiRoot: 'https://#YOURCLIENTIDENTIFIER#.api.tabs-software.co.uk',
  apiPrefix: '/v2',
  clientId: '#YOURCLIENTID#'
  oAuthRedirectUrl: window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + '/oauth'
});
```
If you want to use a ouath redirect, please let tabs know so we can configure your client settings with the correct redirect url.

### Using the client
Most entities have the following methods `.get()`, `.create()`, `.update()`, `.delete()`.  You can use these to perform operations on the api.

For example, the following piece of code will get the property with id of 1 and output its name to the console:

```
var p = new platoJsClient.common.Property(1);
p.get().then(function(property) {
  console.log(property.name);
})
```
