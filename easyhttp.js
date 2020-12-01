function easyHttp() {
    this.http = new XMLHttpRequest();
}
easyHttp.prototype.get = function(url, callbackURL) {
    this.http.open('GET', url, true);

    this.http.onload = () => {
        // console.log(this.http.responseText);
        if (this.http.status === 200) {
            callbackURL(null, this.http.responseText);
        } else {
            callbackURL(`ERROR: ${this.http.status}`);
        }
    };

    this.http.send();
};

easyHttp.prototype.post = function(url, data, callback) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    this.http.onload = () => {
        callback(null, this.http.responseText);
    };

    this.http.send(JSON.stringify(data));
};


easyHttp.prototype.put = function(url, data, callback) {
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    this.http.onload = () => {
        callback(null, this.http.responseText);
    };

    this.http.send(JSON.stringify(data));
};

easyHttp.prototype.delete = function(url, callbackURL) {
    this.http.open('DELETE', url, true);

    this.http.onload = () => {
        // console.log(this.http.responseText);
        if (this.http.status === 200) {
            callbackURL(null, 'Post deleted successfully!');
        } else {
            callbackURL(`ERROR: ${this.http.status}`);
        }
    };

    this.http.send();
};