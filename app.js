const express = require('express')

const app = express();

app.use(express.static(`${__dirname}/public`))


app.get('/', (req, res, next) => {
    res.sendFile(`${__dirname}/views/index.html`)
})

app.get('/about', (req, res, next) => {
    res.sendFile(`${__dirname}/views/about.html`)
})

app.get('/works', (req, res,next) => {
    res.sendFile(`${__dirname}/views/works.html`)
})

app.get('/photos', (req, res,next) => {
    res.sendFile(`${__dirname}/views/photos.html`)
})

const port = 3000;
app.listen(port, () => console.log(`Application listening at port: ${port}`))