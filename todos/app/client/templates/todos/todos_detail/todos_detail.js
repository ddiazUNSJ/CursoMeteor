Template.TodosDetail.events({
  'submit form#edit-todo': function (e, tmpl) {
    e.preventDefault();

    var subject = tmpl.find('input[name=subject]').value;
    var description = tmpl.find('textarea[name=description]').value;
    var id = this._id;

    Todos.update({_id: id}, {
      $set: {
        subject: subject,
        description: description,
        updatedAt: new Date
      }
    });

    Router.go('todos.detail', {_id: id});
  }
});

Template.TodosDetail.helpers({
  isMyTodo: function () {
    return this.userId === Meteor.userId();
  },

  user: function () {
    var todo = this;
    return Meteor.users.findOne({_id: todo.userId});
  }
});
