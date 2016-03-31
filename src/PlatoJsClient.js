/*var client = require('./common/platoJsClient').getInstance('http://docker.carltonsoftware.co.uk:49158/app_dev.php/v2');
var platoJsClient = require('./');
var GroupingCollection = require('./common/GroupingCollection');
var GroupingValue = require('./common/GroupingValue');
var Collection = require('./common/Collection');


var output = function() {
  s += Array(this.depth).join('-') + (this.depth > 0 ? '-> ' : '') + this.name + ' (id: ' + this.id + ' depth: ' + this.depth + ')\n';
};

var gv = new GroupingValue();

var groupings = new GroupingCollection();
groupings.fetch().then(function(groupings) {
  groupings.getGroupingValueCollections().fetchAll().then(function(multi) {
    multi.forEach(function(collection) {
      collection.forEach(function(entity) {
        //console.log(entity);
        console.log(entity.parentgroupingvalue);
      });
    });
  });
});
*/
