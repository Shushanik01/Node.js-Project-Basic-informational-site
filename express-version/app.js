import express from 'express';
import http from 'http'

const app = express();

app.set('view engine', 'ejs');

const links = [
    { href: '/', text: 'Home' },
    { href: '/about', text: 'About' }
];

const users = ["Rose", "Cake", "Biff"];

app.get('/', (req, res) => {
    res.render('index', { message: 'Shushanik rocks backend!', links: links, users:users })
});

let port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

});
