var client = require('./common/platoJsClient').getInstance('http://docker.carltonsoftware.co.uk:49158/app_dev.php/v2');
var platoJsClient = require('./');
var GroupingCollection = require('./common/GroupingCollection');

var groupings = new GroupingCollection();
groupings.fetch().then(function(groupings) {
  var t = groupings.getNestedGroupings();
  //console.log(JSON.stringify(t, null, " "));
  var s = '';
  groupings.traverse(t, function() {
    s += Array(this.depth).join('-') + (this.depth > 0 ? '> ' : '') + this.name + ' (' + this.depth + ')\n';
  });

  console.log(s);
});
