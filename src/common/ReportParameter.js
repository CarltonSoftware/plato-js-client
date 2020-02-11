var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function ReportParameter(id) {
  this.path = 'parameter';
  this.createPath = 'parameter';
  this.id = id;
}

ReportParameter.prototype = new SingleEntity();

/**
 * Returns the parameter's name, converted from CamelCase to space-separated
 */
ReportParameter.prototype.toString = function() {
  return this.name.replace(/([A-Z]+)/g, " $1");
};

ReportParameter.prototype.toArray = function() {
	var data = {};

	data.name = this.name;
	data.description = this.description || '';
	data.type = this.type;
	data.sortorder = (typeof this.sortorder !== 'undefined')? this.sortorder : 0;
	data.required = this.required || false;

	return data;
};

ReportParameter.prototype.validSchema = function() {
	return Joi.object().keys({
		name: Joi.string().required().label('Parameter Name'),
		description: Joi.string().optional().label('Parameter description'),
		type: Joi.string().required().label('Parameter Type'),
		sortorder: Joi.number().required().label('Parameter Sort Order'),
		required: Joi.boolean().label('Parameter Required'),
	});
};

module.exports = ReportParameter;
