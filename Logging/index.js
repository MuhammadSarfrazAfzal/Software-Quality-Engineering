const ApiLogs = require("./Winston");
const logger = require("./Winston");
const express = require("express")
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
  ApiLogs.info("Response sent from home request")
})

app.get('/getAppLog', (req, res) => {
    res.send('Currently have no Logs')
    ApiLogs.info("Response sent to /getAppLog api request")
  })
app.listen(3000)
