var client = require('./common/platoJsClient').getInstance('http://docker.carltonsoftware.co.uk:49158/app_dev.php/v2');
var platoJsClient = require('./');

/*
var propertyAttributes = new platoJsClient.Collection({
  path: 'attribute',
  object: platoJsClient.common.PropertyAttribute,
  parents: [
    new platoJsClient.common.Property(1)
  ]
});

propertyAttributes.fetch().then(function(propertyAttributes) {
  console.log(propertyAttributes);
});

var File = platoJsClient.common.File;

// file = new File(1); // a PDF
var file = new File(2); // a text file
// file = new File(3); // a photograph
// file = new File(4); // a photograph
// file = new File(5); // a photograph

file.get().then(function(res) {
  console.dir(res);
});


file = new File(5); // a photograph

file.get().then(function(res) {
  console.dir(res);
});

*/
