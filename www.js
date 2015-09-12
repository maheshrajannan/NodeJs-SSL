// load the things we need
var path = require('path');
var fs = require('fs');
var https = require('https');
var debug = require('debug')('SampleSSL');

//TODO move this to a method.
var hskey = fs.readFileSync('./Certificates/sampleSSL-key.pem');
var hscert = fs.readFileSync('./Certificates/sampleSSL-cert.pem');

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