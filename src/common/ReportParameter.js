var SingleEntity = require('./SingleEntity');

function ReportParameter() {
}
ReportParameter.prototype = new SingleEntity();

/**
 * Returns the parameter's name, converted from CamelCase to space-separated
 */
ReportParameter.prototype.toString = function() {
  return this.name.replace(/([A-Z]+)/g, " $1");
};

module.exports = ReportParameter;
