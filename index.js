const express = require('express')
const dotenv = require('dotenv')
dotenv.config({path: './.env'});
const app = express()
const port = process.env.PORT || 8000

app.use(express.static('public'))
app.use(express.static('node_modules/bootstrap/dist/css'))
app.use(express.static('node_modules/bootstrap/dist/js'))
app.set('view engine', 'ejs')

const {home, getCars, notFound} = require('./controller')

app.get('/', home)

app.get('/cars', getCars)

app.use('/', notFound)

app.listen(port, () => {
	console.log(`server running on http://localhost:${port}`)
})


