"use strict";

var http = new EasyHTTP();
http.get('https://jsonplaceholder.typicode.com/users').then(function (data) {
  return console.log(data);
})["catch"](function (err) {
  return console.log(err);
}); // .then(data => console.log(data))

var data = {
  name: 'Bolaji Ola',
  username: 'BojOla',
  email: 'afeezbolajiola@gmail.com'
}; // http
//     .post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
// http
//     .put('https://jsonplaceholder.typicode.com/users/2', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
// http
//     .delete('https://jsonplaceholder.typicode.com/users/2')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));