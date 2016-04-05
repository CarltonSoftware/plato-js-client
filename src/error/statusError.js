function statusError(response) {
  this.name = 'statusError';
  this.message = 'Entity not found';
  this.statusCode = response.status.code;

  if (typeof response.entity === 'object' && response.entity.hasOwnProperty('errorDescription')) {
    try {
      var error = JSON.parse(response.entity.errorDescription);
      if (error) {
        this.message = error.description;
      }
    } catch(e) {
      this.message = response.entity.errorDescription;
    }
  }
};

statusError.prototype = Error.prototype;

module.exports = statusError;
