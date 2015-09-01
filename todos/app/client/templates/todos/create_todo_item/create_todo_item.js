Template.CreateTodoItem.events({
  'submit form': function (e, tmpl) {
    e.preventDefault();

    var subject = tmpl.find('input').value;

    Todos.insert({
      subject: subject,
      createdAt: new Date,
      isDone: false,
      userId: Meteor.userId()
    });

    tmpl.find('form').reset();
  }
});

Template.CreateTodoItem.helpers({
});
