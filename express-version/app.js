import express from 'express';
import http from 'http'

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('index', {message: 'Shushanik rocks backend'})
});

let port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
    
});