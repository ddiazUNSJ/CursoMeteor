Template.TodosCount.events({
});

Template.TodosCount.helpers({
  completedCount: function () {
    return Todos.find({userId: Meteor.userId(), isDone: true}).count();
  },

  totalCount: function () {
    return Todos.find({userId: Meteor.userId()}).count();
  }
});
