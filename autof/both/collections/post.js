// both/collections/posts.js

Posts = new Mongo.Collection("posts");
Posts.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  content: {
    type: String,
    label: "Content"
  }
}));
if (Meteor.isClient) {
Meteor.subscribe("posts");
}

if (Meteor.isServer) {
  Meteor.startup(function () {

 Meteor.publish("posts", function () {
    return Posts.find();
  });
 });
}
 //Meteor.subscribe("posts");
