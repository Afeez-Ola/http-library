"use strict";

function easyHttp() {
  this.http = new XMLHttpRequest();
}

easyHttp.prototype.get = function (url, callbackURL) {
  var _this = this;

  this.http.open('GET', url, true);

  this.http.onload = function () {
    // console.log(this.http.responseText);
    if (_this.http.status === 200) {
      callbackURL(null, _this.http.responseText);
    } else {
      callbackURL("ERROR: ".concat(_this.http.status));
    }
  };

  this.http.send();
};

easyHttp.prototype.post = function (url, data, callback) {
  var _this2 = this;

  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  this.http.onload = function () {
    callback(null, _this2.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

easyHttp.prototype.put = function (url, data, callback) {
  var _this3 = this;

  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  this.http.onload = function () {
    callback(null, _this3.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

easyHttp.prototype["delete"] = function (url, callbackURL) {
  var _this4 = this;

  this.http.open('DELETE', url, true);

  this.http.onload = function () {
    // console.log(this.http.responseText);
    if (_this4.http.status === 200) {
      callbackURL(null, 'Post deleted successfully!');
    } else {
      callbackURL("ERROR: ".concat(_this4.http.status));
    }
  };

  this.http.send();
};