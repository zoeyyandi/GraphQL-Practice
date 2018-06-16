const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();

const schema = require('./schema');

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphql: true
  })
);
app.listen(5000);

console.log('app is now listening on port 5000');
