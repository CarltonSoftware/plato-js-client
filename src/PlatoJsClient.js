/*var client = require('./common/platoJsClient').getInstance('http://docker.carltonsoftware.co.uk:49158/app_dev.php/v2');
var platoJsClient = require('./');
var GroupingCollection = require('./common/GroupingCollection');
var Collection = require('./common/Collection');


var output = function() {
  s += Array(this.depth).join('-') + (this.depth > 0 ? '-> ' : '') + this.name + ' (id: ' + this.id + ' depth: ' + this.depth + ')\n';
};


var groupings = new GroupingCollection();
groupings.fetch().then(function(groupings) {

  groupings.traverse();
  console.log("\n");

  groupings.collection[1].parentgrouping.id = 4;
  groupings.postResponse();
  groupings.traverse();
  console.log("\n");

  // Investigate why deleting this or setting to undefined breaks the nesting
  // function. Setting to object seems to work fine though.
  //
  //delete groupings.collection[4].parentgrouping;
  groupings.collection[1].parentgrouping = undefined;
  //groupings.collection[4].parentgrouping = {};
  groupings.postResponse();
  groupings.traverse();
  console.log("\n");

  groupings.getGroupingValueCollections().fetchAll().then(function(multi) {
    console.log(multi);
  });

});
*/
