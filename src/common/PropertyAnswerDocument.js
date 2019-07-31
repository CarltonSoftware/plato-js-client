var SingleEntity = require('./SingleEntity');
var PropertyDocument = require('./PropertyDocument');

function PropertyAnswerDocument(propertyId, answerId , id) {
  this.path = 'property/' + propertyId + '/answer/' + answerId +  '/document';
  this.createPath = 'property/' + propertyId + '/answer/' + answerId +  '/document';
  this.propertydocument = new PropertyDocument();
  this.id = id;
}

PropertyAnswerDocument.prototype = new SingleEntity();
PropertyAnswerDocument.prototype.toCreateArray = function() {
    return {
        propertydocumentid:  this.propertydocument.id
    };
  };

module.exports = PropertyAnswerDocument;