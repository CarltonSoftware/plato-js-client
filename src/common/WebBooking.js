var Entity = require('./Entity');
var EntityLink = require('./EntityLink');

function WebBooking() {
  this.reviewer = new EntityLink({
    entity: 'TabsUser'
  });
}
WebBooking.prototype = new Entity();
WebBooking.prototype.toArray = function() {
  return {
    createddatetime: this.createddatetime,
    reviewstartdatetime: this.reviewstartdatetime,
    processeddatetime: this.processeddatetime,
    reviewingtabsuserid: this.reviewer.id
  };
};

module.exports = WebBooking;
