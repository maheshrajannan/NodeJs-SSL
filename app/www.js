// load the things we need
var path = require('path');
var fs = require('fs');
var https = require('https');
var debug = require('debug')('SampleSSL');

//TODO move this to a method.
//INFO:This is the private key of server, output of step 4.
var hskey = fs.readFileSync('./certs/server/my-server.key.pem');
//INFO:This is the signed certificate of server,output of step 6. It is signed by the (self) certificate authority
//my-root-ca.crt.pem.
var hscert = fs.readFileSync('./certs/server/my-server.crt.pem');


//INFO:This is the self signed certificate authority added to the server.
//Ouput of step 3 in the diagram.
require('ssl-root-cas')
  .inject()
  .addFile('./certs/server/my-root-ca.crt.pem')
  ;

var options = {
    key: hskey,
    cert: hscert
};

/**
 * Create HTTPS server.
 */

https.createServer(options, function (req, res) {
    res.writeHead(200);
    res.end("Hi from HTTPS");
}).listen(8080, function(){
  /**
  * Listen on provided port, on all network interfaces.
 */
  console.log('https web server listening on port '+8080);
}); 