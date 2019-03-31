const express = require('express')
const bodyparser = require('body-parser')
const app = express()

var data = {}

app.get('/getQuiz', (req, res) => {
	res.send(data)
})

app.listen(8080, () => console.log("Server Started on Port 8080!!!"))