// dependencies

const Req = require("./request.js");
hkutil = require("./hkutil.js");

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
    let apps_list = await this.req._get("apps");
    return apps_list;
  }



}


module.exports = heroku_conn
