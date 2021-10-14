
const {ApolloServer ,gql} = require("apollo-server")
//const db = require("./task.json");


const tasks = [
    {
      "id": "1",
      "text": "Doctors Appointment",
      "day": "March 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": "2",
      "text": "Meeting with boss",
      "day": "March 6th at 1:30pm",
      "reminder": true
    },
    {
      "id": "3",
      "text": "Food shopping",
      "day": "March 7th at 2:00pm",
      "reminder": false
    }
  ]

const typeDefs = gql`
type Query{
    tasks : [tasks]
        }

type tasks {
    id : Int!
    text : String!
    day : String!
    reminder : Boolean!
}        
`;

//console.log(typeDefs);

const resolvers = {
    Query : {
        tasks () {
            return tasks;
        }
    }

};

const server = new ApolloServer({ cors : {

  origin : "*",
  credentials : true

}, typeDefs, resolvers });
server.listen({port:6001})
.then(({url}) => console.log(`server running at ${url}`));