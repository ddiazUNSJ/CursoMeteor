Template.TodosList.events({
});

Template.TodosList.helpers({
  todos: function () {
    return Todos.find({userId: Meteor.userId()}, {
      sort: { createdAt: -1}
    });
  },

  isDoneClass: function () {
    return this.isDone ? 'done' : '';
  }
});
