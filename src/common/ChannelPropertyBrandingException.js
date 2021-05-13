var SingleEntity = require('./SingleEntity');

function ChannelPropertyBrandingException(id) {
  this.path = 'exception';
  this.createPath = this.path;
  this.id = id;
}
ChannelPropertyBrandingException.prototype = new SingleEntity();

module.exports = ChannelPropertyBrandingException;
