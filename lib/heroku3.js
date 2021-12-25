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
    apps_list.forEach(function (a) {
      let h = hkutil.layer_app(a);
      temp.push(h);
      
    });

    return temp;
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

  async restart_dyno (app,dyno_id) {
    let res = await this.req._delete("apps/" + app + "/dynos/" + dyno_id + "/");
    if (res.status == 200) {
      return true;
    }
    else {
      return false;
    }
  }



}


module.exports = heroku_conn
