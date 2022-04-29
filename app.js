const express = require('express');
const app = express();
const hbs = require('hbs');

//handlebars
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs')

//Servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Camilo',
        titulo: 'Node'
    });
})
app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Camilo',
        titulo: 'Node'
    });
})
app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Camilo',
        titulo: 'Node'
    });
})

app.get('*', (req, res) => {
    res.send('404 | Page Not Found')
})

app.listen(8080)