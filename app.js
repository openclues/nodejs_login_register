const express = require('express')
const mongoose = require('mongoose')
const app = express()
const hbs = require('express-handlebars')
const path = require('path')
const {mongooseurl, port} = require('./config/configuration')
const indexRouter = require('./routes/defaultRoutes')

mongoose.connect(mongooseurl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("connected")).catch((err) => { console.log(err) })


//config express

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
//config view

app.engine('handlebars', hbs({ defaultLayout: 'default' , partialsDir : path.join(__dirname, '/views/partials/')}))
app.set('view engine', 'handlebars')



// Routes

app.use('/', indexRouter)


app.listen(port, () => {
    console.log("Running on port " + port)
})
