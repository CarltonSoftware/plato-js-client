var Collection = require('./Collection');
var _ = require('underscore');

function MultiCollection() {
  /**
   * Collections
   *
   * @var {Collection[]}
   */
  this.collections = [];

  /**
   * Function to return all of the collections promises
   *
   * @return {Promise.all()}
   */
  this.fetchAll = function() {
    var promises = [];
    for (var i = 0; i < this.collections.length; i++) {
      promises.push(this.collections[i].fetch());
    }

    return Promise.all(promises);
  };
};

module.exports = MultiCollection;
