const express = require('express');
const path = require('path');

const getCommitsApp = require('./src/get_commits_app');

const app = express();
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}.`);
});

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'/views'));

app.get('', (req, res) => {
    getCommitsApp.getCommits()
        .then((commits) => {
            res.render('index', {data: commits});
        })
        .catch((e) => {
            console.error(e);
            res.send('whoops!');
        });
});

app.get('/:user', (req, res) => {
    const {user} = req.params;
    getCommitsApp.getCommits(user)
        .then((commits) => {
            res.render('index', {data: commits});
        })
        .catch((e) => {
            console.error(e);
            res.send('whoops!');
        });
});
