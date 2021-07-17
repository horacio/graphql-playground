'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FakeDatabase = function () {
  function FakeDatabase() {
    _classCallCheck(this, FakeDatabase);

    this.authors = [{ id: 'fa499e7757cd', name: 'Horacio Bertorello', email: 'horacio.bertorello@gmail.com' }, { id: '32b3ba86ecf0', name: 'Alan Bertorello', email: 'alan.bertorello@gmail.com' }, { id: '1072c9514418', name: 'Conrado Bertorello', email: 'conrado.bertorello@gmail.com' }];

    this.blogPosts = [{
      id: 1,
      title: 'My first thing',
      content: 'About my first thing',
      authorId: 'fa499e7757cd'
    }, {
      id: 2,
      title: 'My second thing',
      content: 'About my second thing',
      authorId: '32b3ba86ecf0'
    }, {
      id: 3,
      title: 'My third thing',
      content: 'About my third thing',
      authorId: '1072c9514418'
    }];

    this.comments = [{ id: 1, postId: 1, name: 'anon', content: 'anon content' }, { id: 2, postId: 1, name: 'wendy', content: 'wendy content' }, { id: 3, postId: 2, name: 'john', content: 'john content' }];
  }

  _createClass(FakeDatabase, [{
    key: 'getBlogPosts',
    value: function getBlogPosts() {
      return this.blogPosts;
    }
  }, {
    key: 'getBlogPost',
    value: function getBlogPost(id) {
      return this.blogPosts.filter(function (post) {
        return post.id === id;
      })[0];
    }
  }, {
    key: 'getCommentsForPost',
    value: function getCommentsForPost(postId) {
      return this.comments.filter(function (comment) {
        return comment.postId === postId;
      });
    }
  }, {
    key: 'getAuthor',
    value: function getAuthor(authorId) {
      return this.authors.filter(function (author) {
        return author.id === authorId;
      })[0];
    }
  }, {
    key: 'getPostsOfAuthor',
    value: function getPostsOfAuthor(authorId) {
      return this.getBlogPosts().filter(function (post) {
        return post.author === authorId;
      });
    }
  }, {
    key: 'addNewBlogPost',
    value: function addNewBlogPost(post) {
      post.id = this.blogPosts.length + 1;
      this.blogPosts.push(post);
      return post;
    }
  }, {
    key: 'addNewComment',
    value: function addNewComment(comment) {
      comment.id = this.comments.length + 1;
      this.comments.push(comment);
      return comment;
    }
  }]);

  return FakeDatabase;
}();

var fakeDatabase = exports.fakeDatabase = new FakeDatabase();