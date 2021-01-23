
import * as Http from "http";
import { ParsedUrlQuery } from "querystring";
import * as url from "url";
import * as Mongo from "mongodb";


export namespace P_3_1Server {
    interface Students {
        [type: string]: string | string[];
    }
    interface Antwort {
        fname: string;
        lname: string;
        email: string;
        adress: string;
        postleitzahl: string;
        password: string;
    }


    let students: Mongo.Collection;
    let databaseUrl: string = "mongodb://localhost:27017";

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
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;


    startServer(port);
    connectToDatabase(databaseUrl);



    function startServer(_port: number | string): void {

        let server: Http.Server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);
    }

    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        students = mongoClient.db("Test").collection("Students");
        console.log("Database connection", students != undefined);
    }


    function handleListen(): void {
        console.log("Listening");
    }


    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("I hear voices!");

        _response.setHeader("Access-Control-Allow-Origin", "*");




        let q: url.UrlWithParsedQuery = url.parse(_request.url, true);
        let daten: ParsedUrlQuery = q.query;
        let rückgabe: string = <string>daten.fname;
        rückgabe += " " + daten.lname;
        console.log(q.query);
        console.log(q.pathname);
        if (q.pathname == "//html") {
            // _response.setHeader("content-type", "text/html; charset=utf-8");
            _response.write(await retrieveStudents());
            storeRückgabe(q.query);
        }
        if (q.pathname == "//login") {
            // _response.setHeader("content-type", "text/html; charset=utf-8");
            console.log("hi");
            _response.write(await retrieveStudents());
            storeRückgabe(q.query);
        }

        _response.end();
    }

    async function retrieveStudents(): Promise<String> {

        let data: Antwort[] = await students.find().toArray();
        if (data != undefined) {

            let dataString: string;
            for (let counter: number = 0; counter < data.length; counter++) {

                dataString = dataString + counter + "  "  + data[counter].fname + " " + data[counter].lname + "," + "Nutzer" + "     ";
            }

            return (dataString);
        }
        else {
            return ("noch kein Nutzer vorhanden");
        }
    }
    function storeRückgabe(_rückgabe: Students): void {
        students.insert(_rückgabe);
    }
}

