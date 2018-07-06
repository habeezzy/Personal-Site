const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
//create the express app
const app = express()
//create middleware to handle serving the app
app.use("/", serveStatic (path.join (__dirname, '/src')))
//serve index by default
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/src/index.html')
})
//Create default port to serve the app on
const port - process.enc.PORT || 5000
app.listen(port)
//log to feedback that this is actually running
console.log('server started on port' + port)
