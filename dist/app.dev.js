"use strict";

var http = new EasyHTTP(); // http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
// .then(data => console.log(data))

var data = {
  name: 'Bolaji Ola',
  username: 'BojOla',
  email: 'afeezbolajiola@gmail.com'
};
http.post('https://jsonplaceholder.typicode.com/users', data).then(function (data) {
  return console.log(data);
})["catch"](function (err) {
  return console.log(err);
});