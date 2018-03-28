var SingleEntity = require('./SingleEntity');
var statusError = require('./../error/statusError');
var client = require('./platoJsClient').getInstance();

function File(id) {
  this.path = 'file';
  this.createPath = this.path;
  this.id = id;
}

File.prototype = new SingleEntity();
File.prototype.getImage = function(style, width, height) {
  return this.okPromiseResult([this.getUpdatePath().replace('file', 'image'), 'resize', style, width, height].join('/'));
};
File.prototype.okPromiseResult = function(path) {
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
    }, reject);
  });
};

module.exports = File;
