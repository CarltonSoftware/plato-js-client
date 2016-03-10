var _ = require('underscore');

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
          } else if (typeof req === 'object' && req.hasOwnProperty('path')) {
            req.path = '/' + req.path.replace(new RegExp('^/+'), '');
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

          //if (typeof req.data === 'object') {
          //  req.data = this.param(req.data);
          //}

          var client = createClient();

          return client(req);
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
                'Authorization': 'Bearer Y2ViNDM2NTc0NTMwYjljYWMwYzExMzIxZGE0ZjdlYmE3MjgwNmMxMzRlNzVhOTcyMGU1MjE0M2I2Njc0ZjcxZQ'
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
         * Upload method
         *
         * @param {Object} req  Request object
         *
         * @returns {Response}
         */
        this.upload = function(req) {
          req.headers = {
            "Content-Type": "multipart/form-data"
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

        /**
         * Type chec function
         *
         * @param {object} obj
         *
         * @return string
         */
        this.type = function(obj) {
          if (obj == null) {
            return obj + "";
          }
          return typeof obj;
        };

        /**
         * Function checker
         *
         * @param {object} obj
         *
         * @return string
         */
        this.isFunction = function(obj) {
          return this.type(obj) === "function";
        };

        /**
         * Recurse though objects
         *
         * @param {prefix} prefix
         * @param {object} obj
         * @param {function} add
         *
         * @return void
         */
        this.buildParams = function(prefix, obj, add) {
          var name,
            key,
            value,
            rbracket = /\[\]$/;

          if(Array.isArray(obj)) {
            for(var key in obj) {
              value = obj[key]
              if(rbracket.test(prefix)) {
                add(prefix, value);
              } else {
                this.buildParams(prefix + "[" + (typeof v === "object"? i: "") + "]", value, add );
              }
            }
          } else if(this.type(obj) === 'object') {
            for(name in obj) {
              this.buildParams(prefix + "[" + name + "]", obj[name], add);
            }
          } else {
            add(prefix, obj);
          }
        };

        /**
         * Build a url string
         *
         * @param {object} obj
         *
         * @return {string}
         */
        this.param = function(obj) {
          var prefix,
            key,
            value,
            serialized = [],
            add = function(key, value) {
              value = this.isFunction(value)? value() : (value == null ? "" : value );
              serialized[serialized.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
            }.bind(this);

          if(Array.isArray(obj)) {
            for(key in obj) {
              value = obj[key];
              add(key, value);
            }
          } else {
            for(prefix in obj) {
              this.buildParams(prefix, obj[prefix], add);
            }
          }

          // /%20/g = r20
          return serialized.join('&').replace(/%20/g, '+');
        };
    }

    return {
        init: function () {
            if (!INSTANCE) {
                INSTANCE = platoJsClient.apply(null, arguments);
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
