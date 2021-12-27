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
  
  async apps (sort_by=null) {
    let apps_raw = await this.req._get("apps");
    let app_objs = [];
    let key = this.key;
    
    // let's go through each app and convert it to an app object
    apps_raw.forEach( function (raw_app) {
      let converted = new App(key,raw_app.name,raw_app.created_at,raw_app.maintenance,raw_app.git_url,raw_app);
      app_objs.push(converted);
    });

    // let's check if the function has to sort the result, and if it does, let's sort it
    if (sort_by == "name") {
  
      // make a dict to store the values in app_name : app_object format
      let unordered = {
      };
  
      // now let's do the actual storing
      app_objs.forEach(function (app_obj) {
        unordered[app_obj.name] = app_obj;
      });
  
      // we have the data, let's sort it
      let ordered = Object.keys(unordered).sort().reduce(
        (obj, key) => { 
          obj[key] = unordered[key]; 
          return obj;
        }, 
        {}
      );

      // let's pick out the names so we only have the app objects
      let sorted_by_objs = [];

      for (const [key, value] of Object.entries(ordered)) {
        sorted_by_objs.push(value);
      }
  
      // now that it's sorted, let's redefine app_objs so it gets returned
      app_objs = sorted_by_objs;
  
    }
    

    // finally we can return the result
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
