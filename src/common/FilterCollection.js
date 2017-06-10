var Collection = require('./Collection');
var StaticCollection = require('./StaticCollection');

/**
 * Filter Group object.  Stores all of the 'and' filters
 * for this group
 *
 * @param {number} id
 */
function FilterGroup(id) {
  this.id = id || 0;
  var filters = {};

  this.getFilters = function() {
    return filters;
  };

  this.addFilter = function(key, val) {
    filters[key] = val;
  };

  this.removeFilter = function(key) {
    delete filters[key];
  };

  this.hasFilter = function(key) {
    return (typeof filters[key] !== 'undefined');
  };

  this.getFilterString = function() {
    var str = [];
    for (var key in filters) {
      str.push(key + '=' + filters[key]);
    }

    return str.join(':');
  };
}

/**
 * Filter collection object.  Extends the Collection object
 * also adding additional functions to allow creation
 * of filter strings compatible with the tabs2 api.
 *
 */
function FilterCollection(options) {
  // New properties
  var currentGroup = 0;
  var filterGroups = new StaticCollection();
  filterGroups.push(new FilterGroup(currentGroup));

  /**
   * Set the current filter group
   *
   * @param {number} id
   *
   * @return {FilterCollection}
   */
  this.setFilterGroup = function(id) {
    currentGroup = id;

    return this;
  };

  /**
   * Add a filter key to the current group
   *
   * @param {String} key
   * @param {String} val
   *
   * @return {FilterCollection}
   */
  this.addFilter = function(key, val) {
    if (!filterGroups.first()) {
      this.createGroup(0);
    }

    filterGroups.first().addFilter(key, val);

    return this;
  };

  /**
   * Add all of the filters to the collection
   *
   * @param {object} filters
   *
   * @return {FilterCollection}
   */
  this.addFilters = function(filters) {
    // Check if groups
    if (Array.isArray(filters)) {
      filterGroups = new StaticCollection();
      for (var i = 0; i < filters.length; i++) {
        this.createGroup(i);
        this.addObjectFilters(i, filters[i]);
      }
    } else {
      this.addObjectFilters(currentGroup, filters);
    }
  };

  /**
   * Add filters specified in an object
   *
   * @param {integer} group
   * @param {object}  filters
   *
   * @return {FilterCollection}
   */
  this.addObjectFilters = function(group, filters) {
    for (var key in filters) {
      filterGroups.collection[group].addFilter(key, filters[key]);
    }

    return this;
  };

  /**
   * Remove all of the filters
   *
   * @return {FilterCollection}
   */
  this.removeAllFilters = function() {
    currentGroup = 0;
    filterGroups = new StaticCollection();
    filterGroups.push(new FilterGroup(currentGroup));

    return this;
  };

  /**
   * Remove a current groups filters
   *
   * @return {FilterCollection}
   */
  this.removeGroupFilters = function() {
    filterGroups.deleteElementById(currentGroup);

    return this;
  };


  /**
   * Remove a filter key from the current group
   *
   * @param {String} key
   *
   * @return {FilterCollection}
   */
  this.removeFilter = function(key) {
    filterGroups.forEach(function(ele) {
      if (ele.id === currentGroup) {
        ele.removeFilter(key);
      }
    });

    return this;
  };

  /**
   * Return all of the current filters
   *
   * @return {StaticCollection}
   */
  this.getFilterGroups = function() {
    return filterGroups;
  };

  /**
   * Return the filters as an object
   *
   * @return {object}
   */
  this.getFilterObject = function() {
    return filterGroups.map(function(f) {
      return f.getFilters();
    });
  };

  /**
   * Get the filter string required for the filter parameter.
   *
   * @return {String}
   */
  this.getFilterString = function() {
    if (filterGroups.collection.length === 1
      && Object.keys(filterGroups.first().getFilters()).length > 0
    ) {
      return '&filter=' + filterGroups.first().getFilterString();
    } else if (filterGroups.collection.length > 1) {
      var ftrs = '';

      filterGroups.forEach(function(grp) {
        ftrs += '&filter[]=' + grp.getFilterString();
      });

      if (ftrs.length > 0 && ftrs.substr(-10) == '&filter[]=') {
        ftrs = ftrs.substr(0, ftrs.length - 10);
      }

      return ftrs;
    } else {
      return '';
    }
  };

  /**
   * Create a new filter group
   *
   * @param {number} id
   */
  this.createGroup = function(id) {
    var grp = new FilterGroup(id || filterGroups.collection.length + 1);
    filterGroups.push(grp);
    this.setFilterGroup(grp.id);

    return this;
  };

  /**
   * Get the filter path.
   *
   * Currently using this method as the client would need an interceptor
   * to create the array notation for the grouped filters.
   *
   * This way seemed simpler at the moment.
   *
   * @return {String}
   */
  this.getFilterPath = function() {
    var path = this.getPath() + '?page=' + this.page + '&limit=' + this.limit + this.getFilterString();
    if (this.orderBy) {
      path += '&orderBy=' + this.orderBy;
    }
    if (this.searchId) {
      path += '&searchId=' + this.searchId;
    }
    if (this.fields) {
      path += '&fields=' + this.fields;
    }
    return path;
  };

  // Apply other Collection properties to this object
  Collection.apply(this, arguments);
}

FilterCollection.prototype = new Collection();

/**
 * Returns a promise of the fetched resource
 *
 * @param {Array} dependencies - keys of subentities, if any, to get for each item in the collection, e.g. 'property'
 *
 * @returns {Collection.prototype@call;promiseResult}
 */
FilterCollection.prototype.fetch = function(dependencies) {
  var path = this.getFilterPath();

  var promise = this.okPromiseResult(
    path,
    {}
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

/**
 * Returns a promise of the cachable fetched resource
 *
 * @param {Array} dependencies - keys of subentities, if any, to get for each item in the collection, e.g. 'property'
 *
 * @returns {Collection.prototype@call;promiseResult}
 */
FilterCollection.prototype.fetchCacheable = function(cacheTime, forceRefresh) {
  if (!cacheTime) {cacheTime = 3600;}
  var verbose = localStorage['cachelog'];
  var path = this.getFilterPath();
  this.cacheKey = path;
  if (verbose) {console.log('filtercollection cacheable - '+path);}
  if (cacheTime>0 && !forceRefresh && localStorage[path]) {
    cacheEntry = JSON.parse(localStorage[path]);
    if (verbose) {
      console.log('Cached at '+ new Date(cacheEntry.cachedTime));
      console.log('Expires at '+ new Date((cacheEntry.cachedTime + (cacheTime*1000))));
      console.log('Time now '+ new Date());
      console.log('Cached build date '+ cacheEntry.buildDate);
      console.log('Built at '+ localStorage.buildDate);
    }
    if ((cacheEntry.cachedTime + (cacheTime*1000)) > Date.now() &&
         cacheEntry.buildDate === localStorage.buildDate) {
      if (verbose) {console.log('cacheHit');}
      promise = this.cachedOkPromiseResult(cacheEntry.entity);
    } else {
      promise = this.fetch();
    }
  } else {
    promise = this.fetch();
  }

  return promise;
};
module.exports = FilterCollection;
