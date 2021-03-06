var StaticCollection = require('./StaticCollection');
var pathNotSpecifiedError = require('./../error/pathNotSpecified');
var lzstring = require('lz-string');

function Collection() {
  this.page = 1;
  this.limit = 10;
  this.orderBy = null;
  this.category = null;

  /**
   * Get the path from the provided options
   *
   * @return {String}
   */
  this.getPath = function() {
    var path = '';
    // Add in path if not set and parent applied
    if (typeof this.options.parent === 'object'
      && typeof this.options.path === 'string'
    ) {
      path = this.options.parent.getUpdatePath() + '/' + this.options.path;
    } else if (typeof this.options.path === 'undefined') {
      throw new pathNotSpecifiedError('No path specified for entity');
    }

    var parents = this.options.parents || [];
    if (path.length === 0) {
      for (var i = 0; i < parents.length; i++) {
        path += parents[i].path + '/' + parents[i].id + '/';
      }

      path += this.options.path;
    }

    if (!path.startsWith('/')) {
        path = '/' + path;
    }
    return path;
  };

  StaticCollection.apply(this, arguments);
}

Collection.prototype = new StaticCollection();

/**
 * toArray method used in the okPromiseResult callback
 *
 * @return {object}
 */
Collection.prototype.toArray = function() {
  return {
    page: this.page,
    limit: this.limit,
    orderBy: this.orderBy,
    view: this.view,
    filter: this.filters
  };
};

/**
 * @return {object}
 */
Collection.prototype.getFilterObject = function() {
  return this.filters;
}

/**
 * @return {string}
 */
Collection.prototype.getHash = function() {
  var a = this.toArray();
  a.fetchedTime = this.fetchedTime;
  if (window && window.btoa) {
    return btoa(JSON.stringify(a));
  } else if (Buffer && Buffer.from) {
    return Buffer.from(JSON.stringify(a), 'binary').toString('base64');
  }

  return '';
};

/**
 * Get the full path.
 *
 * @return {String}
 */
Collection.prototype.getFullPath = function() {
  return this.getPath() + '?page=' + this.page + '&limit=' + this.limit;
};

/**
 * Get the maximum pages supported by this collection
 *
 * @return {number}
 */
Collection.prototype.getMaxPages = function() {
  if (this.total) {
    return Math.ceil(this.total / this.limit);
  }

  return this.page;
};

/**
 * Get the next page of the collection if the total is set.  If not set, the
 * function will return the first page.
 *
 * @return {Collection}
 */
Collection.prototype.nextPage = function() {
  var np = this.page + 1;
  if (np > this.getMaxPages()) {
    np = 1;
  }

  this.page = np;

  return this;
};

/**
 * Get the previous page of the collection if the total is set.  If not set or
 * is less than one, the function will return the max pages.
 *
 * @return {Collection}
 */
Collection.prototype.previousPage = function() {
  var pp = this.page - 1;
  if (pp <= 0) {
    pp = this.getMaxPages();
  }

  this.page = pp;

  return this;
};

/**
 * Returns a promise of the fetched resource
 *
 * @param {Array} dependencies - keys of subentities, if any, to get for each item in the collection, e.g. 'property'
 *
 * @returns {Collection.prototype@call;promiseResult}
 */
Collection.prototype.fetch = function(dependencies, cache) {
  var promise = this.okPromiseResult(
    this.getPath(),
    this.toArray(),
    cache
  );

  if (dependencies && dependencies.length) {
    return new Promise(function(resolve) {
      promise.then(function(collection) {
        collection.fetchedTime = new Date();
        Promise.all(dependencies.map(function(dependency) {
          var fetched = {};

          return Promise.all(collection.map(function(item) {
            if (item[dependency] && item[dependency].id) {
              if (item[dependency].id in fetched) {
                item[dependency] = fetched[item[dependency].id];
              } else {
                fetched[item[dependency].id] = item[dependency];
                return item[dependency].get();
              }
            }
          }));
        })).then(function() {
          resolve(collection);
        });
      });
    });
  }

  return promise;
};

/**
 * Returns a promise of the fetched resource
 *
 * @param {Number} cacheTime
 * @param {Boolean} forceRefresh
 *
 * @returns {Collection.prototype@call;promiseResult}
 */
Collection.prototype.fetchCacheable = function(cacheTime, forceRefresh) {
  if (typeof cacheTime === 'undefined') {
    cacheTime = 3600;
  }
  var verbose = localStorage['cachelog'];
  var path = this.getFullPath();
  this.cacheKey = path;
  if (verbose) {console.log('collection cacheable - '+path);}
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
      var promise = this.cachedOkPromiseResult(cacheEntry.entity);
    } else {
      promise = this.fetch(null, true);
    }
  } else {
    promise = this.fetch(null, (cacheTime!==0));
  }

  return promise;
};
module.exports = Collection;
