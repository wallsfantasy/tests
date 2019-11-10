const express = require('express');
const axios = require('axios');
const {tranformData, toHtml} = require('./util');

const app = express();
const port = 3000;

app.get('/', async(req, res) => {
    try{
        const response = await axios.get('https://api.github.com/repos/nodejs/node/commits')
        res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>nodejs/node</title>
        </head>
        <body>
            <h1> nodejs/node on master</h1>
            <table style="width:100%">
            <tr>
                <th>Hash</th>
                <th>Message</th>
                <th>Author</th>
            </tr>
            ${response.data.map(d => toHtml(tranformData(d))).join('\n')}
            </div>
        </body>
        </html>
            `)
    } catch(e) {
        console.log(e)
    }
})

app.listen(port, () => console.log(`App listening on port ${port}!`))