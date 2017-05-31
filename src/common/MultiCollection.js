var Collection = require('./Collection');

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

  /**
   * Function to return all of the collections promises
   *
   * @return {Promise.all()}
   */
  this.fetchAllCacheable = function(cacheTime, forceRefresh) {
    var promises = [];
    for (var i = 0; i < this.collections.length; i++) {
      promises.push(this.collections[i].fetchCacheable(cacheTime, forceRefresh));
    }

    return Promise.all(promises);
  };

  /**
   * Return all entities in the multicollection
   *
   * @return {Array}
   */
  this.getAllEntities = function() {
    var entities = [];
    this.collections.forEach(function(collection) {
      collection.forEach(function(entity) {
        entities.push(entity);
      });
    });

    return entities;
  };
}

module.exports = MultiCollection;
