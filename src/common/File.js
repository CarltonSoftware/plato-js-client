var SingleEntity = require('./SingleEntity');
var client = require('./platoJsClient').getInstance();
var statusError = require('./../error/statusError');
var Promise = require('es6-promise').Promise;

function File(id) {
  this.path = 'file';
  this.createPath = this.path;
  this.id = id;
}

File.prototype = new SingleEntity();
File.prototype.okPromiseResult = function(path, params) {
  var self = this;
  var result = client.get({ path: path, mixin: { responseType: 'blob' } });

  return new Promise(function(resolve, reject) {
    result.then(function(res) {
      if (res.status.code === 200) {
        self.data = res.entity;
        self.url = URL.createObjectURL(res.entity);
        resolve(self);
      } else {
        reject(new statusError(res));
      }
    });
  });
};

module.exports = File;
