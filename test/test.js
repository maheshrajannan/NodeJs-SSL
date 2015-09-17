#!/usr/bin/env node
'use strict';

var https = require('https')
  , fs = require('fs')
  , path = require('path')
  , ca = fs.readFileSync('./certs/client/my-root-ca.crt.pem')
  , port = process.argv[2] || 8080
//INFO: Only 2 permissible options in local, localhost or   local.ldsconnect.org
//these are the default CN's node js listens to. So the certificate should
//also be created with these 2 options only.
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

