const Koa = require('koa');
const _ = require('koa-route');
var bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');

const app = new Koa();
app.use(cors());
app.use(bodyParser());

let users = [
  {
    id: 0,
    name: 'John',
    email: 'johncooper@mail.com',
    vip: true
  },
  {
    id: 1,
    name: 'Michael',
    email: 'michaeljordon@mail.com',
    vip: false
  },
  {
    id: 2,
    name: 'Donald',
    email: 'donaldtrump@mail.com',
    vip: false
  }
];
let posts = [
  {
    id: 0,
    title: 'Awesome post',
    description: 'Long description about my post...',
    authorId: 0
  },
  {
    id: 1,
    title: 'Good post',
    description: 'Small description',
    authorId: 1
  },
  {
    id: 2,
    title: 'Bad post',
    description: '...',
    authorId: 1
  }
];
let comments = [
  {
    id: 0,
    msg: 'Hi guys',
    postId: 0,
    authorId: 2
  },
  {
    id: 1,
    msg: 'This is awesome',
    postId: 0,
    authorId: 2
  },
  {
    id: 0,
    msg: 'Nothing interesting',
    postId: 2,
    authorId: 0
  }
];

const usersController = {
  getUsers: ctx => {
    const name = ctx.query && ctx.query.name;
    let usersList = users;
    if (name) {
      usersList = users.filter(user => user.name.indexOf(name) !== -1);
    }
    ctx.body = JSON.stringify(usersList);
  },

  getUser: (ctx, id) => {
    const user = users.find(user => user.id == id);
    if (!user) return ctx.throw('cannot find that user', 404);
    ctx.body = JSON.stringify(user);
  },

  addUser: ctx => {
    const user = ctx.request.body && ctx.request.body;
    users.push({ ...user, id: users.length });
    ctx.body = JSON.stringify(users);
  },

  removeUser: (ctx, id) => {
    users = users.filter(user => user.id != id);
    ctx.body = JSON.stringify(users);
  },

  editUser: (ctx, id) => {
    const updatedUser = ctx.request.body && ctx.request.body;
    users = users.map(user => (user.id == id ? updatedUser : user));
    ctx.body = JSON.stringify(users);
  }
};

const postsController = {
  getPosts: ctx => {
    const title = ctx.query && ctx.query.title;
    const authorId = ctx.query && ctx.query.authorId;
    let postsList = posts;
    if (authorId) {
      postsList = posts.filter(post => post.authorId.indexOf(authorId) !== -1);
    }
    if (title) {
      postsList = posts.filter(post => post.title.indexOf(title) !== -1);
    }
    ctx.body = JSON.stringify(postsList);
  },

  getPost: (ctx, id) => {
    const post = posts.find(post => post.id == id);
    if (!post) return ctx.throw('cannot find that post', 404);
    ctx.body = JSON.stringify(post);
  },

  addPost: ctx => {
    const post = ctx.request.body && ctx.request.body;
    posts.push({ ...post, id: posts.length });
    ctx.body = JSON.stringify(posts);
  },

  removePost: (ctx, id) => {
    posts = posts.filter(post => post.id != id);
    ctx.body = JSON.stringify(posts);
  },

  editPost: (ctx, id) => {
    const updatedPost = ctx.request.body && ctx.request.body;
    posts = posts.map(post => (post.id == id ? updatedPost : post));
    ctx.body = JSON.stringify(posts);
  }
};

const commentsController = {
  getComments: ctx => {
    const msg = ctx.query && ctx.query.msg;
    const authorId = ctx.query && ctx.query.authorId;
    const postId = ctx.query && ctx.query.postId;
    let commentsList = comments;
    if (postId) {
      commentsList = comments.filter(
        comment => comment.postId.indexOf(postId) !== -1
      );
    }
    if (userId) {
      commentsList = comments.filter(
        comment => comment.authorId.indexOf(authorId) !== -1
      );
    }
    if (title) {
      commentsList = comments.filter(
        comment => comment.msg.indexOf(msg) !== -1
      );
    }
    ctx.body = JSON.stringify(commentsList);
  },

  getComment: (ctx, id) => {
    const comment = comments.find(comment => comment.id == id);
    if (!comment) return ctx.throw('cannot find that comment', 404);
    ctx.body = JSON.stringify(comment);
  },

  addComment: ctx => {
    const comment = ctx.request.body && ctx.request.body;
    comments.push({ ...comment, id: comments.length });
    ctx.body = JSON.stringify(comments);
  },

  removeComment: (ctx, id) => {
    comments = comments.filter(comment => comment.id != id);
    ctx.body = JSON.stringify(comments);
  },

  editComment: (ctx, id) => {
    const updatedComment = ctx.request.body && ctx.request.body;
    comments = comments.map(
      comment => (comment.id == id ? updatedComment : comment)
    );
    ctx.body = JSON.stringify(comments);
  }
};

app.use(_.get('/users', usersController.getUsers));
app.use(_.get('/users/:id', usersController.getUser));
app.use(_.post('/users', usersController.addUser));
app.use(_.put('/users/:id', usersController.editUser));
app.use(_.delete('/users/:id', usersController.removeUser));

app.use(_.get('/posts', postsController.getPosts));
app.use(_.get('/posts/:id', postsController.getPost));
app.use(_.post('/posts', postsController.addPost));
app.use(_.put('/posts/:id', postsController.editPost));
app.use(_.delete('/posts/:id', postsController.removePost));

app.use(_.get('/comments', commentsController.getComments));
app.use(_.get('/comments/:id', commentsController.getComment));
app.use(_.post('/comments', commentsController.addComment));
app.use(_.put('/comments/:id', commentsController.editComment));
app.use(_.delete('/comments/:id', commentsController.removeComment));

app.listen(3000);
console.log('listening on port 3000');
