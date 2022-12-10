import { gql } from 'apollo-server-express'

export const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        email: String!
    }

    type Query {
        me: User!
    }
`

export const resolvers = {
    Query: {
        me: () => {
            return {
                id: '123',
                name: 'John Doe',
                email: '',
            }
        }
    }
}