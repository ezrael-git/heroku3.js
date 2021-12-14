const https = require('https')
const options = {
  hostname: 'example.com',
  port: 443,
  path: '',
  method: ''
}

class Heroku {
  constructor () {
    this.options = options;
  }

  callback (response) {
    var str = ''
    response.on('data', function (chunk) {
      str += chunk;
    });

    response.on('end', function () {
      return str;
    });
  }

  get (req) {
    let options = this.options;
    options.method = "GET";
    options.path = req;
    http.request(options, this._callback).end();
  }

  post (req) {
  }

}

  

  
