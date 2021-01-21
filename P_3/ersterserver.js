"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_1Server = void 0;
const Http = require("http");
const url = require("url");
var P_3_1Server;
(function (P_3_1Server) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        let q = url.parse(_request.url, true);
        let query = q.query;
        // console.log(q.pathname );
        if (q.pathname == "/html") {
            console.log(_request.url);
            _response.setHeader("content-type", "text/html; charset=utf-8");
            for (let key in query) {
                console.log(key + ":" + query[key]);
                _response.write(key + ":" + query[key] + "<br/>");
            }
        }
        else if (q.pathname == "/json") {
            _response.setHeader("content-type", "application/json");
            _response.write(JSON.stringify(query));
        }
        else {
            _response.write("please open /html or /json");
        }
        _response.end();
    }
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=ersterserver.js.map