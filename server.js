const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    graphql: true
  })
);
app.listen(5000);

console.log('app is now listening on port 5000');
