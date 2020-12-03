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
      var response, resData;
      return regeneratorRuntime.async(function get$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(fetch(url));

            case 2:
              response = _context.sent;
              _context.next = 5;
              return regeneratorRuntime.awrap(response.json());

            case 5:
              resData = _context.sent;
              return _context.abrupt("return", resData);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "post",
    value: function post(url, data) {
      var response, resData;
      return regeneratorRuntime.async(function post$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(fetch(url, {
                method: 'POST',
                headers: {
                  'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
              }));

            case 2:
              response = _context2.sent;
              _context2.next = 5;
              return regeneratorRuntime.awrap(response.json());

            case 5:
              resData = _context2.sent;
              return _context2.abrupt("return", resData);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "put",
    value: function put(url, data) {
      var response, resData;
      return regeneratorRuntime.async(function put$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return regeneratorRuntime.awrap(fetch(url, {
                method: 'PUT',
                headers: {
                  'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
              }));

            case 2:
              response = _context3.sent;
              _context3.next = 5;
              return regeneratorRuntime.awrap(response.json());

            case 5:
              resData = _context3.sent;
              return _context3.abrupt("return", resData);

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }, {
    key: "delete",
    value: function _delete(url) {
      var response, resData;
      return regeneratorRuntime.async(function _delete$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return regeneratorRuntime.awrap(fetch(url));

            case 2:
              response = _context4.sent;
              _context4.next = 5;
              return regeneratorRuntime.awrap('resource deleted...');

            case 5:
              resData = _context4.sent;
              return _context4.abrupt("return", resData);

            case 7:
            case "end":
              return _context4.stop();
          }
        }
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