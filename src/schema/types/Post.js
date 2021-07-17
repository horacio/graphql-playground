import {GraphQLObjectType, GraphQLInputObjectType, GraphQLInt, GraphQLList, GraphQLString, GraphQLNonNull} from 'graphql';
import {Author} from './Author';
import {Comment} from './Comment';
import {fakeDatabase} from '../../FakeDatabase';

export const Post = new GraphQLObjectType({
  name: "Post",
  description: "All the details of a blog post",
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    content: { type: GraphQLString },

    author: {
      type: Author,
      resolve: (post) => {
        return fakeDatabase.getAuthor(post.authorId);
      }
    },

    comments: {
      type: new GraphQLList(Comment),
      resolve: (post) => {
        return fakeDatabase.getCommentsForPost(post.id)
      }
    }
  })
});

export const PostInputType = new GraphQLInputObjectType({
  name: 'PostInput',
  fields: {
    title: { type: new GraphQLNonNull(GraphQLString) },
    content: { type: new GraphQLNonNull(GraphQLString) },
    author: { type: new GraphQLNonNull(GraphQLString) }
  }
});
