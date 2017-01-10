var Entity = require('./Entity');

function GlobalSearch(searchterm, category, start, size) {
  this.searchterm = searchterm;
  this.category = category;

  this.path = 'globalsearch';


  var query = searchterm;
  if (category != null) {
    query += ' AND type:' + category;
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
