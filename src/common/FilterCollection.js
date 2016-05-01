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

  this.getFilterString = function() {
    var str = [];
    for (var key in filters) {
      str.push(key + '=' + filters[key]);
    }

    return str.join(':');
  }
};

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
    filterGroups.forEach(function(ele) {
      if (ele.id === currentGroup) {
        ele.addFilter(key, val);
      }
    });

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
        ftrs += grp.getFilterString() + '&filter[]=';
      });

      return '&filter[]=' + ftrs.substring(0, ftrs.length - 10);
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
    return this.getPath() + '?page=' + this.page + '&limit=' + this.limit + this.getFilterString()
  };

  // Apply other Collection properties to this object
  Collection.apply(this, arguments);
};

FilterCollection.prototype = new Collection();

/**
 * Returns a promise of the fetched resource
 *
 * @returns {Collection.prototype@call;promiseResult}
 */
FilterCollection.prototype.fetch = function() {
  return this.okPromiseResult(
    this.getFilterPath(),
    {}
  );
};

module.exports = FilterCollection;
