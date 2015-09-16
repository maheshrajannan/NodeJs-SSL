var EventEmitter = require('events').EventEmitter
  , request = require('superagent')
  , express = require('express')
  , assert = require('better-assert')
  , app = express()
  , url = require('url')
  , https = require('https')
  , fs = require('fs')
  , key = fs.readFileSync('./Certificates/sampleSSL-key.pem')
  , cert = fs.readFileSync('./Certificates/sampleSSL-cert.pem')
  , server;

/*
app.get('/', function(req, res){
  res.send('Safe and secure!');
});

server = https.createServer({
  key: key,
  cert: cert
}, app);

server.listen(8443);
*/

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

describe('https', function(){

  describe('request', function(){
    it('should give a good response', function(done){
      request
      .get('https://localhost:8080/')
      .ca(cert)
      .end(function(res){
      	console.log(res);
        //assert(res.ok);
        assert('Hi from HTTPS' === res.text);
        done();
      });
    });
  });

  describe('.agent', function () {
    it('should be able to make multiple requests without redefining the certificate', function(done){
      var agent = request.agent({ca: cert});
      agent
      .get('https://localhost:8080/')
      .end(function(res){
        //assert(res.ok);
        assert('Hi from HTTPS' === res.text);
        agent
        .get(url.parse('https://localhost:8080/'))
        .end(function(res){
          assert(res.ok);
          assert('Hi from HTTPS' === res.text);
          done();
        });
      });
    });
  });

});