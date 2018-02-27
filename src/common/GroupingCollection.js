var Collection = require('./Collection');
var Grouping = require('./Grouping');
var GroupingValue = require('./GroupingValue');
var MultiCollection = require('./MultiCollection');
var _ = require('underscore');

function GroupingCollection() {
  this.nestedGroups = [];
}

GroupingCollection.prototype = new Collection({
  path: 'grouping',
  object: Grouping
});

/**
 * Get the multicollection for the grouping values
 *
 * @return {MultiCollection}
 */
GroupingCollection.prototype.getGroupingValueCollections = function() {
  var m = new MultiCollection();
  for (var i = 0; i < this.collection.length; i++) {
    m.collections.push(
      new Collection({
        path: 'value',
        parent: this.collection[i],
        object: GroupingValue
      })
    );
  }

  return m;
};

/**
 * Callback function used to populate the nestedGroups after a fetch
 *
 * @return {undefined}
 */
GroupingCollection.prototype.postResponse = function() {
  // The following code will update the depth of each grouping
  var depth = 0,
    // Get the groupings without any parent
    nodes = this.collection.filter(function(item) {
      return item.hasParent() === false;
    }),
    total = nodes.length;

  do {

    // Add the depth to each of the groupings found
    nodes.forEach(function(node) {
      node.depth = depth;
    });
    depth++;

    // Get the id's of each grouping
    var ids = nodes.map(function(item) {
      return item.id;
    });

    // Find any nodes which have a parent in the current id array
    nodes = this.collection.filter(function(item) {
      return typeof item.parentgrouping === 'object' && ids.indexOf(item.parentgrouping.id) > -1;
    });

    // Update total so we can use the breakout clause
    total += nodes.length;
  } while (nodes.length > 0 && total <= this.collection.length);

  // Clear children, this avoids duplicates
  for (var i = 0; i < this.collection.length; i++) {
    this.collection[i].children = [];
  }

  this.nestedGroups = this.getNestedGroupings();
};

/**
 * Return a multi dimensional list of groups and children
 *
 * @return {Array}
 */
GroupingCollection.prototype.getNestedGroupings = function() {
  /**
   * Recursive function used to create the nested list of groupings
   *
   * @param {Array}  array
   * @param {Object} parent
   * @param {Array}  tree
   *
   * @return {Array}
   */
  var _unflatten = function(array, parent, tree) {
    tree = tree || [];
    parent = parent || {};

    var children = _.filter(
      array,
      function(child) {
        if (typeof child.parentgrouping === 'undefined') {
          child.parentgrouping = {};
        }
        return child.parentgrouping.id === parent.id;
      }
    );

    if (!_.isEmpty(children)) {
      if (typeof parent.id === 'undefined') {
        tree = children;
      } else {
        parent.children = children;
      }

      _.each(children, function(child) {
        _unflatten(array, child);
      });
    }

    return tree;
  };

  return _unflatten(this.collection, undefined, []);
};

/**
 * Traversal function for the nest array
 *
 * @param {Array}    array
 * @param {Function} func
 *
 * @return void
 */
GroupingCollection.prototype.traverse = function(func) {

  if (typeof func !== 'function') {
    func = function() {
      console.log(Array(this.depth).join('-') + (this.depth > 0 ? '-> ' : '') + this.name + ' (' + this.depth + ')');
    };
  }

  var _traverse = function(array) {
    array.forEach(function(e) {
      func.call(e);
      if (e.children && e.children.length > 0) {
        _traverse(e.children);
      }
    });
  };

  return _traverse(this.nestedGroups);
};

module.exports = GroupingCollection;
