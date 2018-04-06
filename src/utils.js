const platoClient = require('./index');

module.exports = {
  SNS: {
    Message: {
      getUrl: function(message) {
        if (message.url.slice(0, 5) !== 'https') {
          message.url = ['https://', message.url].join('');
        }

        return message.url;
      },
      getPropertyFromMessage: function(message) {
        var url = module.exports.SNS.Message.getUrl(message);
        if (message.entity.slice(0, 8) === 'Property') {
          var parts = url.split('/property/');
          if (parts.length === 2) {
            return module.exports.SNS.Message._property(parts.pop().split('/')[0]);
          }
        } else {
          if (typeof message.entity.olddata === 'object') {
            return module.exports.SNS.Message._property(message.olddata.property.id);
          } else {
            return module.exports.SNS.Message._property(message.newdata.property.id);
          }
        }
      },
      getRoot: function(message) {
        return [
          'https://',
          module.exports.SNS.Message.getUrl(message).split('/')[2]
        ].join('');
      },
      getProperty: function(id) {
        return new platoClient.common.Property(
          parseInt(id)
        );
      }
    }
  }
}