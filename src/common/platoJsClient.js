var statusError = require('../error/statusError');
var lzstring = require('lz-string');

if (typeof localStorage === 'undefined') {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('/tmp/scratch'); // eslint-disable-line no-global-assign
}
if (typeof window === 'undefined') {
  window = {}; // eslint-disable-line no-global-assign
}

var platoJsClient = (function () {

    // Instance stores a reference to the Singleton
    var INSTANCE,
      STORAGESCHEMA = 'plato-js-client',
      TOKENNAME = STORAGESCHEMA + ':token';

    var BuildDate = new Date('2002-02-20 20:02:20');
    localStorage.buildDate = BuildDate;
    /**
     * PlatoApi generic javascipt client
     *
     * @param {object} options
     */
    function platoJsClient(options) {
        if (!(this instanceof platoJsClient)) {
          return new platoJsClient(options);
        }

        var rest = require('rest'),
          pathPrefix = require('rest/interceptor/pathPrefix'),
          mime = require('rest/interceptor/mime'),
          defaultRequest = require('rest/interceptor/defaultRequest'),
          oAuth = require('rest/interceptor/oAuth'),
          params = require('rest/interceptor/params'),
          host = '/',
          oAuthWithoutHost = false,
          prefix = '',
          oAuthRedirectUrl,
          authPath = '/oauth/v2/auth',
          clientId = '',
          token,
          windowStrategy = redirect;

        /**
         * Get the domain
         *
         * @return {String}
         */
        this.getDomain = function() {
          return host;
        };

        /**
         * Get the instance token
         *
         * @return {String}
         */
        this.getToken = function() {
          return this.token;
        };

        /**
         * Set the instance token
         *
         * @param {String} t
         *
         * @return {String}
         */
        this.setToken = function(t) {
          this.token = t;
          return this;
        };

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
         * Used to set the api instance
         *
         * @param {object} options
         *
         * @return {platoJsClient}
         */
        this.setInstance = function(options) {

          if (!options) {
            options = {};
          }

          oAuthWithoutHost = (!options.oAuthWithoutHost) ? oAuthWithoutHost : options.oAuthWithoutHost;
          host = (!options.apiRoot) ? host : options.apiRoot;
          prefix = (!options.apiPrefix) ? prefix : options.apiPrefix;
          oAuthRedirectUrl = (!options.oAuthRedirectUrl) ? oAuthRedirectUrl : options.oAuthRedirectUrl;
          authPath = (!options.authPath) ? authPath : options.authPath;
          clientId = (options.clientId != null) ? options.clientId : '';
          windowStrategy = (!options.windowStrategy) ? windowStrategy : options.windowStrategy;
          if (options.token) {
            token = options.token;
          } else if (localStorage) {
            token = localStorage.getItem(TOKENNAME);
          }

          this.token = token;

          return this;
        };

        /**
         * Authenticate using username and password
         *
         * Returns a promise to a token.
         * The client stores the token internally ready for use as well
         *
         * @return {Promise}
         */
        this._authenticate = function(username, password, clientSecret, grant_type) {
          var paramsData = {
              'grant_type': grant_type || 'password',
              'username': username,
              'password': password,
              'client_id': clientId,
              'client_secret': clientSecret
          };

          var client = rest.wrap(
            mime
          ).wrap(
            pathPrefix,
            { prefix: host }
          ).wrap(
            defaultRequest
          ).wrap(params);

          return client({ path: '/oauth/v2/token', params: paramsData });
        };

        /**
         * Authenticate using username and password
         *
         * Returns a promise to a token.
         * The client stores the token internally ready for use as well
         *
         * @return {Promise}
         */
        this.handleAuthResponse = function(response) {
          if (response.entity.error_description) {
              throw Error('Auth failure: ' + response.entity.error_description);
          }
          if (!response.entity.access_token) {
              throw Error('Auth failure: No token returned');
          }
          this.token = response.entity.access_token;
          return response.entity.access_token;
        };

        /**
         * Authenticate using username and password
         *
         * Returns a promise to a token.
         * The client stores the token internally ready for use as well
         *
         * @return {Promise}
         */
        this.authenticate = function(username, password, clientSecret) {
          return this._authenticate(username, password, clientSecret).then(function(response) {
            return this.handleAuthResponse(response);
          }.bind(this));
        };

        /**
         * Unset the oAuth token to logout
         */
        this.oAuthLogout = function() {
          this.token = null;
          if (localStorage) {
            localStorage.removeItem(TOKENNAME);
            var removals = [];
            for(var i = 0; i < localStorage.length; i++) {
              if (localStorage.key(i).startsWith('/')) {
                removals.push(localStorage.key(i));
              }
            }
            removals.forEach(function(remove) {
              localStorage.removeItem(remove);
            });
          }

          var ifrm = document.createElement("IFRAME");
          ifrm.setAttribute("src", host + '/oauth/v2/auth_logout');
          ifrm.style.width = 1 + "px";
          ifrm.style.height = 1 + "px";
          document.body.appendChild(ifrm);
        };

        /**
         * oAuth call back.  Sets the token which is sent back from
         * the oAuth server
         *
         * @param {String} url
         */
        this.oAuthCallback = function(hash) {
          var params, queryString, regex, m;

          queryString = hash.indexOf('#') === 0 ? hash.substring(1) : hash;
          params = {};
          regex = /([^&=]+)=([^&]*)/g;

          m = regex.exec(queryString);
          do {
            params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
            m = regex.exec(queryString);
          } while (m);

          this.token = params.access_token;

          if (localStorage) {
            localStorage.setItem(TOKENNAME, this.token);
          }
        };

        /**
         * Redirect function.  Handles the oAuth redirect
         *
         * @param {String} url
         */
        function redirect(url) {
          if (typeof sessionStorage !== 'undefined') {
            sessionStorage.setItem('tabs2:previousPath', window.location.pathname);
          }
          if (typeof window !== 'undefined') {
            window.location = url;
          }
          localStorage.removeItem(TOKENNAME);
        }

        /**
         * Returns the request object read for use
         *
         * @param {Object} req  Request object
         * @param {string} verb HTTP Verb
         *
         * @returns {Object}
         */
        this.request = function(req, verb) {
          req = validateRequest(req);

          if (!req.hasOwnProperty('method')) {
            req.method = verb;
          }

          var client = this.createClient();

          return client(req);
        };

        /**
         * Create a client instance
         *
         * @returns {Object}
         */
        this.createClient = function() {

          var newAuthPath = host + authPath;

          if(oAuthWithoutHost) {
            newAuthPath = authPath;
          }

          return rest.wrap(mime)
            .wrap(pathPrefix, { prefix: host + prefix })
            .wrap(defaultRequest)
            .wrap(params)
            .wrap(oAuth, {
                clientId: clientId,
                authorizationUrlBase: newAuthPath,
                windowStrategy: windowStrategy,
                token: this.token ? 'Bearer ' + this.token : false,
                redirectUrl: oAuthRedirectUrl
            });
        };

        this.getBasicEndpoint = function(path) {
          var client = this.createClient();
          var req = {
            path: path,
            method: 'get'
          };
          var result = client(req);
          return new Promise(function(resolve, reject) {
            result.then(function(res) {
              if (res.status.code === 200) {
                try {
                  localStorage[path] = lzstring.compress(JSON.stringify({entity: res.entity, cachedTime: Date.now(), buildDate: localStorage.buildDate}));
                } catch (e) {
                }
                resolve(res);
              } else {
                reject(new statusError(res));
              }
            }, reject);
          });
        };

        /**
         * Fetch a Basic endpoint from the cache or pass on
         *
         * @return {Promise}
         */
        this.getBasicEndpointCacheable = function(path, cacheTime, forceRefresh) {
          if (!cacheTime) {cacheTime = 3600;}
          var verbose = localStorage.cachelog;
          if (verbose) {console.log('basic endpoint cacheable - '+path);}
          if (cacheTime>0 && !forceRefresh && localStorage[path]) {
            var cacheEntry = JSON.parse(lzstring.decompress(localStorage[path]));
            if (verbose) {
              console.log('Cached at '+ new Date(cacheEntry.cachedTime));
              console.log('Expires at '+ new Date(cacheEntry.cachedTime + (cacheTime*1000)));
              console.log('Time now '+ new Date());
              console.log('Cached build date '+ cacheEntry.buildDate);
              console.log('Built at '+ localStorage.buildDate);
            }
            if (cacheEntry && (cacheEntry.cachedTime + (cacheTime*1000)) > Date.now() &&
                 cacheEntry.buildDate === localStorage.buildDate) {
              if (verbose) {console.log('cacheHit');}
              var promise = new Promise(function(resolve) {
                              resolve(cacheEntry);
                            });
            } else {
              localStorage[path] = '';
              promise = this.getBasicEndpoint(path);
            }
          } else {
            promise = this.getBasicEndpoint(path);
          }

          return promise;
        };

        /**
         * Find out who is using this token
         *
         * @return {Promise}
         */
        this.whoAmi = function() {
          return this.getBasicEndpoint('/whoami');
        };

        /**
         * Find out who is using this token
         *
         * @return {Promise}
         */
        this.whoAmiCacheable = function(cacheTime, forceRefresh) {
          if (!cacheTime) {cacheTime = 3600;}
          return this.getBasicEndpointCacheable('/whoami', cacheTime, forceRefresh);
        };

        /**
         * Get the root endpoint
         *
         * @return {Promise}
         */
        this.getRoot = function() {
          return this.getBasicEndpoint('/');
        };

        /**
         * Get the root endpoint
         *
         * @return {Promise}
         */
        this.getRootCacheable = function(cacheTime, forceRefresh) {
          if (!cacheTime) {cacheTime = 3600;}
          return this.getBasicEndpointCacheable('/', cacheTime, forceRefresh);
        };

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
          return this.request(req, 'GET');
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
          return this.request(req, 'POST');
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
          return this.request(req, 'POST');
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
          return this.request(req, 'PUT');
        };

        /**
         * Delete method
         *
         * @param {Object} req Request object
         *
         * @returns {Response}
         */
        this.delete = function(req) {
          return this.request(req, 'DELETE');
        };

        /**
         * Options method
         *
         * @param {Object} req Request object
         *
         * @returns {Response}
         */
        this.options = function(req) {
          return this.request(req, 'OPTIONS');
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

          if (Array.isArray(obj)) {
            for (key in obj) {
              value = obj[key];
              if (rbracket.test(prefix)) {
                add(prefix, value);
              } else {
                this.buildParams(prefix + "[" + (typeof v === "object"? i: "") + "]", value, add ); // eslint-disable-line no-undef
              }
            }
          } else if (this.type(obj) === 'object') {
            for (name in obj) {
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
      },
      newInstance: function () {
        var c = new platoJsClient();
        c.setInstance(arguments);

        return c;
      }
    };
}());


/**
 * Expose  module
 */

module.exports = platoJsClient;
