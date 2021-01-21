
import * as Http from "http";
import { ParsedUrlQuery } from "querystring";
import * as url from "url";
export namespace P_3_1Server {
    console.log("Starting server");
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;

    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);

    function handleListen(): void {
        console.log("Listening");
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");

        _response.setHeader("Access-Control-Allow-Origin", "*");

        console.log(_request.url);
        let q: url.UrlWithParsedQuery = url.parse(_request.url, true);
        let query: ParsedUrlQuery = q.query;
        if (q.pathname == "/html") {
            _response.setHeader("content-type", "text/html; charset=utf-8");
            for (let key in query) {
                console.log(key + ":" + query[key]);
                _response.write(key + ":" + query[key] + "<br/>");
            }
        } 
        else if (q.pathname == "/json") {
            _response.setHeader("content-type", "application/json"); 
            _response.write(JSON.stringify(query));
        } else {
            _response.write("please open /html or /json");
        }
        _response.end(); 

    }
}