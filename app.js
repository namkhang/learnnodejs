const http = require('http');

                               
const mymoduleone= require("./mymodule/libs");
const helper = require("./help");
//const hostname = '127.0.0.1';
//const port = 6969;

http.createServer(helper.onRequest).listen( mymoduleone.port ,mymoduleone.hostname);

