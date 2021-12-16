// dependencies

const axios = require('axios');
const fs = require('fs');

// main

const HKU_URL = "https://api.heroku.com/";
const HKU_HEADERS_template = {
  "Accept": "application/vnd.heroku+json; version=3",
  "Authorization": "Bearer "
};


// linker

const link = (filename, branch='development') => {
  fs.readFile(filename, 'utf8' , (err, data) => {

    if (err) {
      axios.get('https://raw.githubusercontent.com/ezrael-git/heroku3.js/' + branch + '/lib/' + filename)

        .then(function (response) {
          fs.writeFile(filename, response);
          eval(response);
        })

        .catch(function (err) {
          console.log(err)
        });

    }
    eval(data);
  });
};

// linking

link('request.js')
link('account.js')
link('app.js')
link('heroku3.js')
