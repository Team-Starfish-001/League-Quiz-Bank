const express = require('express')
const bodyparser = require('body-parser')
const app = express()

app.use(bodyparser.json())
bodyparser.urlencoded({
	extended: true
})

app.get('/getQuiz', (req, res) => {
	res.send({})
})

app.post('getQuiz', (req,res) => {
	var data = req.body
})

app.listen(8080, () => console.log("Server Started on Port 8080!!!"))