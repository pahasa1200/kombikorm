const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('../schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();
const PORT = 3005;

mongoose.connect(`mongodb+srv://pahasa:Pasha1200@cluster0.ll3xt.mongodb.net/TrainDB?retryWrites=true&w=majority`, {useUnifiedTopology: true, useNewUrlParser: true})

app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

const dbConnection = mongoose.connection
dbConnection.on('error', err => console.log(`Console error: ${err} ` ))
dbConnection.once('open', () => console.log('Connected to DB!'))

app.listen(PORT, err => {
    err ? console.log(err) : console.log("server")
})