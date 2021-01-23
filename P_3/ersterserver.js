"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_1Server = void 0;
const Http = require("http");
const url = require("url");
const Mongo = require("mongodb");
var P_3_1Server;
(function (P_3_1Server) {
    let students;
    let databaseUrl = "mongodb://localhost:27017";
    /*  let startArgs: string[] = process.argv.slice(2);
      console.log(startArgs);
      switch (startArgs[0]) {
          case "local":
              databaseUrl = "mongodb://localhost:27017";
              console.log("running local");
              break;
          case "remote":
              //TODO Werte ueberpruefen
              let userName: string = "user";
              let pw: string = "onlineUser";
              databaseUrl =
              console.log("running remote");
              break;
          default:
              console.log("no or wrong argument given, running local");
              databaseUrl = "mongodb://localhost:27017";
      }*/
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    startServer(port);
    connectToDatabase(databaseUrl);
    function startServer(_port) {
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        students = mongoClient.db("Test").collection("Students");
        console.log("Database connection", students != undefined);
    }
    function handleListen() {
        console.log("Listening");
    }
    async function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        let q = url.parse(_request.url, true);
        let daten = q.query;
        let rückgabe = daten.fname;
        rückgabe += " " + daten.lname;
        console.log(q.query);
        console.log(q.pathname);
        if (q.pathname == "//html") {
            console.log("hi");
            // _response.setHeader("content-type", "text/html; charset=utf-8");
            _response.write(await retrieveStudents());
            storeRückgabe(q.query);
        }
        //retrieveStudents();
        _response.end();
    }
    async function retrieveStudents() {
        let data = await students.find().toArray();
        if (data != undefined) {
            let dataString;
            for (let counter = 0; counter < data.length; counter++) {
                dataString = dataString + data[counter].fname + data[counter].lname;
            }
            return (dataString);
        }
        else {
            return ("noch kein Nutzer vorhanden");
        }
    }
    function storeRückgabe(_rückgabe) {
        students.insert(_rückgabe);
    }
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=ersterserver.js.map