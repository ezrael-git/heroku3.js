// dependencies

const Req = require("./request.js");
const hkutil = require("./hkutil.js");

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
    let temp = [];
    apps_list.forEach(async function (a) {

      let l = await this.get("/apps" + a.name + "/dynos/");
      a.dynos = l;
      
    });

    return apps_list;
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
