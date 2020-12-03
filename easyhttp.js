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

class EasyHTTP {
    async get(url) {
        const response = await fetch(url);

        const resData = await response.json();
        return resData;
    }

    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },

            body: JSON.stringify(data),
        });

        const resData = await response.json();
        return resData;
    }

    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },

            body: JSON.stringify(data),
        });

        const resData = await response.json();
        return resData;
    }

    async delete(url) {
        const response = await fetch(url);

        const resData = await 'resource deleted...';
        return resData;
    }
}

// function easyHttp() {
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