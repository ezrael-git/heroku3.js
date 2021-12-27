// app.js
const Req = require("../request.js");
const Dyno = require("./dyno.js");




// represents a heroku app
class App {

  constructor (key,name,id,created_at,maintenance,repo,raw) {
    this.key = key;
    this.name = name;
    this.id = id;
    this.created_at = created_at;
    this.maintenance = maintenance;
    this.repo = repo;
    this.raw = raw;
  }

  // fills all the requirements for you and returns a new App object
  // isn't necessary, if instantiating the class directly make sure to fill all required arguments
  static async build (key,name) {
    let r = Req({"api_key":key});
    let raw = await r._get(`apps/${name}`);
    let id = raw.id;
    let create = raw.created_at;
    let maint = raw.maintenance;
    let repo = raw.git_url;
    return new App(key,name,id,create,maint,repo,raw);
  }

  // returns the app's dynos in an array
  async dynos () {
    let r = new Req({"api_key":this.key});

    let dyno_objs = [];
    let raw_dynos = await r._get("apps/" + this.name + "/dynos");

    let key = this.key;
    let app_name = this.name;

    // let's go through each app dyno and convert them to a dyno object
    // then push them to the dyno_objs array
    raw_dynos.forEach( function (dyno) {

      let obj = new Dyno(key,dyno.name,dyno.id,app_name,dyno.created_at,dyno.state,dyno);
      dyno_objs.push(obj);

    });

    return dyno_objs;

    
    
  }

  // get a dyno by identifier
  // id = identifier, can be either name or dyno id
  async get_dyno (id) {
    let r = new Req({"api_key":this.key});

    let dynos = await r._get("dynos");
    let svd;
    dynos.forEach(function (d) {
      if (d.name == id) {
        svd = a
      }
    });

    return svd;

  }




}


module.exports = App
