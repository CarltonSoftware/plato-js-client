var StaticCollection = require('./StaticCollection');
var pathNotSpecifiedError = require('./../error/pathNotSpecified');

function Collection(options) {
  this.page = 1;
  this.limit = 10;
  this.category = null;
  this.searchterm = null;

  StaticCollection.apply(this, arguments);
}

Collection.prototype = new StaticCollection();

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
}

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
}

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
}

/**
 * Returns a promise of the fetched resource
 *
 * @returns {Collection.prototype@call;promiseResult}
 */
Collection.prototype.fetch = function() {
  if (typeof this.options.path === 'undefined') {
    throw new pathNotSpecifiedError('No path specified for entity');
  }

  var params = {
    page: this.page || 1,
    limit: this.limit || 10
  };

  return this.okPromiseResult(this.options.path, { page: this.page, limit: this.limit, category: this.category, searchterm: this.searchterm });
};

module.exports = Collection;
