const https = require('https');
const express = require('express');
const cors = require('cors');
const fs = require('fs');

const apiRoutes = require('./routes');

const sslPrivateKey = fs.readFileSync(__dirname+'/ssl/ssl.key/server.key');
const sslCertificate = fs.readFileSync(__dirname+'/ssl/ssl.crt/server.crt');

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(cors());
app.use('/api', apiRoutes);

const server = https.createServer({
  key: sslPrivateKey,
  cert: sslCertificate
}, app);

server.listen(443, () => {
  console.log('Rodando')
});