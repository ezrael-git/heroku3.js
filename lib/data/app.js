// app.js
const Req = require("./request.js");




// represents a heroku app
class App {

  constructor (key,name,id,created_at,maintenance,repo,raw) {
    this.name = name;
    this.id = id;
    this.created_at = created_at;
    this.maintenance = maintenance;
    this.url = url;
    this.raw = raw;
  }

  // fills all the requirements for you and returns a new App object
  // isn't necessary, if instantiating the class directly make sure to fill all required arguments
  static async build (key,name) {
    let r = Req({"api_key":key});
    let raw = await r._get(`apps/${name}`);
    let name = raw.name;
    let id = raw.id;
    let create = raw.created_at;
    let maint = raw.maintenance;
    let repo = raw.git_url;
    return new App(key,name,id,create,maint,repo,raw);
  }

  // returns the app's dynos in an array
  dynos () {
    
  }




}
