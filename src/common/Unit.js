var SingleEntity = require('./SingleEntity');

function Unit(id) {
    this.path = 'unit';
    this.id = id;
    
    // Example function
//    this.calc = function() {
//        return this.id * 5;
//    };
}
Unit.prototype = new SingleEntity();

module.exports = Unit;