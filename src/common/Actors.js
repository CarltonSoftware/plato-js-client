var Actor = require('./Actor');
var Collection = require('./Collection');


function Actors(actor, page, limit) {
    this.path = actor;
    this.options.path = actor;
    this.options.object = Actor;
    
    this.page = typeof page !== 'undefined' ? page : null;
    this.limit = typeof limit !== 'undefined' ? limit : null;
}
Actors.prototype = new Collection();

module.exports = Actors;
