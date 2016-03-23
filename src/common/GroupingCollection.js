var Collection = require('./Collection');
var Grouping = require('./Grouping');
var _ = require('underscore');

function GroupingCollection() {};

GroupingCollection.prototype = new Collection({
  path: 'grouping',
  object: Grouping
});

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
    var tree = typeof tree !== 'undefined' ? tree : [];
    var parent = typeof parent !== 'undefined' ? parent : { };
    var children = _.filter(
      array,
      function(child) {
        return typeof child.parentgrouping === 'object' && child.parentgrouping.id === parent.id;
      }
    );

    if (!_.isEmpty(children)) {
      if (typeof parent.id === 'undefined') {
        tree = children;
      } else {
        parent['children'] = children;
      }

      _.each(children, function(child) {
        child.depth = (typeof parent.depth === 'undefined') ? 0 : parent.depth + 1;
        _unflatten(array, child, tree);
      });
    }

    return tree;
  }

  return _unflatten(this.collection);
};

/**
 * Traversal function for the nest array
 *
 * @param {Array}    array
 * @param {Function} func
 *
 * @return void
 */
GroupingCollection.prototype.traverse = function(array, func) {

  if (typeof func !== 'function') {
    func = function() {
      console.log(Array(this.depth).join('-') + (this.depth > 0 ? '> ' : '') + this.name + ' (' + this.depth + ')');
    }
  }

  var _traverse = function(array) {
    array.forEach(function(e, i) {
      func.call(e);
      if (e.children && e.children.length > 0) {
        _traverse(e.children);
      }
    });
  }

  return _traverse(array);
}

module.exports = GroupingCollection;
