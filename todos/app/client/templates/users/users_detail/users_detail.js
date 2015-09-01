Template.UsersDetail.events({
});

Template.UsersDetail.helpers({
  todos: function () {
    var user = this;
    return Todos.find({userId: user._id}, {sort: {createdAt: -1}});
  }
});
