const http = new EasyHTTP();

// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
// .then(data => console.log(data))

const data = {
    name: 'Bolaji Ola',
    username: 'BojOla',
    email: 'afeezbolajiola@gmail.com',
};

http
    .post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));