var assert = require('assert');
var platoJsClient = require('../src/common/platoJsClient.js');

describe('platoJsClient test', function() {
    var host = 'http://httpbin.org';
    var client = platoJsClient.getInstance().setHost(host);

    it('Creating a new client and test the passed in host variable', function() {
        var client2 = platoJsClient.getInstance();
        assert.equal(client, client2);
        assert.equal(client.getHost(), host);
    });

    it('Using the get function to request data', function(done) {
        client.get({ path: '/get' }).then(function(res) {
            assert.equal(res.entity.url, host + '/get');
            done();
        });
    });

    it('Using the post function post request data', function(done) {
        client.post({ path: '/post', entity: { foo: 'bar' } }).then(function(res) {
            assert.equal(res.entity.form.foo, 'bar');
            done();
        });
    });

    it('Using the put function put request data', function(done) {
        client.put({ path: '/put', entity: { foo: 'bar' } }).then(function(res) {
            assert.equal(res.entity.form.foo, 'bar');
            done();
        });
    });
});
