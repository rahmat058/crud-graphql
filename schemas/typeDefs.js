const { gql } = require('apollo-server-express');

module.exports = gql`
    type Auther {
        id: ID!
        autherName: String
        email: String,
        articles: [Article!]!
    }
    type Article {
        id: ID!
        title: String
        content: String,
        author: Auther!
    }
    type Query {
        getAuthers: [Auther]
        getArticles: [Article]
    }
    type Mutation {
        addAuther(autherName: String!, email: String!): Auther
        addArticle(title: String!, content: String!, auther: String!): Article
        deleteArticle(id: String!): Article
        updateArticle(id: String!, content: String!, title: String!): Article
    }
`;