const express = require('express');
const morgan = require('morgan')
const app = express();
const layout = require('./views/layout')
const { db } = require('./models');
const models = require('./models');
const wikiRoutes = require('./routes/wiki')
const userRoutes = require('./routes/user')


app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false}));
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res, next) => {
    res.redirect('/wiki');
})



app.use('/wiki',wikiRoutes);
app.use('/users',userRoutes);


db.authenticate().
    then(() => {
        console.log('connected to the database');
    })

const PORT = 3000;

const init = async () => {
    await models.db.sync()
    app.listen(PORT, () => {
        console.log('up and run')
    });
}
init()
