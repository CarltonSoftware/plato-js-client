const platoClient = require('./index');
const client = platoClient.client.getInstance();

module.exports = {
  Client: {
    /**
     * Connect to the api and return a client instance
     *
     * @param {String} host
     * @param {String} username
     * @param {String} password
     * @param {String} clientId
     * @param {String} clientSecret
     *
     * @return {platoJsClient.client}
     */
    connect: function(host, username, password, clientId, clientSecret) {
      return client.setInstance({
        apiRoot: host,
        clientId: clientId,
        apiPrefix: '/v2'
      }).authenticate(username, password, clientSecret);
    },

    /**
     * Check if the client has a token
     *
     * @return {boolean}
     */
    check: function() {
      return typeof client.getToken() === 'string';
    },

    /**
     * Return the client instance
     *
     * @return {platoJsClient.client}
     */
    client: function() {
      return client;
    }
  },
  SNS: {
    Message: {
      /**
       * Get a URL from a message object
       *
       * @param {Object} message
       *
       * @return {String}
       */
      getUrl: function(message) {
        if (message.url.slice(0, 5) !== 'https') {
          message.url = ['https://', message.url].join('');
        }

        return message.url;
      },

      /**
       * Get a Property object from a message object
       *
       * @param {Object} message
       *
       * @return {platoClient.common.Property}
       */
      getPropertyFromMessage: function(message) {
        var url = module.exports.SNS.Message.getUrl(message);
        if (message.entity.slice(0, 8) === 'Property') {
          return module.exports.SNS.Message.getProperty(
            url.split('/property/').pop().split('/')[0]
          );
        } else {
          return module.exports.SNS.Message.getProperty(
            (typeof message.entity.olddata === 'object') ? message.olddata.property.id : message.newdata.property.id
          );
        }
      },

      /**
       * Get the api domain from a message object
       *
       * @param {Object} message
       *
       * @return {String}
       */
      getRoot: function(message) {
        return [
          'https://',
          module.exports.SNS.Message.getUrl(message).split('/')[2]
        ].join('');
      },

      /**
       * Return a new property object instance
       *
       * @param {Number|String} id
       *
       * @return {platoClient.common.Property}
       */
      getProperty: function(id) {
        return new platoClient.common.Property(
          parseInt(id)
        );
      }
    }
  }
}