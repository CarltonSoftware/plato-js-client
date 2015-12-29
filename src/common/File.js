var SingleEntity = require('./SingleEntity');
var client = require('./platoJsClient').getInstance();

function File(id) {
  this.path = 'file';
  this.id = id;
}
File.prototype = new SingleEntity();
File.prototype.okPromiseResult = function(path, params) {
  var self = this;
  return new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest();
    request.open('GET', client.getHost() + '/' + path);
    request.responseType = 'blob';
    request.setRequestHeader('Authorization', 'Bearer Y2ViNDM2NTc0NTMwYjljYWMwYzExMzIxZGE0ZjdlYmE3MjgwNmMxMzRlNzVhOTcyMGU1MjE0M2I2Njc0ZjcxZQ');
    request.onreadystatechange = function(e) {
      if (this.readyState === 4) {
        self.data = this.response;
        self.url = URL.createObjectURL(this.response);
        resolve(self);
      }
    };
    request.send();
  });
};

module.exports = File;
