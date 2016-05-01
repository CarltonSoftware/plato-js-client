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
  this.filters = {};

  this.addFilter = function(key, val) {
    this.filters[key] = val;
  };

  this.removeFilter = function(key) {
    delete this.filters[key];
  };

  this.getFilterString = function() {
    var str = [];
    for (var key in this.filters) {
      str.push(key + '=' + this.filters[key]);
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
   */
  this.setFilterGroup = function(id) {
    currentGroup = id;

    return this;
  };

  this.addFilter = function(key, val) {
    filterGroups.forEach(function(ele) {
      if (ele.id === currentGroup) {
        ele.addFilter(key, val);
      }
    });

    return this;
  };

  this.removeFilter = function(key) {
    filterGroups.forEach(function(ele) {
      if (ele.id === currentGroup) {
        ele.removeFilter(key);
      }
    });

    return this;
  };

  this.getFilterGroups = function() {
    return filterGroups;
  };

  this.getFilterString = function() {
    if (filterGroups.collection.length === 1) {
      return filterGroups.first().getFilterString();
    } else {
      var ftrs = '';

      filterGroups.forEach(function(grp) {
        ftrs += grp.getFilterString() + '&filter[]=';
      });

      return ftrs.substring(0, ftrs.length - 10);
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

  // Apply other Collection properties to this object
  Collection.apply(this, arguments);
};

FilterCollection.prototype = new Collection();
FilterCollection.prototype.toArray = function() {
  return {
    page: this.page,
    limit: this.limit,
    'filter[]': this.getFilterString()
  };
}

module.exports = FilterCollection;
