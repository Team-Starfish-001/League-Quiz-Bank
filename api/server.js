const express = require('express')
const bodyparser = require('body-parser')
    const fs = require('fs')
const app = express()

var data = JSON.parse(fs.readFileSync('quizzes.json'))

app.use(bodyparser.json())
bodyparser.urlencoded({
	extended: true
})


app.get('/getQuiz', (req, res) => {
	res.send(data)
})

app.post('/getQuiz', (req,res) => {
	data.push(req.body)
	fs.writeFileSync('quizzes.json', JSON.stringify(data));  
	res.send(data)
})

app.listen(8080, () => console.log("Server Started on Port 8080!!!"))