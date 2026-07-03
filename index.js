import { createServer } from 'http';
import fs from 'fs';
import mongoose from 'mongoose';

const { Schema } = mongoose

const userSchema = new Schema({
    name: String,
    surname: String,
    mail: String
});

const User = mongoose.model('User', userSchema);

try {
    await mongoose.connect('mongodb://127.0.0.1:27017/userTable');
    console.log('Connected to DB');
} catch (err) {
    console.log(err);
}

const server = createServer((req, res) => {

    res.setHeader('Content-Type', 'Text/html');

    let file = ''

    switch (req.url) {
        case '/':
            file += 'index.ejs'
            break;
        case '/about':
            file += 'about.ejs';
            break;
        case '/contact-me':
        case '/contact':
            file += 'contact-me.ejs'
            break;
        default:
            file += '404.ejs'
            break
    };

    fs.readFile(file, (err, data) => {
        if (err) {
            console.log(err);
            res.end()
        }
        res.write(data);
        res.end()
    })

});

const port = process.env.PORT || 8080
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);

})