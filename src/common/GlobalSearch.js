var Entity = require('./Entity');

function GlobalSearch(searchterm, category, includeInactive, start, size) {
  this.searchterm = searchterm;
  this.category = category;

  this.path = 'globalsearch';


  var query = searchterm;
  if (category != null) {
    query += ' AND type:' + category;
  }

  if (!includeInactive) {
    //Active only
    query += ' AND active:1';
  }


  this.params = {
    query: query,
    start: start,
    size: size
  };
}
GlobalSearch.prototype = new Entity();

GlobalSearch.prototype.toArray = function() {
  return {
    searchterm: this.searchterm,
    category: this.category,
    page: this.page,
    limit: this.limit,
  };
};

module.exports = GlobalSearch;
