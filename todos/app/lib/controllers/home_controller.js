HomeController = RouteController.extend({
  layoutTemplate: 'MasterLayout',

  subscriptions: function() {
    this.subscribe('todos');
    this.subscribe('users');
  },

  action: function() {
    this.render('Home');
  }
});
