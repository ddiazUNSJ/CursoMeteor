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
  },
  estamento: {
    type: Boolean,
    optional: true,
    autoform: {
      type: "select-radio",
      options: function () {
        return [
          {label: "Estudiante", value: 1},
          {label: "Docente/Investigador", value: 2},
          {label: "Egresado", value: 3},
          {label: "Otro", value: 4}
        ];
      }
    }
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



{
  
}