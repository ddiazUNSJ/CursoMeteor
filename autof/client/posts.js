// client/posts.js

Template.posts.helpers({
  posts: function(){
    return Posts.find();
  }
})