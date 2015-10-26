var Entity = require('./Entity');

function Unit(id) {
    this.path = 'unit';
    this.id = id;
    
    // Example function
//    this.calc = function() {
//        return this.id * 5;
//    };
}
Unit.prototype = new Entity();

module.exports = Unit;