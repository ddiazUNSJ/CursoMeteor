Template.TodoItem.events({
  'click [name=isDone]': function (e, tmpl) {
    var id = this._id;
    var isDone = tmpl.find('input').checked;
    Todos.update({_id: id}, {
      $set: {
        isDone: isDone
      }
    });
  }
});

Template.TodoItem.helpers({
  isDoneChecked: function () {
    return this.isDone ? 'checked' : '';
  }
});
