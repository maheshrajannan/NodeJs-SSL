#!/usr/bin/env node
'use strict';

var https = require('https')
  , fs = require('fs')
  , path = require('path')
  , ca = fs.readFileSync('./Certificates/SelfCertificateAuthority/my-root-ca.crt.pem')
  , port = process.argv[2] || 8080
  , hostname = process.argv[3] || 'local.ldsconnect.org'
  ;

var options = {
  host: hostname
, port: port
, path: '/'
, ca: ca
};
options.agent = new https.Agent(options);

https.request(options, function(res) {
  res.pipe(process.stdout);
}).end();

