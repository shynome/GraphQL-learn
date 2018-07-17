const Express = require('express')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')
const { buildSchema } = require('graphql')

const fs = require('fs')
const path = require('path')
const typeDefs =  [
  fs.readFileSync(path.join(__dirname,'./graphql.d.ts'),'utf8').replace(/\=(\s|)+\{(.|)+/,'{'),
]
const resolvers = {
  Query: {
    /**@param {any} root */
    hello(root){
      return 'world'
    }
  }
}
const schema = makeExecutableSchema({ typeDefs, resolvers })

const root = { hello:()=>`hello world` }

const app = Express()
const bodyParser = require('body-parser')

app.use('/graphql',bodyParser.json(),graphqlExpress({ schema }))
app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));
app.listen(4000,function(){
  // @ts-ignore
  console.log(`${this.address().port}`)
})

