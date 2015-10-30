var platoJsClient = (function () {

    // Instance stores a reference to the Singleton
    var INSTANCE;

    /**
     * PlatoApi generic javascipt client
     *
     * @param {String} url
     */
    function platoJsClient(url) {
        if (!(this instanceof platoJsClient)) {
            return new platoJsClient(url);
        }

        var rest = require('rest'),
            pathPrefix = require('rest/interceptor/pathPrefix'),
            mime = require('rest/interceptor/mime'),
            defaultRequest = require('rest/interceptor/defaultRequest');

        var host = (!url) ? "http://localhost" : url;

        /**
         * Function use to validate the request object passed to each verb
         * function (get, post etc)
         *
         * @param {Object|String} req
         *
         * @return {Object|String}
         */
        function validateRequest(req) {
            // If req is not defined, return the root path
            if (!req || typeof req === 'undefined') {
                req = '/';
            }

            // Convert string to request object
            if (typeof req === 'string') {
                req = { path: req };
            }
            
            // Test to see if its not an object
            if (typeof req !== 'object') {
                return { path: '/' };
            }
            
            return req;
        }
        
        /**
         * Returns the request object read for use
         * 
         * @param {Object} req  Request object
         * @param {string} verb HTTP Verb
         * 
         * @returns {Object}
         */
        function request(req, verb) {
            req = validateRequest(req);
            
            if (!req.hasOwnProperty('method')) {
                req.method = verb;
            }
            
            var client = createClient();
        
            var c = client(req);
            
            return c;
        }
        
        /**
         * Create a client instance
         * 
         * @returns {Object}
         */
        function createClient() {
            return rest.wrap(mime)
                .wrap(pathPrefix, { prefix: host })
                .wrap(defaultRequest, {
                    headers: {
                        //'Authorization': 'Bearer Y2ViNDM2NTc0NTMwYjljYWMwYzExMzIxZGE0ZjdlYmE3MjgwNmMxMzRlNzVhOTcyMGU1MjE0M2I2Njc0ZjcxZQ'
                    }
                });
        }

        /**
         * Return the Client
         * 
         * @returns {Client}
         */
        this.getClient = function() {
            return rest;
        };

        /**
         * Return the host of the client
         * 
         * @returns {String}
         */
        this.getHost = function() {
            return host;
        };

        /**
         * Set the host of the client
         * 
         * @param {String} url
         * 
         * @returns {Object}
         */
        this.setHost = function(url) {
            host = url;
            return this;
        };

        /**
         * Get method
         * 
         * @param {Object} req Request object
         * 
         * @returns {Response}
         */
        this.get = function(req) {
            return request(req, 'GET');
        };

        /**
         * Post method
         * 
         * @param {Object} req  Request object
         * 
         * @returns {Response}
         */
        this.post = function(req) {
            req.headers = {
                "Content-Type": "application/x-www-form-urlencoded"
            };
            return request(req, 'POST');
        };
        
        /**
         * Put method
         * 
         * @param {Object} req Request object
         * 
         * @returns {Response}
         */
        this.put = function(req) {
            req.headers = {
                "Content-Type": "application/x-www-form-urlencoded"
            };
            return request(req, 'PUT');
        };
        
        /**
         * Delete method
         * 
         * @param {Object} req Request object
         * 
         * @returns {Response}
         */
        this.delete = function(req) {
            return request(req, 'DELETE');
        };
        
        /**
         * Options method
         * 
         * @param {Object} req Request object
         * 
         * @returns {Response}
         */
        this.options = function(req) {
            return request(req, 'OPTIONS');
        };
    }

    return {
        init: function () {
            if (!INSTANCE) {
                return INSTANCE = platoJsClient.apply(null, arguments);
            }
            return INSTANCE;
        },
        getInstance: function () {
            if (!INSTANCE) {
                return this.init.apply(this, arguments);
            }
            return INSTANCE;
        }
    };
}());


/**
 * Expose  module
 */

module.exports = platoJsClient;
