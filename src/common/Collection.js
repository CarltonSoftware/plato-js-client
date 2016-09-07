var StaticCollection = require('./StaticCollection');
var pathNotSpecifiedError = require('./../error/pathNotSpecified');
var Promise = require('es6-promise').Promise;

function Collection(options) {
  this.page = 1;
  this.limit = 10;
  this.orderBy = null;
  this.category = null;
  this.searchterm = null;

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
    category: this.category,
    filter: this.filters,
  };
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
Collection.prototype.fetch = function(dependencies) {
  var promise = this.okPromiseResult(
    this.getPath(),
    this.toArray()
  );

  if (dependencies && dependencies.length) {
    return new Promise(function(resolve, reject) {
      promise.then(function(collection) {
        Promise.all(dependencies.map(function(dependency) {
          var fetched = {};

          return Promise.all(collection.map(function(item) {
            if (item[dependency]) {
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

module.exports = Collection;
