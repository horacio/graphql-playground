import {GraphQLObjectType, GraphQLInputObjectType, GraphQLInt, GraphQLString, GraphQLNonNull} from 'graphql';

export const Comment = new GraphQLObjectType({
  name: "Comment",
  description: "All the details of the comment of a blog post",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    content: { type: GraphQLString }
  })
});

export const CommentInputType = new GraphQLInputObjectType({
  name: 'CommentInput',
  fields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    content: { type: new GraphQLNonNull(GraphQLString) },
    postId: { type: new GraphQLNonNull(GraphQLInt) }
  }
});
