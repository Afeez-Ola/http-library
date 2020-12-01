"use strict";

var http = new easyHttp();
var data = {
  title: 'Custom Post',
  body: 'This is a custom post about AJAX  with fake data'
}; // http.post('https://jsonplaceholder.typicode.com/posts', data, function(
//     error,
//     posts
// ) {
//     if (error) {
//         console.error(error);
//     } else {
//         console.log(posts);
//     }
// });
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, post) {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(post);
//     }
// });
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(
//     error,
//     posts
// ) {
//     if (error) {
//         console.error(error);
//     } else {
//         console.log(posts);
//     }
// });

http["delete"]('https://jsonplaceholder.typicode.com/posts/1', function (err, response) {
  if (err) {
    console.error(err);
  } else {
    console.log(response);
  }
});