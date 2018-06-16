const fetch = require('node-fetch');
const util = require('util');
const parseXML = util.promisify(require('xml2js').parseString);
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString
} = require('graphql');

const key = 'bROqzXA1d1hgC4R0iKcbA';
// const id = '18541';

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  description: '...',

  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: xml => xml.GoodreadsResponse.author[0].name[0]
    }
  })
});

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: '....',

    fields: () => ({
      author: {
        type: AuthorType,
        args: {
          id: { type: GraphQLInt }
        },
        resolve: (root, args) =>
          fetch(
            `https://www.goodreads.com/author/show/${
              args.id
            }?format=xml&key=${key}`
          )
            .then((res, rej) => res.text())
            .then(parseXML)
      }
    })
  })
});

// console.log(data.then(res => console.log(res)));
