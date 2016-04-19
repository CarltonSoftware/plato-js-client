var Entity = require('./Entity');

function ChangeDayTemplateDay(changedaytemplateid) {
    this.path = 'changedaytemplate/' + changedaytemplateid + '/day';
    this.createPath = this.path;
}
ChangeDayTemplateDay.prototype = new Entity();

ChangeDayTemplateDay.prototype.mutateEntity = function(entity) {
    return entity;
}

module.exports = ChangeDayTemplateDay;
