/* eslint-disable */
var express = require('express');
var path = require('path');

var port = process.env.PORT || 3000;
var app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server started port: ${port}`);
  }
});








// const express = require('express')
// const serveStatic = require('serve-static')
// const path = require('path')
// //create the express app
// const app = express()
// //create middleware to handle serving the app
// app.use("/", serveStatic (path.join (__dirname, '/dist')))
// //serve index by default
// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/dist/index.html')
// })
// //Create default port to serve the app on
// const port = process.env.PORT || 4000;
// app.listen(port)
// //log to feedback that this is actually running
// console.log('server started on port' + port)
