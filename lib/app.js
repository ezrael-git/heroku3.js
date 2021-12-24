// app.js
const Req = require("./request.js");

// represents a heroku app
class App {

  constructor (key,name) {
    let hk = new Req({"api_key":key});
    let _app = await hk.get("apps/" + name);

    this.id = _app.id;
    this.name = _app.name;
    this.created_at = _app.created_at;
  }

};

module.exports = {
  App: App
}
