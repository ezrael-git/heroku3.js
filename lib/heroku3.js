// dependencies

const Req = require("./request.js");
const App = require("./data/app.js");

// main


// public wrapper class
class heroku_conn {

  constructor (key,req,account) {
    this.key = key;
    this.req = req;
    this.account = account;
  }

  static async build (key) {
    let req = new Req({"api_key":key});
    let account = await req._get("account");

    return new heroku_conn(key,req,account);

  }
  
  async apps () {
    let apps_raw = await this.req._get("apps");
    let app_objs = [];
    let key = this.key;

    // let's go through each app and convert it to an app object
    apps_raw.forEach( function (raw_app) {
      let converted = new App(key,raw_app.name,raw_app.created_at,raw_app.maintenance,raw_app.git_url,raw_app);
      app_objs.push(converted);
    });


    return app_objs;
  }

  async get_app (app_iq) {
    let apps = await this.req._get("apps");
    let svd;
    apps.forEach(function (a) {
      if (a.name == app_iq) {
        svd = a
      }
    });
    return svd;
  }




}


module.exports = heroku_conn
