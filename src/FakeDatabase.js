class FakeDatabase {
  constructor() {
    this.authors = [
      { id: 'fa499e7757cd', name: 'Horacio Bertorello', email: 'horacio.bertorello@gmail.com' },
      { id: '32b3ba86ecf0', name: 'Alan Bertorello', email: 'alan.bertorello@gmail.com' },
      { id: '1072c9514418', name: 'Conrado Bertorello', email: 'conrado.bertorello@gmail.com' },
    ];

    this.blogPosts = [
      {
        id: 1,
        title: 'My first thing',
        content: 'About my first thing' ,
        authorId: 'fa499e7757cd'
      },
      {
        id: 2,
        title: 'My second thing',
        content: 'About my second thing' ,
        authorId: '32b3ba86ecf0'
      },
      {
        id: 3,
        title: 'My third thing',
        content: 'About my third thing' ,
        authorId: '1072c9514418'
      }
    ];

    this.comments = [
      { id: 1, postId: 1, name: 'anon', content: 'anon content' },
      { id: 2, postId: 1, name: 'wendy', content: 'wendy content' },
      { id: 3, postId: 2, name: 'john', content: 'john content' },
    ];
  }

  getBlogPosts() {
    return this.blogPosts;
  }

  getBlogPost(id) {
    return this.blogPosts.filter((post) => {
      return post.id === id;
    })[0];
  }

  getCommentsForPost(postId) {
    return this.comments.filter((comment) => {
      return comment.postId === postId;
    });
  }

  getAuthor(authorId) {
    return this.authors.filter((author) => {
      return author.id === authorId;
    })[0];
  }

  getPostsOfAuthor(authorId) {
    return this.getBlogPosts().filter((post) => {
      return post.author === authorId;
    });
  }

  addNewBlogPost(post) {
    post.id = this.blogPosts.length + 1;
    this.blogPosts.push(post);
    return post;
  }

  addNewComment(comment) {
    comment.id = this.comments.length + 1;
    this.comments.push(comment);
    return comment;
  }
}

export const fakeDatabase = new FakeDatabase();
