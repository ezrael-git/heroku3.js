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
  dynos () {
    let r = Req({"api_key":this.key});

    let dyno_objs = [];
    let raw_dynos = await r._get("apps/" + this.name + "/dynos");

    // let's go through each app dyno and convert them to a dyno object
    // then push them to the dyno_objs array
    raw_dynos.forEach( function (dyno) {

      let obj = new Dyno(this.key,dyno.name,dyno.id,this.app.name,dyno.created_at,dyno.state,dyno);
      dyno_objs.push(obj);

    });

    return dyno_objs;

    
    
  }




}


module.exports = App
