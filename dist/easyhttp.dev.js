"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * EasyHTTP Library
 * Library for making HTTP requests
 * 
 *  @version 2.00
 *  @author  Bolaji Olanrewaju
 *  @license MIT
 * 
 * 
 * 
 **/
var EasyHTTP =
/*#__PURE__*/
function () {
  function EasyHTTP() {
    _classCallCheck(this, EasyHTTP);
  }

  _createClass(EasyHTTP, [{
    key: "get",
    value: function get(url) {
      return new Promise(function (resolve, reject) {
        fetch(url).then(function (res) {
          return res.json();
        }).then(function (data) {
          return resolve(data);
        })["catch"](function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: "post",
    value: function post(url, data) {
      return new Promise(function (resolve, reject) {
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then(function (res) {
          return res.json();
        }).then(function (data) {
          return resolve(data);
        })["catch"](function (err) {
          return reject(err);
        });
      });
    }
  }]);

  return EasyHTTP;
}(); // function easyHttp() {
//     this.http = new XMLHttpRequest();
// }
// easyHttp.prototype.get = function(url, callbackURL) {
//     this.http.open('GET', url, true);
//     this.http.onload = () => {
//         // console.log(this.http.responseText);
//         if (this.http.status === 200) {
//             callbackURL(null, this.http.responseText);
//         } else {
//             callbackURL(`ERROR: ${this.http.status}`);
//         }
//     };
//     this.http.send();
// };
// easyHttp.prototype.post = function(url, data, callback) {
//     this.http.open('POST', url, true);
//     this.http.setRequestHeader('Content-type', 'application/json');
//     this.http.onload = () => {
//         callback(null, this.http.responseText);
//     };
//     this.http.send(JSON.stringify(data));
// };
// easyHttp.prototype.put = function(url, data, callback) {
//     this.http.open('PUT', url, true);
//     this.http.setRequestHeader('Content-type', 'application/json');
//     this.http.onload = () => {
//         callback(null, this.http.responseText);
//     };
//     this.http.send(JSON.stringify(data));
// };
// easyHttp.prototype.delete = function(url, callbackURL) {
//     this.http.open('DELETE', url, true);
//     this.http.onload = () => {
//         // console.log(this.http.responseText);
//         if (this.http.status === 200) {
//             callbackURL(null, 'Post deleted successfully!');
//         } else {
//             callbackURL(`ERROR: ${this.http.status}`);
//         }
//     };
//     this.http.send();
// };