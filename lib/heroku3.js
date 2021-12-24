// dependencies

const Account = require("./account.js");
const Req = require("./request.js");
const App = require("./app.js");

// main


// public wrapper class
class heroku_conn {

  constructor (key,country,email,id,created_at,name,req) {
    this.key = key;
    this.country = country;
    this.email = email;
    this.id = id;
    this.created_at = created_at;
    this.name = name;
    this.req = req;
  }

  static async build (key) {
    let _acc = await Account.build(key);
    let country = _acc.country;
    let email = _acc.email;
    let id = _acc.id;
    let created_at = _acc.created_at;
    let name = _acc.name;
    let req = new Req({"api_key":key});
    return new heroku_conn(key,country,email,id,created_at,name,req);

  }
  
  async apps () {
    let apps = [];
    let apps_list = this.req._get("apps");
    apps_list.forEach( function (app) {
      let temp = App.build(this.key,app.name);
      apps.push(temp);
    });
    return apps;
  }



}


module.exports = heroku_conn
