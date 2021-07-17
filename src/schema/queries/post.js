import {GraphQLNonNull, GraphQLInt, GraphQLString, GraphQLInputObjectType} from 'graphql';
import {Post} from '../types/Post';
import {fakeDatabase} from '../../FakeDatabase';

export default {
  post: {
    type: Post,
    description: 'Get a specific post',
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLInt)
      }
    },
    resolve: (parent, {id}) => { // ES6 destructuring
      return fakeDatabase.getBlogPost(id);
    }
  }
}
