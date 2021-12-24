// app.js
const Req = require("./request.js");

// represents a heroku app
class App {

  constructor (id,name,created_at,owner,git_url) {
    this.id = id;
    this.name = name;
    this.created_at = created_at;
    this.owner = owner;
    this.git_url = git_url;

  }

  static async build (key,name) {
    let hk = new Req({"api_key":key});
    let _app = await hk.get("apps/" + name);

    let id = _app.id;
    let created_at = _app.created_at;
    let owner = _app.owner;
    let git_url = _app.git_url;
    return new App(id,name,created_at,owner,git_url);
  }

};

module.exports = App
