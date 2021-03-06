function statusError(response) {
  this.name = 'statusError';
  this.message = response.status.text;
  this.statusCode = response.status.code;

  if (typeof response.entity === 'object' && response.entity.hasOwnProperty('errorDescription')) {
    try {
      var error = JSON.parse(response.entity.errorDescription);
      if (error) {
        if (Array.isArray(error)) {
          error = error[0];
        }

        if (error.description) {
          this.message = error.description;
        } else if (error.message) {
          this.message = error.message;
        }
      }
    } catch (e) {
      this.message = response.entity.errorDescription;
    }
  }
}

statusError.prototype = Error.prototype;

module.exports = statusError;